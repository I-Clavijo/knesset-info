import React from "react";
import BillCard from "./FeaturedBillCard";
import { Bill } from "../types/bill";
import Ranking from "./Ranking";

interface BillCardGridProps {
  bills: Bill[];
  topMembers: number[];
}
const BillCardGrid = ({ bills, topMembers }: BillCardGridProps) => {
  const colors: string[] = ["blue", "green", "slate"];

  return (
    <div className="flex mt-4 rounded-lg ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mx-4 w-full">
        {bills.map((bill, index: number) => (
          <div key={bill.BillID} className="min-h-[200px] h-full">
            <BillCard {...bill} color={colors[index % colors.length]} />
          </div>
        ))}
        <div className="col-span-full md:col-span-2 md:col-start-4 h-full">
          <Ranking topMembers = {topMembers}/>
        </div>
      </div>
    </div>
  );
};

export default BillCardGrid;
