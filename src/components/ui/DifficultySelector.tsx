"use client";
import { BorderButton } from "./BorderButton";

export const DifficultySelector = () => {
  return (
    <div className="flex gap-0 h-[43px] w-[420px]">
      <BorderButton className="w-[140px] h-[43px]" active>
        LOW
      </BorderButton>
      <BorderButton className="w-[140px] h-[43px]">MEDIUM</BorderButton>
      <BorderButton className="w-[140px] h-[43px]">HIGH</BorderButton>
    </div>
  );
};
