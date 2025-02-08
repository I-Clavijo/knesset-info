"use client";

import Hero from "../components/Hero";
//import BillCard from "../components/BillCard";
//import Users from "../components/Users";
import useInitiateData from "../hooks/useInitiateData";
import useBills from "../hooks/useBills";
import BillCardGrid from "../components/BillCardGrid";
import Categories from "@/components/Categories";
import { Spinner } from "flowbite-react";
import { myCategories } from "./categories";
import RecentBills from "../components/RecentBills";

export default function Home() {
  //useInitiateData();
  const { bills, isLoading, error } = useBills();

  const categoryMap = myCategories.reduce((acc, category) => {
    acc[category.id] = category.name;
    return acc;
  }, {} as Record<number, string>);

  const filteredBills = bills
    ?.filter((bill) => bill.Comments === 0)
    .map((bill) => ({
      ...bill,
      Category: categoryMap[bill.Category] || bill.Category,
    }));

  return (
    <div>
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Categories categories={myCategories} />
        <RecentBills bills={filteredBills} />
        {isLoading ? (
          <div className="flex justify-center items-center h-full ">
            <Spinner size="xl" />
          </div>
        ) : error ? ( // Added error handling
          <div className="text-red-500">Error: {error}</div>
        ) : filteredBills && filteredBills.length > 0 ? (
          <BillCardGrid bills={filteredBills} />
        ) : (
          <div>No bills to display</div>
        )}
      </main>
    </div>
  );
}
