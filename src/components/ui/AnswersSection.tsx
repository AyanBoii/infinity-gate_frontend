"use client";
import { useState } from "react";
import { CloudIcon } from "./Icons";

export const AnswersSection = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  return (
    <div className="flex-1 p-4 border-4 border-black max-md:w-full">
      <div className="mb-4 w-full bg-white border border-black h-[430px]" />
      <div className="flex flex-col gap-5">
        {["A", "B", "C", "D"].map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedAnswer(letter)}
            className={`pl-10 w-full text-6xl bg-white rounded-lg border transition-all duration-200 ease-in-out
              ${
                selectedAnswer === letter
                  ? "border-black shadow-inner transform scale-[0.98]"
                  : "border-gray-200 shadow-lg hover:shadow-xl hover:transform hover:scale-[1.01]"
              }
              h-[81px] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center mt-3">
        <div className="relative h-[66px] w-[83px]">
          <div className="absolute top-2 bg-white rounded border-2 border-black shadow-sm h-[58px] w-[83px]" />
          <div className="absolute bg-white rounded border-2 border-black shadow-sm h-[58px] w-[83px]">
            <div className="absolute top-px bg-white rounded-sm h-[3px] left-[3px] w-[77px]" />
            <div className="absolute left-[17px] top-[12px]">
              <CloudIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
