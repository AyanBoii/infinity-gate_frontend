"use client"
import { BorderButton } from "./BorderButton"
import { useState } from "react"

export const DifficultySelector = () => {
  const [activeDifficulty, setActiveDifficulty] = useState<"low" | "medium" | "high">("low")

  return (
    <div className="flex gap-1 h-[43px] w-[420px]">
      <BorderButton
        className="w-[140px] h-[43px]"
        active={activeDifficulty === "low"}
        onClick={() => setActiveDifficulty("low")}
        hoverColor="#98971a" // Green
      >
        LOW
      </BorderButton>
      <BorderButton
        className="w-[140px] h-[43px]"
        active={activeDifficulty === "medium"}
        onClick={() => setActiveDifficulty("medium")}
        hoverColor="#d79921" // Yellow
      >
        MEDIUM
      </BorderButton>
      <BorderButton
        className="w-[140px] h-[43px]"
        active={activeDifficulty === "high"}
        onClick={() => setActiveDifficulty("high")}
        hoverColor="#cc241d" // Red
      >
        HIGH
      </BorderButton>
    </div>
  )
}

