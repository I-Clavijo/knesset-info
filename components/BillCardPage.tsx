"use client";

import type { Bill } from "@/types/bill";
import { Card, Button } from "flowbite-react";
import React from "react";
import Image from "next/image";
import members from "../app/members";
import myCategories from "../app/categories";

const BillCardPage = ({
  Name = "ללא שם",
  LastUpdatedDate = new Date(),
  Summary = "אין תקציר",
  MainInstructions = "אין הוראות ראשיות",
  Impacts = "אין השפעות",
  Initiators = [],
  Category = "ללא קטגוריה",
  FilePath = "",
}: //VotesUp = 0,
//VotesDown = 0,
//Comments = 0,
Bill) => {
  console.log(Initiators);
  return (
    <div className="flex flex-wrap gap-4 min-h-screen">
      <Card className="max-w-lg">
        <div className="flex flex-col h-full">
          <span className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white">
            {Name}
          </span>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {new Date(LastUpdatedDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <hr className="my-2 border-gray-300 dark:border-gray-600" />
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {Summary}
          </p>
          <p className="font-normal text-gray-700 dark:text-white inline-block">
            שינויים:
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {MainInstructions}
          </p>
          <p className="font-normal text-gray-700 dark:text-white inline-block">
            השפעות:
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {Impacts}
          </p>
          <hr className="my-2 border-gray-300 dark:border-gray-600" />
          <p className="font-normal text-gray-700 dark:text-white inline-block">
            קטגוריה:{" "}
            <span className="text-gray-700 dark:text-gray-400">
              {myCategories.find((category) => category.id === Number(Category))
                ?.name || Category}
            </span>
          </p>
          <div className="mt-auto">
            <Button onClick={() => window.location.href = FilePath}>להורדת הצעת החוק</Button>
          </div>
        </div>
      </Card>

      <Card className=" grow max-w-lg">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
            <span className="text-center text-md tracking-tight text-gray-900 dark:text-white my-auto">
              יזמים
            </span>
          </div>
          <div
            className={`grid grid-cols-${Math.min(
              Initiators.length,
              3
            )} gap-4 p-4 `}
          >
            {Initiators.length > 0 &&
              Initiators.map((initiator: number) => (
                <div key={initiator} className="flex flex-col items-center">
                  <Image
                    src={`/images/knessetMembers/${initiator}.jpeg`}
                    alt="bill"
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div className="text-center">
                    <span>
                      {
                        members.find((member) => member.PersonID === initiator)
                          ?.FirstName
                      }
                    </span>{" "}
                    <span>
                      {
                        members.find((member) => member.PersonID === initiator)
                          ?.LastName
                      }
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BillCardPage;
