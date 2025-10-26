import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'

const routes = {
  '/': Home,
  '/solutions': Solutions,
  '/pricing': Pricing,
  '/resources': Resources,
  '/about': About,
  '/contact': Contact,
}

const useHashRoute = () => {
  const [path, setPath] = React.useState(() => {
    const hash = window.location.hash.replace('#', '') || '/'
    return hash
  })
  React.useEffect(() => {
    const onHashChange = () => setPath(window.location.hash.replace('#', '') || '/')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return path
}

const RouterView = () => {
  const path = useHashRoute()
  const Page = routes[path] || Home

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
        className="px-6 md:px-10 lg:px-20 py-12 md:py-20"
      >
        <Page />
      </motion.div>
    </AnimatePresence>
  )
}

export default RouterView
