import { useEffect, useState } from 'react'
import './Flashcards.css' // or create Settings.css later if you prefer

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.body.classList.contains('dark')
  })

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    document.body.classList.toggle('dark', newMode)
    localStorage.setItem('dark', newMode)
    setIsDarkMode(newMode)
  }

  useEffect(() => {
    const stored = localStorage.getItem('dark')
    if (stored !== null) {
      const enableDark = stored === 'true'
      document.body.classList.toggle('dark', enableDark)
      setIsDarkMode(enableDark)
    }
  }, [])

  return (
    <div className="container">
      <h2>Settings ⚙️</h2>
      <div style={{ marginTop: '1rem', textAlign: 'left' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            style={{ marginRight: '0.5rem' }}
          />
          Enable Dark Mode
        </label>

        <p style={{ fontSize: '0.9rem', color: 'gray' }}>
          You can also swipe left/right on mobile to toggle theme.
        </p>
      </div>
    </div>
  )
}