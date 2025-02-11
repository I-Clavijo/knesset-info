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
        className="max-w-sm cursor-pointer transform transition-transform hover:scale-105 bg-gradient-to-r from-sky-600 to-blue-800"
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
