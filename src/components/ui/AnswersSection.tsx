"use client"
import { useState, useRef } from "react"
import { CloudIcon } from "./Icons"

interface AnswersSectionProps {
  options: string[];
  onOptionClick: (index: number) => void;
  isLoading?: boolean;
  storyText: string;
}

export const AnswersSection: React.FC<AnswersSectionProps> = ({ 
  options = [],
  onOptionClick,
  isLoading = false,
  storyText
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [hoveredAnswer, setHoveredAnswer] = useState<string | null>(null)
  const [isCloudHovered, setIsCloudHovered] = useState(false)
  const [isCloudClicked, setIsCloudClicked] = useState(false)
  
  // Limit to 4 options maximum
  const displayOptions = options.slice(0, 4);
  // If less than 4 options, fill with empty options
  const allOptions = ['A', 'B', 'C', 'D'].slice(0, Math.max(4, displayOptions.length));

  // Animation refs
  const animationRefs = {
    A: useRef<HTMLButtonElement>(null),
    B: useRef<HTMLButtonElement>(null),
    C: useRef<HTMLButtonElement>(null),
    D: useRef<HTMLButtonElement>(null),
  }

  // Handle option click with animation
  const handleOptionClick = (letter: string, index: number) => {
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
    
    // Call the onOptionClick handler with the index
    onOptionClick(index);
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
                                                                           
    <div className="flex-1 p-4 border-4 border-[#ebdbb2] max-md:w-full" style={{ backgroundColor: "#32302f" /*#32302f*/}}>
      <div className="mb-4 w-full border border-[#ebdbb2] h-[500px] overflow-y-auto relative" style={{ backgroundColor: "#282828" /*#282828*/}}>
        <img 
          src="pixel-art-xl-001.png" 
          alt="Pixel Art" 
          className="w-full h-full object-contain"
          style={{ display: 'block' }}
        />
        <div className="p-4 text-[#ebdbb2] pixel-font absolute top-0 left-0 w-full h-full pointer-events-none">
          {storyText}
        </div>
      </div>
      <div className="mb-4 w-full border border-[#ebdbb2] h-[450px] overflow-y-auto" style={{ backgroundColor: "#282828" /*#282828*/}}>
        <div className="p-4 text-[#ebdbb2] pixel-font text-sm">
          {storyText}
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d79921]"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 p-4">
            {allOptions.map((letter, index) => (
              <button
                key={letter}
                disabled={index >= displayOptions.length}
                ref={animationRefs[letter as keyof typeof animationRefs]}
                onClick={() => handleOptionClick(letter, index)}
                onMouseEnter={() => setHoveredAnswer(letter)}
                onMouseLeave={() => setHoveredAnswer(null)}
                className={`relative pl-16 w-full text-left rounded-lg border transition-all duration-200 ease-in-out
                  ${
                    selectedAnswer === letter
                      ? "border-[#d79921] shadow-inner transform scale-[0.98]"
                      : "border-[#ebdbb2] shadow-lg hover:shadow-xl hover:transform hover:scale-[1.01]"
                  }
                  h-[80px] focus:outline-none focus:ring-2 focus:ring-[#d79921] focus:ring-opacity-50 ${
                    index >= displayOptions.length ? "opacity-30 cursor-not-allowed" : ""
                  }`}
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
                <span className="text-xs pixel-font">{index < displayOptions.length ? displayOptions[index] : "Option unavailable"}</span>
              </button>
            ))}
          </div>
        )}
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

