"use client";

import React from "react";
import Hero from "../components/Hero";
//import BillCard from "../components/BillCard";
import Footer from "../containers/Footer";
//import Users from "../components/Users";
import { useInitiateData } from "../hooks/useInitiateData";
import BillCardGrid from "../components/BillCardGrid";
import Categories from "@/components/Categories";
import { ThemeModeScript } from "flowbite-react";

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

const myCategories = [
  { id: "1", name: "ביטחון וצבא" },
  { id: "2", name: "בריאות" },
  { id: "3", name: "חינוך והשכלה" },
  { id: "4", name: "תחבורה" },
  { id: "5", name: "כלכלה ותקציב המדינה" },
  { id: "6", name: "עבודה ורווחה" },
  { id: "7", name: "משפטים וחוקה" },
  { id: "8", name: "דיור ותשתיות" },
  { id: "9", name: "חקלאות ואיכות הסביבה" },
  { id: "10", name: "דת ומדינה" },
  { id: "11", name: "מדיניות חוץ" },
  { id: "12", name: "הגירה ואזרחות" },
  { id: "13", name: "טכנולוגיה וסייבר" },
  { id: "14", name: "תרבות וספורט" },
  { id: "15", name: "חברה ומגדר" },
  { id: "16", name: "מגזר ערבי ומיעוטים" },
  { id: "17", name: "פריפריה ופיתוח אזורי" },
  { id: "18", name: "פנסיה וגמלאים" },
  { id: "19", name: "חדשנות ומדע" },
  { id: "20", name: "משרד הפנים ורשויות מקומיות" },
];

export default function Home() {
  useInitiateData();

  return (
    <div>
      <main className="flex flex-col items-center w-full">
        <Hero />
        <ThemeModeScript mode="dark" />
        <Categories categories={myCategories} />
        <BillCardGrid bills={bills} />
        {/*<BillCard {...bill1} />*/}
      </main>
      <Footer />
    </div>
  );
}
