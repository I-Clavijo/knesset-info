"use client";

import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";
import type { Bill } from "@/types/bill";
//import Image from "next/image";
import myCategories from "../app/categories";
import members from "@/app/members";

const BillCard = ({
  BillID = 0,
  Name = "ללא שם",
  LastUpdatedDate = new Date(),
  Summary = "אין תקציר",
  Initiators = [],
  Category = "ללא קטגוריה",
  color,
}: Bill & { color?: string }) => {
  const colorClass =
    color === "green"
      ? "to-green-800"
      : color === "blue"
      ? "to-blue-800"
      : color === "orange"
      ? "to-orange-900"
      : "to-gray-800";

  return (
    <Link href={`/bill/${BillID}`} legacyBehavior>
      <Card
        href="#"
        className={`max-w-sm cursor-pointer transform transition-transform hover:scale-105 bg-gradient-to-r from-sky-600 ${colorClass}`}
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
            <p className="font-normal text-white/80">{Summary}</p>
            <hr className="my-2 border-white/20" />{" "}
            <p className="font-normal text-white inline-block">
              קטגוריה:{" "}
              <span className="text-white/80">
                {myCategories.find(
                  (category) => category.id === Number(Category)
                )?.name || Category}
              </span>
            </p>
            <p className="font-normal text-white">
              יזמים:{" "}
              <span className="text-white/80">
                {Initiators.length > 0 &&
                  Initiators.map((initiator) => {
                    const member = members.find(
                      (m) => m.PersonID === initiator
                    );
                    return `${member?.FirstName} ${member?.LastName}`;
                  }).join(", ")}
              </span>
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BillCard;
