"use client";

import Hero from "../components/Hero";
//import useInitiateData from "../hooks/useInitiateData";
import BillCardGrid from "../components/BillCardGrid";
import Categories from "@/components/Categories";
import { Spinner } from "flowbite-react";
import myCategories from "./categories";

import { useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
}

export default function Home() {
  const [bills, setBills] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchBills = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = selectedCategory
          ? `/api/bills?category=${selectedCategory}`
          : "/api/bills";
        const response = await fetch(url);
        const result = await response.json();
        setBills(result.bills);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBills();
  }, [selectedCategory]);

  const handleCategorySelection = (category: Category) => {
    setSelectedCategory(category.id);
  };

  return (
    <>
      <Hero />
      <Categories
        categories={myCategories}
        onCategorySelect={handleCategorySelection}
      />
      {isLoading ? (
        <div className="flex justify-center items-center h-full ">
          <Spinner size="xl" />
        </div>
      ) : bills ? (
        <BillCardGrid bills={bills} />
      ) : (
        <h1>{error}</h1>
      )}
    </>
  );
}
