import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Loan Products", path: "/loan-products" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact" },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink
          to="/"
          className="brand"
          aria-label="ASAD Kenya home"
          onClick={closeMenu}
        >
          <span className="brand-name">
            ASAD
          </span>

          <span className="brand-country">
            KENYA
          </span>
        </NavLink>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`main-navigation ${
            menuOpen ? "menu-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                }`
              }
              end={item.path === "/"}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;