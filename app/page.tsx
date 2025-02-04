import React from "react";
import Hero from "../components/Hero";
import BillCard from "../components/BillCard";

const bill1 = {
  id: 1,
  name: "חוק הגיוס",
  amount: 120,
}

export default function Home() {
  return (
    <div >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <BillCard {...bill1}/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
