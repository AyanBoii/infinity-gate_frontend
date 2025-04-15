"use client"
import { useState, useEffect } from "react"

interface PreviewFrameProps {
  isLoading?: boolean;
  sceneText?: string;
}

export const PreviewFrame: React.FC<PreviewFrameProps> = ({ 
  isLoading = true,
  sceneText = ''
}) => {
  return (
    <div className="relative h-[450px] w-[450px] max-md:w-full">
      <div className="absolute rounded-md border-4 border-[#ebdbb2] size-full" />
      <div
        className="absolute w-full rounded-md border-4 border-[#ebdbb2] shadow-sm h-[432px] transition-opacity duration-300"
        style={{ backgroundColor: "#282828" }}
      >
        {isLoading ? (
          <div
            className="m-6 border border-[#ebdbb2] h-[386px] w-[calc(100%-48px)] animate-pulse"
            style={{ backgroundColor: "#32302f" }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d79921]"></div>
            </div>
          </div>
        ) : (
          <div
            className="m-6 border border-[#ebdbb2] h-[386px] w-[calc(100%-48px)] transition-opacity duration-300 ease-in overflow-auto"
            style={{ backgroundColor: "#32302f" }}
          >
            <div className="p-4 text-[#ebdbb2] whitespace-pre-wrap">
              {sceneText}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

