import React from "react";
import BillCard from "./BillCard";
import { Bill } from "../types/bill";

interface BillCardGridProps {
  bills: Bill[];
}
const BillCardGrid = ({ bills }: BillCardGridProps) => {
  return (
    <>
      <div className=" rounded-lg  mb-3">
        {/*
        <div className="mx-4 flex shadow-md justify-between items-center mb-3 bg-white dark:bg-gray-800 p-3 rounded-lg ">
          <h2 className="w-full text-center text-black dark:text-white font-bold">
            הצעות החוק בקריאה ראשונה
          </h2>
        </div>
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4">
          {bills.map((bill) => (
            <BillCard key={bill.BillID} {...bill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BillCardGrid;
