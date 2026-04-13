import React, { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">{personal.name}</div>
      <ul className="nav-links">
        {['about','experience','projects','skills','contact'].map(s => (
          <li key={s}><a href={`#${s}`}>{s}</a></li>
        ))}
      </ul>
    </nav>
  );
}
