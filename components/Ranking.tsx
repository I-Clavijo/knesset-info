"use client";

import { Card } from "flowbite-react";
import React from "react";
import Image from "next/image";
import members from "@/app/members"; // Assuming this now includes NumberOfBills

const Ranking = () => {
  const Initiators = [427, 427, 427]; // These should now be PersonIDs
  const numberOfBills = 3;

  return (
    <Card
      className={`w-full h-full flex flex-col bg-gradient-to-r from-sky-700 to-indigo-800 shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center ">
          <span className="text-center text-xl font-bold tracking-tight text-white">
            חברי כנסת שיזמו יותר הצעות חוק
          </span>
        </div>
        <div className={`grid grid-cols-3 gap-4 p-6`}>
          {Initiators.length > 0 &&
            Initiators.map((initiator: number, index: number) => {
              const memberData = members.find(
                (member) => member.PersonID === initiator
              );
              if (!memberData) return null;

              return (
                <div
                  key={initiator}
                  className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative group">
                    <Image
                      src={`/images/knessetMembers/${initiator}.jpeg`}
                      alt="bill"
                      width={80}
                      height={80}
                      className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute top-0 right-0 bg-gray-900 text-white rounded-full w-7 h-7 flex items-center justify-center transform -translate-y-2 translate-x-2">
                      {index + 1}
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-sm font-semibold text-white">
                      {memberData.FirstName} {memberData.LastName}
                    </span>
                    <div className="text-sm text-gray-300 ">
                      {numberOfBills} הצעות חוק
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Card>
  );
};

export default Ranking;
