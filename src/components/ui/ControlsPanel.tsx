"use client";
import { DifficultySelector } from "./DifficultySelector";
import { ArrowUpIcon, ArrowDownIcon } from "./Icons";

export const ControlsPanel = () => {
  return (
    <div className="absolute w-full bg-white rounded-md border-4 border-black h-[184px]">
      <div className="flex justify-center items-center mt-4">
        <DifficultySelector />
      </div>

      <div className="flex justify-center items-center mt-8">
        <button className="relative h-[50px] w-[420px] transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
          <div className="absolute top-1.5 h-11 bg-black rounded border-2 border-black w-[420px] transition-transform duration-100" />
          <div className="absolute h-11 bg-white rounded border-2 border-black w-[420px] transition-all duration-100 hover:translate-y-[1px] active:translate-y-[3px]">
            <div className="absolute top-1 left-2 h-0.5 bg-white rounded w-[404px]" />
            <div className="mt-4 text-lg text-center text-white">
              RELOAD CHALLENGE
            </div>
          </div>
        </button>
      </div>

      <div className="flex justify-between mx-7 mt-16">
        <div className="flex h-[90px] w-[417px]">
          <button className="relative h-[90px] w-[55px] transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <div className="absolute bg-black rounded-md border-black border-[3px] h-[90px] w-[55px] transition-transform duration-100" />
            <div className="absolute bg-white rounded-md border-black border-[3px] h-[83px] w-[55px] transition-all duration-100 hover:translate-y-[1px] active:translate-y-[2px]">
              <div className="absolute left-1 top-1.5 h-0 bg-white w-[47px]" />
              <div className="absolute left-[17px] top-[40px]">
                <ArrowUpIcon />
              </div>
            </div>
          </button>

          <div className="flex-1 mx-0.5 bg-white border-black border-[3px] h-[90px]" />

          <button className="relative h-[90px] w-[55px] transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <div className="absolute bg-black rounded-none border-black border-[3px] h-[90px] w-[55px] transition-transform duration-100" />
            <div className="absolute bg-white rounded-none border-black border-[3px] h-[83px] w-[55px] transition-all duration-100 hover:translate-y-[1px] active:translate-y-[2px]">
              <div className="absolute left-1 top-1.5 h-0 bg-white w-[47px]" />
              <div className="absolute left-[17px] top-[40px]">
                <ArrowDownIcon />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
