"use client";

import Hero from "../components/Hero";
//import useInitiateData from "../hooks/useInitiateData";
import BillCardGrid from "../components/BillCardGrid";
import Categories from "@/components/Categories";
import { Spinner } from "flowbite-react";
import myCategories from "./categories";
import Stats from "@/components/Stats";
import FeaturedBillCardGrid from "@/components/FeaturedBillCardGrid";

import { useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
}

const statsData = [
  {
    targetNumber: 100,
    title: "בדיון מקודם",
  },
  {
    targetNumber: 500,
    title: "בקריאה ראשונה",
  },
  {
    targetNumber: 1000,
    title: "בקריאה שנייה ושלישית",
  },
];

const featuredBills = [
  {
    BillID: 1,
    Name: "הצעת חוק השידור הציבורי הישראלי ",
    LastUpdatedDate: new Date(),
    Summary: "אין תקציר",
    Initiators: [467],
    Category: "1",
    KnessetNum: 25,
    MainInstructions: "",
    Impacts: "",
    VotesUp: 0,
    VotesDown: 0,
    Status: "pending",
    Comments: 0,
    FilePath: "",
  },
  {
    BillID: 2,
    Name: "הצעת חוק-יסוד: השפיטה (תיקון- סמכויות שיפוט ותקנות סדרי דין באישור ועדה)ללא שם",
    LastUpdatedDate: new Date(),
    Summary: "אין תקציר",
    Initiators: [467],
    Category: "1",
    KnessetNum: 25,
    MainInstructions: "",
    Impacts: "",
    VotesUp: 0,
    VotesDown: 0,
    Status: "pending",
    Comments: 0,
    FilePath: "",
  },
];

export default function Home() {
  const [bills, setBills] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("flowbite-theme-mode", "dark");
    document.documentElement.classList.add("dark");

    const fetchBills = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = selectedCategory
          ? `/api/bills?category=${selectedCategory}`
          : "/api/bills";
        const response = await fetch(url);
        const resp = (await fetch("/api/test")).text();
        console.log(resp);
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
      <Stats stats={statsData} />
      {isLoading ? (
        <div className="flex justify-center items-center h-full ">
          <Spinner size="xl" />
        </div>
      ) : bills ? (
        <FeaturedBillCardGrid bills={featuredBills} />
      ) : (
        <h1>{error}</h1>
      )}
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
