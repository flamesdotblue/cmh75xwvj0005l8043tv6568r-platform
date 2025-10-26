import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import LoanCalculator from './components/LoanCalculator'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-black">
      <Nav />
      <main>
        <Hero />
        <section className="px-6 md:px-10 lg:px-20 py-16 md:py-24">
          <LoanCalculator />
        </section>
        <section className="px-6 md:px-10 lg:px-20 py-16 md:py-24 bg-white border-t border-zinc-200">
          <Pricing />
        </section>
      </main>
    </div>
  )
}

export default App
