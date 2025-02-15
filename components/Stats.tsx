//import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

interface StatItem {
  targetNumber: number;
  title: string;
}

interface StatsProps {
  stats: StatItem[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="flex gap-4 pt-4 px-4 h-full">
      {stats.map((stat, index) => (
        <div key={index} className="flex-1">
          <StatCard {...stat} />
        </div>
      ))}
    </div>
  );
};

const StatCard: React.FC<StatItem> = ({ targetNumber, title }) => {

  return (
    <Card className=" text-center text-black dark:text-gray-300  h-full">
      <div className="h-full flex flex-col items-center">
        <h2 className="text-xs md:text-lg lg:text-md font-bold">{targetNumber}</h2>
        <h3 className="text-xs md:text-base lg:text-md font-semibold">{title}</h3>
      </div>
    </Card>
  );
};

export default Stats;
