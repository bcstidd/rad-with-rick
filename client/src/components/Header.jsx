import { Link } from 'react-router-dom'
import radio from '/icons/radio.png'

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo-title">
        <img src={radio} alt="Logo" className="logo-img" />
        RWR
      </h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/flashcards">Flashcards</Link>
        <Link to="/reference">Reference</Link>
        <Link to="/machine">X-ray Machine</Link>
      </nav>
    </header>
  );
}
