import React from "react";
import BillCard from "./BillCard";
import { Bill } from "../types/bill";
import { Button } from "flowbite-react";

interface RecentBillsProps {
  bills: Bill[];
}

const RecentBills: React.FC<RecentBillsProps> = ({ bills }) => {
  const sortedBills = [...bills].sort(
    (a, b) =>
      new Date(b.LastUpdatedDate).getTime() -
      new Date(a.LastUpdatedDate).getTime()
  );

  const recentBills = sortedBills.slice(0, 4);

  // Replace this with your actual navigation logic if needed.
  const handleViewAll = () => {
    console.log("View all recent bills clicked!");
    // e.g., history.push("/recent-bills") if using react-router
  };

  return (
    <div className="p-3 rounded-lg shadow-md">
      <div className="flex shadow-md justify-between items-center mb-3 bg-white dark:bg-gray-800 p-3 rounded-lg">
        <h2 className=" text-black dark:text-white font-bold">
          הצעות חוק בקריאה ראשונה אחרונות
        </h2>
        <Button onClick={handleViewAll} className="   transition duration-200">
          הצג עוד
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {recentBills.map((bill) => (
          <BillCard key={bill.BillID} {...bill} />
        ))}
      </div>
    </div>
  );
};

export default RecentBills;
