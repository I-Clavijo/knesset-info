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
}: Bill) => {
  return (
    <div className="flex flex-wrap gap-4 min-h-screen p-1">
      <Card className="max-w-lg">
        <div className="flex flex-col h-full space-y-4">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Name}
          </h1>

          <p className="text-gray-700 dark:text-gray-400">
            עדכון אחרון:{" "}
            {new Date(LastUpdatedDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>

          <hr className="border-gray-300 dark:border-gray-600" />

          <section>
            <h2 className="font-semibold text-gray-700 dark:text-white">
              תקציר:
            </h2>
            <p className="text-gray-700 dark:text-gray-400">{Summary}</p>
          </section>

          <section>
            <h2 className="font-semibold text-gray-700 dark:text-white">
              שינויים:
            </h2>
            <p className="text-gray-700 dark:text-gray-400">
              {MainInstructions}
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-gray-700 dark:text-white">
              השפעות:
            </h2>
            <p className="text-gray-700 dark:text-gray-400">{Impacts}</p>
          </section>

          <hr className="border-gray-300 dark:border-gray-600" />

          <section>
            <h2 className="font-semibold text-gray-700 dark:text-white">
              קטגוריה:{" "}
              <span className="font-normal text-gray-700 dark:text-gray-400">
                {myCategories.find(
                  (category) => category.id === Number(Category)
                )?.name || Category}
              </span>
            </h2>
          </section>

          <div className="mt-auto">
            <Button
              onClick={() => (window.location.href = FilePath)}
              className="w-full"
            >
              להורדת הצעת החוק
            </Button>
          </div>
        </div>
      </Card>

      {/* Initiators Card */}
      <Card className="grow max-w-lg">
        <div className="flex flex-col h-full space-y-4">
          <header className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center">
            <h2 className="text-md font-semibold text-gray-900 dark:text-white">
              יזמים
            </h2>
          </header>

          <div className="grid grid-cols-3 gap-4 p-4">
            {Initiators.length > 0 ? (
              Initiators.map((initiator: number) => {
                const member = members.find(
                  (member) => member.PersonID === initiator
                );
                return (
                  <div key={initiator} className="flex flex-col items-center">
                    <Image
                      src={`/images/knessetMembers/${initiator}.jpeg`}
                      alt={
                        member
                          ? `${member.FirstName} ${member.LastName}`
                          : "יזם"
                      }
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                    <div className="text-center mt-2">
                      <span className="text-gray-700 dark:text-gray-400">
                        {member?.FirstName} {member?.LastName}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-700 dark:text-gray-400 col-span-3 text-center">
                אין יזמים זמינים
              </p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BillCardPage;
