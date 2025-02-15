"use client";

import React, { useEffect } from "react";
//import { Bill } from "@/types/bill";
import { Spinner } from "flowbite-react";
import MemberCardPage from "@/components/MemberCardPage";
import members from "@/app/members";
import categories from "@/app/categories";

export default function MemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap the params promise using React.use()
  const { id } = React.use(params);

  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [member, setMember] = React.useState<{
    PersonID: number;
    LastName: string;
    FirstName: string;
    categoryCounts: {
      categoryId: number;
      categoryName: string;
      count: number;
    }[];
  } | null>(null);

  useEffect(() => {
    const fetchBills = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("/api/bills");
        const data = await response.json();
        const bills = data.bills;

        const result = members.map((member) => {
          const categoryCounts = categories.map((category) => {
            const count = bills.filter(
              (bill: { Category: number; Initiators: number[] }) =>
                bill.Category === category.id &&
                bill.Initiators.includes(member.PersonID)
            ).length;

            return {
              categoryId: category.id,
              categoryName: category.name,
              count: count,
            };
          });

          return {
            PersonID: member.PersonID,
            LastName: member.LastName,
            FirstName: member.FirstName,
            categoryCounts: categoryCounts,
          };
        });

        const foundMember =
          result.find((member) => member.PersonID === Number(id)) || null;
        setMember(foundMember);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBills();
  }, [id]);

  return (
    <div>
      <main className="p-3 flex-grow flex justify-center">
        <h1 className=" text-black dark:text-white">
          {isLoading ? (
            <Spinner size="lg" />
          ) : error ? (
            error
          ) : (
            <MemberCardPage member={member} />
          )}
        </h1>
      </main>
    </div>
  );
}
