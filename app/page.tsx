"use client";

import React, { Suspense } from "react";
import Hero from "../components/Hero";
//import BillCard from "../components/BillCard";
import Footer from "../containers/Footer";
//import Users from "../components/Users";
import useInitiateData from "../hooks/useInitiateData";
import useBills from "../hooks/useBills";
import BillCardGrid from "../components/BillCardGrid";
import Categories from "@/components/Categories";
import { Spinner } from "flowbite-react";
import { myCategories } from "./categories";

export default function Home() {
  //useInitiateData();
  const { bills, isLoading, error } = useBills();

  const transformedBills = bills?.map((bill) => ({
    ...bill,
    Summary: "summary",
    Initiators: ["pepe,lola"],
    Category: "category",
    VotesUp: 2,
    VotesDown: 3,
    Comments: 4,
  }));

  console.log(transformedBills);

  return (
    <div>
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Categories categories={myCategories} />
        {isLoading ? (
          <div className="flex justify-center items-center h-full ">
            <Spinner size="xl" />
          </div>
        ) : error ? ( // Added error handling
          <div className="text-red-500">Error: {error}</div>
        ) : transformedBills && transformedBills.length > 0 ? (
          <BillCardGrid bills={transformedBills} />
        ) : (
          <div>No bills to display</div> // Handle the case where there are no bills
        )}
      </main>
      <Footer />
    </div>
  );
}
