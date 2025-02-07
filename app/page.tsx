"use client";

import Hero from "../components/Hero";
//import BillCard from "../components/BillCard";
import Footer from "../containers/Footer";
//import Users from "../components/Users";
//import useInitiateData from "../hooks/useInitiateData";
import useBills from "../hooks/useBills";
import BillCardGrid from "../components/BillCardGrid";
import Categories from "@/components/Categories";
import { Spinner } from "flowbite-react";
import { myCategories } from "./categories";
import RecentBills from "../components/RecentBills";

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
        <RecentBills bills={transformedBills} />
        {isLoading ? (
          <div className="flex justify-center items-center h-full ">
            <Spinner size="xl" />
          </div>
        ) : error ? ( // Added error handling
          <div className="text-red-500">Error: {error}</div>
        ) : transformedBills && transformedBills.length > 0 ? (
          <BillCardGrid bills={transformedBills} />
        ) : (
          <div>No bills to display</div>
        )}
      </main>
      <Footer />
    </div>
  );
}
