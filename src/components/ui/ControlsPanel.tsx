"use client"
import { DifficultySelector } from "./DifficultySelector"
import { ArrowUpIcon, ArrowDownIcon } from "./Icons"
import { useState } from "react"

export const ControlsPanel = () => {
  const [isReloadHovered, setIsReloadHovered] = useState(false)
  const [isReloadClicked, setIsReloadClicked] = useState(false)

  const handleReloadClick = () => {
    setIsReloadClicked(true)
    setTimeout(() => setIsReloadClicked(false), 400)
  }

  return (
    <div
      className="absolute w-full rounded-md border-4 border-[#ebdbb2] h-[184px]"
      style={{ backgroundColor: "#282828" }}
    >
      <div className="flex justify-center items-center mt-4">
        <DifficultySelector />
      </div>

      <div className="flex justify-center items-center mt-8">
        <button
          className={`h-[50px] w-[420px] transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] rounded border-2 border-[#ebdbb2] pixel-font ${isReloadClicked ? "click-animate" : ""}`}
          style={{
            backgroundColor: isReloadHovered ? "#98971a" : "#d79921",
            color: "#282828",
            fontWeight: "bold",
          }}
          onMouseEnter={() => setIsReloadHovered(true)}
          onMouseLeave={() => setIsReloadHovered(false)}
          onClick={handleReloadClick}
        >
          RELOAD CHALLENGE
        </button>
      </div>

      <div className="flex justify-between mx-7 mt-16">
        <div className="flex h-[90px] w-[417px]">
          <button className="relative h-[90px] w-[55px] transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <div
              className="rounded-md border-[#ebdbb2] border-[3px] h-[90px] w-[55px] flex items-center justify-center hover:bg-[#83a598]"
              style={{ backgroundColor: "#458588" }}
            >
              <ArrowUpIcon />
            </div>
          </button>

          <div
            className="flex-1 mx-0.5 border-[#ebdbb2] border-[3px] h-[90px]"
            style={{ backgroundColor: "#32302f" }}
          />

          <button className="relative h-[90px] w-[55px] transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <div
              className="rounded-md border-[#ebdbb2] border-[3px] h-[90px] w-[55px] flex items-center justify-center hover:bg-[#83a598]"
              style={{ backgroundColor: "#458588" }}
            >
              <ArrowDownIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

