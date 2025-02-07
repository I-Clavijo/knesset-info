"use client";

import React, { useRef } from "react";
import { Button, Card } from "flowbite-react";

interface Category {
  id: string;
  name: string;
}

interface CategoriesProps {
  categories: Category[];
}

const SCROLL_AMOUNT = 500;

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount =
        direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
      const targetScroll = container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto ">
      <div
        ref={scrollContainerRef}
        className="flex m-2 ml-10 mr-10 overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {categories.map((category) => (
          <div key={category.id}>
            <Button className="m-1">{category.name}</Button>
          </div>
        ))}
      </div>
      <Button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-opacity-75 rounded-full shadow-md h-12 w-8 flex items-center justify-center"
        aria-label="Scroll left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Button>

      <Button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-75 rounded-full shadow-md h-12 w-8 flex items-center justify-center"
        aria-label="Scroll right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Button>
    </div>
  );
};

export default Categories;
