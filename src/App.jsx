import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SolutionsSection from './components/SolutionsSection'
import PricingSection from './components/PricingSection'

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-black font-sans">
      <Nav />
      <main>
        <Hero />
        <section className="px-6 md:px-10 lg:px-20 py-14 md:py-20">
          <div className="max-w-6xl mx-auto">
            <SolutionsSection />
          </div>
        </section>
        <section className="px-6 md:px-10 lg:px-20 py-14 md:py-20 bg-white border-t border-[#E5E5E5]">
          <div className="max-w-6xl mx-auto">
            <PricingSection />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
