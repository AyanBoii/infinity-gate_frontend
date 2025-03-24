"use client"
import { PreviewFrame } from "./PreviewFrame"
import { ControlsPanel } from "./ControlsPanel"
import { AnswersSection } from "./AnswersSection"

export const InputDesign = () => {
  return (
    <main className="flex flex-col gap-4 p-3 w-full min-h-screen" style={{ backgroundColor: "#282828" }}>
      <div className="flex gap-6 max-md:flex-col w-full">
        <section className="flex flex-col gap-4">
          <PreviewFrame />
          <div className="relative h-[473px] w-[450px] max-md:w-full">
            <div className="absolute rounded-md border-4 border-[#ebdbb2] size-full" />
            <ControlsPanel />
          </div>
        </section>
        <AnswersSection />
      </div>
    </main>
  )
}

export default InputDesign

