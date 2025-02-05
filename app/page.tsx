"use client";

import React from "react";
import Hero from "../components/Hero";
import BillCard from "../components/BillCard";
import Footer from "../containers/Footer";
//import Users from "../components/Users";
import { useInitiateData } from "../hooks/useInitiateData";
import BillCardGrid from "../components/BillCardGrid";

const bills = [
  {
    id: 1,
    name: "חוק הגיוס",
    summary:
      " חוק הגיוס מאפשר לממשלה להגייס חיילים עבור צרכי המדינהגשדגשדגשדגשדגשדגשדגשג שדג",
    initiators: ["משה כחלון", "אבי ניסנקורן"],
    category: "צבא וביטחון",
    date: "2021-12-31",
    votesUp: 100,
    votesDown: 20,
    comments: 10,
  },
  {
    id: 2,
    name: "חוק הגיוס",
    summary:
      " חוק הגיוס מאפשר לממשלה להגייס חיילים עבור צרכי המדינהגשדגשדגשדגשדגשדגשדגשג שדג",
    initiators: ["משה כחלון", "אבי ניסנקורן"],
    category: "צבא וביטחון",
    date: "2021-12-31",
    votesUp: 100,
    votesDown: 20,
    comments: 10,
  },
  {
    id: 3,
    name: "חוק הגיוס",
    summary:
      " חוק הגיוס מאפשר לממשלה להגייס חיילים עבור צרכי המדינהגשדגשדגשדגשדגשדגשדגשג שדג",
    initiators: ["משה כחלון", "אבי ניסנקורן"],
    category: "צבא וביטחון",
    date: "2021-12-31",
    votesUp: 100,
    votesDown: 20,
    comments: 10,
  },
  {
    id: 4,
    name: "חוק הגיוס",
    summary:
      " חוק הגיוס מאפשר לממשלה להגייס חיילים עבור צרכי המדינהגשדגשדגשדגשדגשדגשדגשג שדג",
    initiators: ["משה כחלון", "אבי ניסנקורן"],
    category: "צבא וביטחון",
    date: "2021-12-31",
    votesUp: 100,
    votesDown: 20,
    comments: 10,
  },
  {
    id: 5,
    name: "חוק הגיוס",
    summary:
      " חוק הגיוס מאפשר לממשלה להגייס חיילים עבור צרכי המדינהגשדגשדגשדגשדגשדגשדגשג שדג",
    initiators: ["משה כחלון", "אבי ניסנקורן"],
    category: "צבא וביטחון",
    date: "2021-12-31",
    votesUp: 100,
    votesDown: 20,
    comments: 10,
  },
  {
    id: 6,
    name: "חוק הגיוס",
    summary:
      " חוק הגיוס מאפשר לממשלה להגייס חיילים עבור צרכי המדינהגשדגשדגשדגשדגשדגשדגשג שדג",
    initiators: ["משה כחלון", "אבי ניסנקורן"],
    category: "צבא וביטחון",
    date: "2021-12-31",
    votesUp: 100,
    votesDown: 20,
    comments: 10,
  },
];

export default function Home() {
  useInitiateData();

  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <BillCardGrid bills={bills} />
        {/*<BillCard {...bill1} />*/}
      </main>
      <Footer />
    </div>
  );
}
