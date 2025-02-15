"use client";

import React, { useEffect } from "react";
//import { Bill } from "@/types/bill";
import { Spinner } from "flowbite-react";
import MemberCardPage from "@/components/MemberCardPage";

export default function MemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap the params promise using React.use()
  const { id } = React.use(params);

  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchBills = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("/api/bills");
        const data = await response.json();
        console.log(data);
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
            <MemberCardPage />
          )}
        </h1>
      </main>
    </div>
  );
}
