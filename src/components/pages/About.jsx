import React from 'react'

const About = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-[28px] font-medium mb-4">About Solvio</h1>
      <p className="text-[#4A4A4A] leading-8">
        We build a premium debt management ecosystem that feels like Swiss banking meets Apple minimalism.
        Our design principles: ultra-clean layouts, subtle elevation, and high-contrast typography.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white border border-[#E5E5E5] p-6 rounded-md">
          <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">Focus</div>
          <div className="font-mono text-xl">Clarity</div>
        </div>
        <div className="bg-white border border-[#E5E5E5] p-6 rounded-md">
          <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">Method</div>
          <div className="font-mono text-xl">Restraint</div>
        </div>
        <div className="bg-white border border-[#E5E5E5] p-6 rounded-md">
          <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">Outcome</div>
          <div className="font-mono text-xl">Debt Freedom</div>
        </div>
      </div>
    </div>
  )
}

export default About
