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
            <a href="#section-home " className={({ isActive }) => (isActive ? "active" : "")}> Home </a>
          </li>

          <li className="link">
            <a href="#section-services " className={({ isActive }) => (isActive ? "active" : "")}> Services </a>
          </li>

          <li className="link">
            <a href="#section-catalogue " className={({ isActive }) => (isActive ? "active" : "")}> Catalogue </a>
          </li>

          <li className="link">
            <a href="#section-flagship " className={({ isActive }) => (isActive ? "active" : "")}> Flagship </a>
          </li>

          <li className="link">
            <Link
              to="/alldesigns"
              
            >
              Designs   
            </Link>
          </li>

          <li className="link">
            <a href="#section-contact " className={({ isActive }) => (isActive ? "active" : "")}> Contact </a>
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
            {/* <li onClick={handleCloseMenu}>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li> */}

            <li onClick={handleCloseMenu}>
              <a href="#section-home" > Home </a>
            </li>

            <li onClick={handleCloseMenu}>
              <a href="#section-services" > Services </a>
            </li>

            <li onClick={handleCloseMenu}>
              <a href="#section-services" > Catalogue </a>
            </li>

            <li onClick={handleCloseMenu}>
              <a href="#section-services" > Flagship </a>
            </li>

            <li onClick={handleCloseMenu}>
            <Link
              to="/alldesigns"
              
            >
              Designs   
            </Link>
          </li>

            <li onClick={handleCloseMenu}>
              <a href="#section-services" > Contact </a>
            </li> 
            
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
