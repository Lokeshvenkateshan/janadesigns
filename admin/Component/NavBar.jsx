import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };
  const handleLogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className={`nav-container ${sticky ? "sticky-header" : ""}`}>
        <h2 className="title">Jana Designs</h2>

        {/* Desktop Menu */}
        <ul className="nav-list">
          <li className="link">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>

          <li className="link">
            <NavLink
              to="/adddesign"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              AddDesign
            </NavLink>
          </li>

          <li className="link">
            <NavLink
              to="/designlist"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Designlist
            </NavLink>
          </li>

          <li className="link">
            <NavLink
              to="/enquiry"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Enquiry
            </NavLink>
          </li>

          <li >
            <button className="logout-btn" onClick={handleLogOut}>
              Logout
            </button>
          </li>
        </ul>
        <div className="menu-icon" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
      {/* mobile  menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>

            <li onClick={handleCloseMenu}>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Dashboard
              </NavLink>
            </li>

            <li onClick={handleCloseMenu}>
              <NavLink
                to="/adddesign"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                AddDesign
              </NavLink>
            </li>

            <li onClick={handleCloseMenu}>
              <NavLink
                to="/designlist"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Designlist
              </NavLink>
            </li>

            <li onClick={handleCloseMenu}>
              <NavLink
                to="/enquiry"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Enquiry
              </NavLink>
            </li>
              
            
            <button className="logout-btn" onClick={() => {handleCloseMenu(); handleLogOut();}} style={{background: "white", color:"#2c4152   "}}>Logout</button>
            
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
