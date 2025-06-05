// src/components/Header.jsx

import { Link } from 'react-router-dom'
import logo from '/icons/favicon.png'

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo-title">
        <img src={logo} alt="Logo" className="logo-img" />
        RWR
      </h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/flashcards">Flashcards</Link>
        <Link to="/reference">Reference</Link>

      </nav>
    </header>
  )
}
