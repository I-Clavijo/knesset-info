import React from "react";
import BillCard from "./BillCard";
import { Bill } from "../types/bill";
import { Button } from "flowbite-react";

interface BillCardGridProps {
  bills: Bill[];
}

const BillCardGrid: React.FC<BillCardGridProps> = ({ bills }) => {
  return (
    <>
      <div className=" rounded-lg shadow-md mb-3">
        <div className="mx-3 flex shadow-md justify-between items-center mb-3 bg-white dark:bg-gray-800 p-3 rounded-lg ">
          <h2 className=" text-black dark:text-white font-bold">
            כל הצעות החוק בקריאה ראשונה
          </h2>
          <Button className="   transition duration-200">הצג עוד</Button>
        </div>
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
