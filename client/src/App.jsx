import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FlashcardModeSelect from './pages/FlashcardModeSelect'
import FlashcardFlip from './pages/FlashcardFlip'
import Flashcards from './pages/Flashcards'
import Header from './components/Header'
import Footer from './components/Footer'
import Reference from './pages/Reference'
import Machine from './components/Machine'
import './App.css'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('dark')
    return stored ? JSON.parse(stored) : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
    document.body.classList.toggle('gemtone', !isDarkMode) 
    localStorage.setItem('dark', isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(prev => !prev)

  return (
    <Router>
      <AppLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </Router>
  )
}

function AppLayout({ isDarkMode, toggleDarkMode }) {
  const location = useLocation()
  const isReference = location.pathname === '/reference'

  return (
    <div className="app-wrapper">
      <Header />
      <main className={`container${isReference ? ' reference-layout' : ''}`}>
        <div className='screen-body'>
          <div className='main-content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/flashcards" element={<FlashcardModeSelect />} />
              <Route path="/flashcards/quiz" element={<Flashcards />} />
              <Route path="/flashcards/study" element={<FlashcardFlip />} />
              <Route path="/machine" element={<Machine />} />
              <Route path="/reference" element={<Reference />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}
