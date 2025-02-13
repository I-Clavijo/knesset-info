import React from "react";
import BillCard from "./FeaturedBillCard";
import { Bill } from "../types/bill";

interface BillCardGridProps {
  bills: Bill[];
}
const BillCardGrid = ({ bills }: BillCardGridProps) => {
  const colors: string[] = ["blue", "green", "lime"];

  return (
    <>
      <div className=" mt-4 rounded-lg  mb-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mx-4">
          {bills.map((bill, index) => (
            <BillCard
              key={bill.BillID}
              {...bill}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BillCardGrid;
