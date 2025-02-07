"use client";

import { Card, Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { Bill } from "../types/bill";




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
  //const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Link href={`/bill/${BillID}`} legacyBehavior>
        <Card href="#" className="max-w-sm cursor-pointer">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{LastUpdatedDate.toString()}</p>
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
              <div
                key={initiator}
                className="flex items-center space-x-4"
              ></div>
            ))}
          </div>

          <div className="dark:text-white">
            <div className="flex items-center gap-2">
              <span>{VotesUp}</span>
              <span>אזרחים הצביעו בעד</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{VotesDown}</span>
              <span>אזרחים הצביעו נגד</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{Comments}</span>
              <span> תגובות</span>
            </div>
            <div className="flex justify-center">
              <div className="p-3 items-center gap-2">
                <Button onClick={(e) => e.preventDefault()}>הצבע בעד</Button>
              </div>
              <div className="p-3 items-center gap-2">
                <Button onClick={(e) => e.preventDefault()}>הצבע נגד</Button>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default BillCard;
