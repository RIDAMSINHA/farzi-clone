'use client';

import { useEffect, useState } from 'react';
import './Hamburger.css';

const menuItems = [
  "What's On",
  'Bottomless – Sunday Brunch',
  'Group Dining',
  'Theatre Menu',
  'Lunch Thali Menu',
  'Menus & The Bar',
  'Farzi @ Boxhall',
  'Reservations',
  'Delivery',
];

export default function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        type="button"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="menu-logo-mark">F</div>
        <ul className="menu-links">
          {menuItems.map((item) => (
            <li key={item} onClick={() => setMenuOpen(false)}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
