import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'UrumuriBid', path: '/', isAnchor: false },
  { label: 'Services', path: '#services', isAnchor: true },
  { label: 'Contact', path: '#contact', isAnchor: true },
  { label: 'Login', path: '/login', isAnchor: false },
  { label: 'Get Started', path: '/signup', isAnchor: false, isPrimary: true },
];

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <ul className="nav-pill">
        {navItems.map(({ label, path, isAnchor, isPrimary }) => (
          <li key={path} className="nav-item">
            {isAnchor ? (
              <a href={path} className="nav-button">
                <span className="nav-label">{label}</span>
              </a>
            ) : (
              <NavLink
                to={path}
                className={({ isActive }) =>
                  label === 'UrumuriBid' 
                    ? 'nav-logo-link' 
                    : `nav-button ${isActive ? 'nav-button-active' : ''} ${isPrimary ? 'nav-button-primary' : ''}`
                }
              >
                <span className="nav-label">
                  {label === 'UrumuriBid' ? (
                    <span className="logo-text">
                      <span className="logo-blue">Urumuri</span>
                      <span className="logo-bid">Bid</span>
                    </span>
                  ) : (
                    label
                  )}
                </span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

