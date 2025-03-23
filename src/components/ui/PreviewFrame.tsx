"use client";
import { useState, useEffect } from "react";

export const PreviewFrame = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[450px] w-[450px] max-md:w-full">
      <div className="absolute rounded-md border-4 border-black size-full" />
      <div className="absolute w-full bg-white rounded-md border-4 border-black shadow-sm h-[432px] transition-opacity duration-300">
        {isLoading ? (
          <div className="m-6 border border-black h-[386px] w-[calc(100%-48px)] animate-pulse bg-gray-100">
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
            </div>
          </div>
        ) : (
          <div className="m-6 border border-black h-[386px] w-[calc(100%-48px)] transition-opacity duration-300 ease-in" />
        )}
      </div>
    </div>
  );
};
