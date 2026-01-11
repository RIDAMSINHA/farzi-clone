'use client';

import './BottomNav.css';

export default function BottomNav() {
  const navItems = [
    { label: 'FESTIVE SEASON MENUS', link: '#' },
    { label: 'BOOK', link: '#' },
    { label: 'DELIVERY', link: '#' },
  ];

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        {navItems.map((item, index) => (
          <a key={index} href={item.link} className="nav-item">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
