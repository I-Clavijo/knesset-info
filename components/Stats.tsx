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
  /*
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1);

      return () => clearInterval(interval);
    }
  }, [count, targetNumber]);

  */

  return (
    <Card className=" text-center text-black dark:text-gray-300 flex-1 min-h-full h-full">
      <div className="flex flex-col items-center">
        <h2 className="text-sm font-bold">{targetNumber}</h2>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
    </Card>
  );
};

export default Stats;
