import React from "react";
import Hero from "../components/Hero";
import BillCard from "../components/BillCard";
import Footer from "../containers/Footer";

const bill1 = {
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
};

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <BillCard {...bill1} />
      </main>

      <Footer />
    </div>
  );
}
