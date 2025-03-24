"use client"
import { useState } from "react"
import type React from "react"

interface BorderButtonProps {
  children: React.ReactNode
  className?: string
  active?: boolean
  onClick?: () => void
  hoverColor?: string
}

export const BorderButton: React.FC<BorderButtonProps> = ({
  children,
  className = "",
  active = false,
  onClick,
  hoverColor = "#98971a", // Default to green
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 400)
    if (onClick) onClick()
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] rounded border-2 border-[#ebdbb2] font-bold pixel-font ${isClicked ? "click-animate" : ""}`}
      style={{
        backgroundColor: isHovered ? hoverColor : active ? "#d79921" : "#282828",
        color: isHovered || active ? "#282828" : "#ebdbb2",
        padding: "8px 12px",
      }}
    >
      {children}
    </button>
  )
}

