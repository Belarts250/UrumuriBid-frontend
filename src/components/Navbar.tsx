import { useState } from 'react';

const navItems = ['Home', 'Products', 'Blog', 'About'];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <nav className="nav-wrapper">
      <ul className="nav-pill">
        {navItems.map((item) => {
          const isActive = activeItem === item;
          return (
            <li key={item} className="nav-item">
              <button
                type="button"
                onClick={() => setActiveItem(item)}
                className={`nav-button ${isActive ? 'nav-button-active' : ''}`}
              >
                <span className="nav-label">{item}</span>
                {isActive && (
                  <span className="nav-badge">
                    4
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

