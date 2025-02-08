"use client";

import { Card, Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
import Bill from "../types/bill";
import Image from "next/image";

const BillCard: React.FC<Bill> = ({
  BillID,
  Name,
  LastUpdatedDate,
  Summary,
  Initiators,
  Category,
  VotesUp,
  VotesDown,
  Comments,
}: Bill) => {
  return (
    <>
      <Link href={`/bill/${BillID}`} legacyBehavior>
        <Card
          href="#"
          className=" max-w-sm cursor-pointer transform transition-transform hover:scale-105"
        >
          <h5 className="tracking-tight text-gray-900 dark:text-white">
            {Name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {LastUpdatedDate.toString()}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {Summary}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            קטגוריה: {Category}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            יזמים: {Initiators.join(", ")}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {Initiators.map((initiator) => (
              <div key={initiator} className="flex items-center space-x-4">
                {/* Additional initiator info can go here */}
              </div>
            ))}
          </div>

          <div className="dark:text-white">
            <div className="flex flex-col gap-2 dark:text-white">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/thumbs-up.svg"
                  alt="Thumbs Up"
                  width={20}
                  height={20}
                />
                <span className="font-bold text-green-600">
                  {VotesUp.toLocaleString()}
                </span>
                <span>הצביעו בעד</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/thumbs-down.svg"
                  alt="Thumbs Down"
                  width={20}
                  height={20}
                />
                <span className="font-bold text-red-600 dark:text-red-500">
                  {VotesDown.toLocaleString()}
                </span>
                <span>הצביעו נגד</span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4">
              <Button
                onClick={(e) => e.preventDefault()}
                color="success"
                className="bg-green-600 hover:bg-green-700"
              >
                <Image
                  src="/icons/thumbs-up.svg"
                  alt="Thumbs Up"
                  width={20}
                  height={20}
                  className="invert "
                />
                <span className="px-2">בעד</span>
              </Button>
              <Button onClick={(e) => e.preventDefault()} color="failure">
                <Image
                  src="/icons/thumbs-down.svg"
                  alt="Thumbs Down"
                  width={20}
                  height={20}
                  className="invert"
                />
                <span className="px-2">נגד</span>
              </Button>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <span>{Comments}</span>
              <span> תגובות</span>
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default BillCard;
