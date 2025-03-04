// Use client-side imports
import { Card } from "flowbite-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import members from "@/app/members";

interface RankingProps {
  topMembers: [string, number][];
}

const Ranking = ({ topMembers }: RankingProps) => (
  <Card className="w-full h-full flex flex-col bg-gradient-to-r from-slate-500 to-green-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-center">
        <h2 className="mb-3 text-center text-md font-bold tracking-tight text-white">
          מובילים במספר הצעות חוק
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-1">
        {topMembers.map(([initiator, count], index) => {
          const memberData = members.find(
            (member) => member.PersonID === parseInt(initiator)
          );
          if (!memberData) return null;

          return (
            <Link key={initiator} href={`/member/${initiator}`} legacyBehavior>
              <div className=" cursor-pointer flex flex-col items-center backdrop-blur-sm bg-white/10 rounded-xl p-2 shadow-md hover:shadow-lg">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg "></div>
                  <Image
                    src={`/images/knessetMembers/${initiator}.jpeg`}
                    alt={`${memberData.FirstName} ${memberData.LastName}`}
                    width={100}
                    height={100}
                    className="rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 relative"
                  />
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-gray-500 to-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center transform -translate-y-2 translate-x-2 shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs sm:text-xs font-bold text-white drop-shadow-md">
                    {memberData.FirstName} {memberData.LastName}
                  </span>
                  <p className="text-xs font-medium text-gray-300">
                    {count} הצעות חוק
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </Card>
);

export default Ranking;
