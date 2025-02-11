"use client";
import React, { useEffect } from "react";
import BillCardPage from "@/components/BillCardPage";
import { Bill } from "@/types/bill";
import { Spinner } from "flowbite-react";

export default function BillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = React.use(params);
  const [error, setError] = React.useState<string | null>(null);
  const [bill, setBill] = React.useState<Bill | null>(null);

  useEffect(() => {
    const fetchBill = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`/api/bill/${id}`);
        const data = await response.json();
        setBill(data.bill);

        if (!data.success) {
          setError(data.error);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBill();
  }, [id]);

  return (
    <div>
      <main className="p-3 flex-grow flex justify-center">
        <h1 className=" text-black dark:text-white">
          {isLoading ? (
            <Spinner size="lg" />
          ) : bill ? (
            <BillCardPage key={bill.BillID} {...bill} />
          ) : (
            error
          )}
        </h1>
      </main>
    </div>
  );
}
