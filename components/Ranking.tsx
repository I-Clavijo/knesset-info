"use client";

import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Ranking = () => {
  return (
    <Link href={"/"} legacyBehavior>
      <Card className="w-full h-full flex items-center justify-center">
        <div className="text-center">Ranking Component Content</div>
      </Card>
    </Link>
  );
};

export default Ranking;
