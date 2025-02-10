"use client";

import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";
import type { Bill } from "@/types/bill";
//import Image from "next/image";

const BillCard = ({
  BillID = 0,
  Name = "ללא שם",
  LastUpdatedDate = new Date(),
  Summary = "אין תקציר",
  Initiators = [],
  Category = "ללא קטגוריה",
}: //VotesUp = 0,
//VotesDown = 0,
//Comments = 0,
Bill) => {
  /*
  
  const [votesUp, setVotesUp] = useState(VotesUp);
  const [votesDown, setVotesDown] = useState(VotesDown);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVoteUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (hasVoted && votesUp == 0) {
      setVotesDown(votesDown - 1);
      setVotesUp(votesUp + 1);
    }
    if (!hasVoted) {
      setVotesUp(votesUp + 1);
      setHasVoted(true);
    }
    // Here you would typically make an API call to update the vote count on the server
    // Example:
    // fetch(`/api/bill/${BillID}/voteup`, { method: 'POST' })
    //   .then(response => 
    //   .catch(error => 
  };

  
  const handleVoteDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (hasVoted && votesDown == 0) {
      setVotesUp(votesUp - 1);
      setVotesDown(votesDown + 1);
    }
    if (!hasVoted) {
      setVotesUp(votesDown + 1);
      setHasVoted(true);
    }
  };
  */

  return (
    <Link href={`/bill/${BillID}`} legacyBehavior>
      <Card
        href="#"
        className="max-w-sm cursor-pointer transform transition-transform hover:scale-105"
      >
        <div className="flex flex-col h-full">
          <div className="flex-grow">
            <h5 className="tracking-tight text-gray-900 dark:text-white">
              {Name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {new Date(LastUpdatedDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
            <hr className="my-2 border-gray-300 dark:border-gray-600" />{" "}
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {Summary}
            </p>
            <hr className="my-2 border-gray-300 dark:border-gray-600" />{" "}
            <p className="font-normal text-gray-700 dark:text-white inline-block">
              קטגוריה:{" "}
              <span className=" text-gray-700 dark:text-gray-400">
                {Category}
              </span>
            </p>
            <p className="font-normal text-gray-700 dark:text-white">
              יזמים:{" "}
              <span className=" text-gray-700 dark:text-gray-400">
                {Initiators.join(", ")}
              </span>
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {Initiators.map((initiator) => (
                <div
                  key={initiator}
                  className="flex items-center space-x-4"
                ></div>
              ))}
            </div>
          </div>
          {/*
          <div className="mt-4 dark:text-white">
            <div className="flex flex-col gap-2 dark:text-white">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/thumbs-up.svg"
                  alt="Thumbs Up"
                  width={20}
                  height={20}
                />
                <span className="font-bold text-green-600">
                  {votesUp.toLocaleString()}
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
                  {votesDown.toLocaleString()}
                </span>
                <span>הצביעו נגד</span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-4">
              <Button
                onClick={handleVoteUp}
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
              <Button onClick={handleVoteDown} color="failure">
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
          */}
        </div>
      </Card>
    </Link>
  );
};

export default BillCard;
