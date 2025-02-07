import React from "react";
import BillCard from "./BillCard";

interface Bill {
  id: number;
  name: string;
  summary: string;
  initiators: string[];
  category: string;
  date: string;
  votesUp: number;
  votesDown: number;
  comments: number;
}

interface BillCardGridProps {
  bills: Bill[];
}

const BillCardGrid: React.FC<BillCardGridProps> = ({ bills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
      {bills.map((bill) => (
        <BillCard key={bill.id} {...bill} />
      ))}
    </div>
  );
};

export default BillCardGrid;
