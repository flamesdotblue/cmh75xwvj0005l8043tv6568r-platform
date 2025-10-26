import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-10 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 select-none">
            <div className="w-6 h-6 border-2 border-white" />
            <span className="text-lg tracking-tight">Solvio</span>
          </div>
          <p className="text-sm text-[#E5E5E5] mt-3 max-w-sm leading-7">Debt freedom, engineered with monochrome precision. Ultra-clean, high-contrast experiences.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-medium mb-3">Product</div>
            <ul className="space-y-2 text-[#E5E5E5]">
              <li><a href="#/solutions" className="hover:underline">Solutions</a></li>
              <li><a href="#/pricing" className="hover:underline">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2 text-[#E5E5E5]">
              <li><a href="#/about" className="hover:underline">About</a></li>
              <li><a href="#/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Resources</div>
            <ul className="space-y-2 text-[#E5E5E5]">
              <li><a href="#/resources" className="hover:underline">Library</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Legal</div>
            <ul className="space-y-2 text-[#E5E5E5]">
              <li><span>Privacy</span></li>
              <li><span>Terms</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 h-12 flex items-center justify-between text-xs text-[#E5E5E5]">
          <span>© {new Date().getFullYear()} Solvio</span>
          <span>Built with restraint</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
