"use client"
import { useState, useRef } from "react"
import { CloudIcon } from "./Icons"

export const AnswersSection = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [hoveredAnswer, setHoveredAnswer] = useState<string | null>(null)
  const [isCloudHovered, setIsCloudHovered] = useState(false)
  const [isCloudClicked, setIsCloudClicked] = useState(false)

  // Animation refs
  const animationRefs = {
    A: useRef<HTMLButtonElement>(null),
    B: useRef<HTMLButtonElement>(null),
    C: useRef<HTMLButtonElement>(null),
    D: useRef<HTMLButtonElement>(null),
  }

  // Handle option click with animation
  const handleOptionClick = (letter: string) => {
    // If already selected, deselect
    if (selectedAnswer === letter) {
      setSelectedAnswer(null)
      return
    }

    setSelectedAnswer(letter)

    // Add animation class
    if (animationRefs[letter as keyof typeof animationRefs]?.current) {
      const element = animationRefs[letter as keyof typeof animationRefs].current
      element?.classList.add("click-animate")
      setTimeout(() => {
        element?.classList.remove("click-animate")
      }, 400)
    }
  }

  const handleCloudClick = () => {
    setIsCloudClicked(true)
    setTimeout(() => setIsCloudClicked(false), 400)
  }

  // Get color based on letter
  const getLetterColor = (letter: string) => {
    if (selectedAnswer === letter) return "#d79921"

    switch (letter) {
      case "A":
        return hoveredAnswer === letter ? "#98971a" : "#d79921" // Green hover, Yellow default
      case "B":
        return hoveredAnswer === letter ? "#d79921" : "#98971a" // Yellow hover, Green default
      case "C":
        return hoveredAnswer === letter ? "#458588" : "#cc241d" // Blue hover, Red default
      case "D":
        return hoveredAnswer === letter ? "#cc241d" : "#458588" // Red hover, Blue default
      default:
        return "#d79921"
    }
  }

  return (
    <div className="flex-1 p-4 border-4 border-[#ebdbb2] max-md:w-full" style={{ backgroundColor: "#32302f" }}>
      <div className="mb-4 w-full border border-[#ebdbb2] h-[430px]" style={{ backgroundColor: "#282828" }} />
      <div className="flex flex-col gap-5">
        {["A", "B", "C", "D"].map((letter) => (
          <button
            key={letter}
            ref={animationRefs[letter as keyof typeof animationRefs]}
            onClick={() => handleOptionClick(letter)}
            onMouseEnter={() => setHoveredAnswer(letter)}
            onMouseLeave={() => setHoveredAnswer(null)}
            className={`relative pl-16 w-full text-left rounded-lg border transition-all duration-200 ease-in-out
              ${
                selectedAnswer === letter
                  ? "border-[#d79921] shadow-inner transform scale-[0.98]"
                  : "border-[#ebdbb2] shadow-lg hover:shadow-xl hover:transform hover:scale-[1.01]"
              }
              h-[81px] focus:outline-none focus:ring-2 focus:ring-[#d79921] focus:ring-opacity-50`}
            style={{
              backgroundColor: selectedAnswer === letter ? "#32302f" : hoveredAnswer === letter ? "#3c3836" : "#282828",
              color: "#ebdbb2",
            }}
          >
            <span
              className="absolute left-4 top-1/2 transform -translate-y-1/2 pixel-font text-4xl"
              style={{ color: getLetterColor(letter) }}
            >
              {letter}
            </span>
            <span className="text-xl">Option {letter}</span>
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center mt-3">
        <div
          className={`relative h-[66px] w-[83px] transform transition-all duration-200 hover:scale-[1.05] ${isCloudClicked ? "click-animate" : ""}`}
          onMouseEnter={() => setIsCloudHovered(true)}
          onMouseLeave={() => setIsCloudHovered(false)}
          onClick={handleCloudClick}
        >
          <div
            className="rounded border-2 border-[#ebdbb2] shadow-sm h-[58px] w-[83px] flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: isCloudHovered ? "#83a598" : "#458588" }}
          >
            <CloudIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

