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
import { Bill } from "@/types/bill";

interface Category {
  id: number;
  name: string;
}

const statsData = [
  {
    targetNumber: 4771,
    title: "בדיון מקודם (בעבודה)",
  },
  {
    targetNumber: 307,
    title: "בקריאה ראשונה",
  },
  {
    targetNumber: 164,
    title: "בקריאה שנייה ושלישית",
  },
];

const featuredBillsIDs = [2224080, 2196154, 2196837];

export default function Home() {
  const [bills, setBills] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [featuredBills, setFeaturedBills] = useState<Bill[] | null>(null);
  const [membersRanking, setMembersRanking] = useState<
    [string, number][] | null
  >(null);

  useEffect(() => {
    const fetchFeaturedBills = async () => {
      const fetchedFeaturedBills = [];
      for (const billID of featuredBillsIDs) {
        const response = await fetch(`/api/bill/${billID}`);
        const data = await response.json();
        fetchedFeaturedBills.push(data.bill);
      }
      setFeaturedBills(fetchedFeaturedBills);
    };
    fetchFeaturedBills();
  }, []);

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
        //fetch("/api/db-update");

        const result = await response.json();

        const initiatorsArray: number[] = [];
        for (const bill of result.bills) {
          initiatorsArray.push(...bill.Initiators);
        }
        const counts: { [key: number]: number } = {};
        initiatorsArray.forEach((x) => {
          counts[x] = (counts[x] || 0) + 1;
        });

        const sortedInitiators = Object.entries(counts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 3);

        setMembersRanking(sortedInitiators);

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

      <div className="flex">
        <FeaturedBillCardGrid
          bills={featuredBills ?? []}
          topMembers={membersRanking ?? []}
        />
      </div>
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
