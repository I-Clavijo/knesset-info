"use client";

import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";
import type { Bill } from "@/types/bill";
//import myCategories from "../app/categories";
//import members from "@/app/members";

const BillCard = ({
  BillID = 0,
  Name = "ללא שם",
  LastUpdatedDate = new Date(),
  Summary = "אין תקציר",
  //1Initiators = [],
  //Category = "ללא קטגוריה",
  color,
}: Bill & { color?: string }) => {
  const colorClass =
    color === "green"
      ? "to-green-800"
      : color === "blue"
      ? "to-blue-800"
      : color === "lime"
      ? "to-lime-900"
      : "to-gray-800";

  return (
    <Link href={`/bill/${BillID}`} legacyBehavior>
      <Card
        href="#"
        className={`h-full max-w-sm cursor-pointer transform transition-transform hover:scale-105 bg-gradient-to-r from-sky-700 ${colorClass}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <h5 className="tracking-tight text-white">{Name}</h5>
            <p className="font-normal text-white/80">
              {new Date(LastUpdatedDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
            <hr className="my-2 border-white/20" />{" "}
            <p className="font-normal text-white/80">
              {Summary.length > 100
                ? `${Summary.substring(0, 100)}...`
                : Summary}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BillCard;
