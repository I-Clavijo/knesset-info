import React from "react";
import BillCard from "./BillCard";
import { Bill } from "../types/bill";

interface BillCardGridProps {
  bills: Bill[];
}

const BillCardGrid: React.FC<BillCardGridProps> = ({ bills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4">
      {bills.map((bill) => (
        <BillCard key={bill.BillID} {...bill} />
      ))}
    </div>
  );
};

export default BillCardGrid;
