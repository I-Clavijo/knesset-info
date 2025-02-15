"use client";

import { Card } from "flowbite-react";
import React from "react";
import Image from "next/image";
import { PieChart } from "react-minimal-pie-chart";

interface MemberProps {
  member: {
    PersonID: number;
    LastName: string;
    FirstName: string;
    categoryCounts: {
      categoryId: number;
      categoryName: string;
      count: number;
    }[];
  } | null;
}

const MemberCardPage = ({ member }: MemberProps) => {
  return (
    <Card className="flex justify-center items-center  shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row w-full md:items-center">
        {/* Member Image and Info */}
        <div className="p-6 flex flex-col items-center text-center">
          <div className="relative p-2 rounded-xl backdrop-filter backdrop-blur-lg bg-white/5 border border-gray-800/90 shadow-lg">
            <Image
              src={`/images/knessetMembers/${member?.PersonID}.jpeg`}
              alt={`${member?.FirstName} ${member?.LastName}`}
              width={120}
              height={120}
              className="rounded-lg shadow-md"
              priority
            />
            <div className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
              {member?.FirstName} {member?.LastName}
            </div>
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="flex-1 ">
          <PieChart
            data={
              member?.categoryCounts.map((category) => ({
                title: category.categoryName,
                value: category.count,
                color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
              })) || []
            }
            label={({ dataEntry }) =>
              dataEntry.value > 1 ? dataEntry.title : ""
            }
            labelStyle={() => ({
              fill: "#fff",
              fontSize: "6px",
              paintOrder: "stroke",
              stroke: "#000",
              strokeWidth: "1px",
            })}
            animate={true}
            animationDuration={1000}
            radius={42}
            lineWidth={50}
          />
        </div>
      </div>
    </Card>
  );
};

export default MemberCardPage;
