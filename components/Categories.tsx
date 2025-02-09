"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "flowbite-react";

interface Category {
  id: number;
  name: string;
}

interface CategoriesProps {
  categories: Category[];
  onCategorySelect: (category: Category) => void;
}

const SCROLL_AMOUNT = 500;

const Categories: React.FC<CategoriesProps> = ({
  categories,
  onCategorySelect,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto">
      <div
        ref={scrollContainerRef}
        className={`flex m-3 ${
          isMobile ? "mx-4" : "mx-11 ml-12"
        } overflow-x-auto scrollbar-hide`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {categories.map((category) => (
          <div key={category.id}>
            <Button
              className={`m-1 h-10 whitespace-nowrap dark:bg-gray-800 ${
                selectedCategory?.id === category.id ? "bg-blue-500" : ""
              }`}
              onClick={() => handleCategoryClick(category)} 
            >
              {category.name}
            </Button>
          </div>
        ))}
      </div>
      {!isMobile && (
        <>
          <Button
            onClick={() => scroll("left")}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-opacity-75 rounded-full dark:bg-gray-800 shadow-md w-8 flex items-center justify-center"
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
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-opacity-75  dark:bg-gray-800 rounded-full shadow-md h-12 w-8 flex items-center justify-center"
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
        </>
      )}
    </div>
  );
};

export default Categories;
