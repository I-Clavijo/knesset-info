import React, { useEffect, useState } from "react";
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
    <div className="flex gap-4 p-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

const StatCard: React.FC<StatItem> = ({ targetNumber, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 20); 

      return () => clearInterval(interval);
    }
  }, [count, targetNumber]);

  return (
    <Card className="text-center text-black dark:text-gray-500 flex-1 min-w-0">
      <h2 className="text-2xl font-bold">{count}</h2>
      <h3 className="text-lg font-semibold">{title}</h3>
    </Card>
  );
};

export default Stats;
