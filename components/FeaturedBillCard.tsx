"use client";

import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";
import type { Bill } from "@/types/bill";

const BillCard = ({
  BillID = 0,
  Name = "ללא שם",
  LastUpdatedDate = new Date(),
  Summary = "אין תקציר",
  color,
}: Bill & { color?: string }) => {
  const colorClass =
    color === "green"
      ? "to-green-800"
      : color === "blue"
      ? "to-blue-900"
      : color === "slate"
      ? "to-slate-700"
      : "to-gray-800";

  return (
    <Link href={`/bill/${BillID}`} legacyBehavior>
      <Card
        href="#"
        className={`h-full flex flex-col cursor-pointer transform transition-transform hover:scale-105 bg-gradient-to-r from-teal-600 ${colorClass}`}
      >
        <div className="flex flex-col flex-grow">
          <h5 className="text-white">{Name}</h5>
          <p className="font-normal text-white/80">
            {new Date(LastUpdatedDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <hr className="my-2 border-white/20" />
            <p className="font-normal text-white/80 overflow-hidden">
            {Summary.length > 200 ? Summary.slice(0, 130) + '...' : Summary}
            </p>
        </div>
      </Card>
    </Link>
  );
};

export default BillCard;
