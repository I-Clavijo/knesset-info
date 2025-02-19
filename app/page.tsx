"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Hero from "../components/Hero";
import BillCardGrid from "../components/BillCardGrid";
import Categories from "@/components/Categories";
import { Spinner } from "flowbite-react";
import myCategories from "./categories";
import Stats from "@/components/Stats";
import FeaturedBillCardGrid from "@/components/FeaturedBillCardGrid";
import { Bill } from "@/types/bill";

interface Category {
  id: number;
  name: string;
}

const statsData = [
  { targetNumber: 4771, title: "בדיון מקודם (בעבודה)" },
  { targetNumber: 307, title: "בקריאה ראשונה" },
  { targetNumber: 164, title: "בקריאה שנייה ושלישית" },
];

const featuredBillsIDs = [2224080, 2196154, 2196837];

const PAGE_SIZE = 10;

export default function Home() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [featuredBills, setFeaturedBills] = useState<Bill[]>([]);
  const [membersRanking, setMembersRanking] = useState<[string, number][] | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Reset bills when category changes.
  useEffect(() => {
    setBills([]);
    setPage(1);
    setHasMore(true);
  }, [selectedCategory]);

  const fetchBills = useCallback(async (pageNumber: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const url = selectedCategory
        ? `/api/bills?category=${selectedCategory}&page=${pageNumber}`
        : `/api/bills?page=${pageNumber}`;
      const response = await fetch(url);
      const result = await response.json();
      setBills(prev => [...prev, ...result.bills]);
      if (result.bills.length < PAGE_SIZE) {
        setHasMore(false);
      }
      if (pageNumber === 1) {
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
      }
    } catch (error: unknown) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const fetchFeaturedBills = async () => {
      const fetchedFeaturedBills: Bill[] = [];
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
    fetchBills(page);
  }, [page, fetchBills]);

  useEffect(() => {
    if (isLoading) return;
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 1 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoading, hasMore]);

  const handleCategorySelection = (category: Category) => {
    setSelectedCategory(category.id);
  };

  return (
    <>
      <Hero />
      <Stats stats={statsData} />
      <div className="flex">
        <FeaturedBillCardGrid
          bills={featuredBills}
          topMembers={membersRanking || []}
        />
      </div>
      <Categories categories={myCategories} onCategorySelect={handleCategorySelection} />
      {bills.length === 0 && isLoading ? (
        <div className="flex justify-center items-center h-full ">
          <Spinner size="xl" />
        </div>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <BillCardGrid bills={bills} />
          {isLoading && (
            <div className="flex justify-center items-center pt-4">
              <Spinner size="xl" />
            </div>
          )}
          <div ref={loadMoreRef} className="h-1" />
        </>
      )}
    </>
  );
}