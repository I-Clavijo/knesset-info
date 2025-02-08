"use client";
import React from "react";

export default function BillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  console.log("bill id = ", id);

  return (
    <div>
      <main className="flex-grow flex justify-center">
        <h1 className="text-3xl text-black dark:text-white">
          this page is under construction for bill id: {id}
        </h1>
      </main>
    </div>
  );
}
