"use client";

//import type { Bill } from "@/types/bill";
import { Card } from "flowbite-react";
import React from "react";
import Image from "next/image";
//import members from "../app/members";
//import myCategories from "../app/categories";

const member = {
  FirstName: "ללא שם",
  LastName: "ללא שם",
};

const MemberCardPage = () => {
  return (
    <div className="flex flex-wrap gap-4 min-h-screen p-1">
      <Card className="max-w-lg">
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="flex flex-col items-center">
            <Image
              src={`/images/knessetMembers/427.jpeg`}
              alt={`${member.FirstName} ${member.LastName}`}
              width={100}
              height={100}
              className="rounded-lg"
            />
            <div className="text-center mt-2">
              <span className="text-gray-700 dark:text-gray-400">
                {member.FirstName} {member.LastName}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MemberCardPage;
