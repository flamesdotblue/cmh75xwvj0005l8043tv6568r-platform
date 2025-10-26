import React from 'react'
import Nav from './components/Nav'
import RouterView from './components/RouterView'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-black font-sans">
      <Nav />
      <main className="min-h-[70vh]">
        <RouterView />
      </main>
      <Footer />
    </div>
  )
}

export default App
