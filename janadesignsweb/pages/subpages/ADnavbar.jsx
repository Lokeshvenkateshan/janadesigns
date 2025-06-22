import React, {useState, useEffect} from 'react'


const ADnavbar = () => {

    const [sticky, setSticky] = useState(false);
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
  return (
    <div style={{position:"sticky", width: "100%", zIndex: "999", top:"0"}}>
      <div className={`nav-container ${sticky ? "sticky-header" : ""}`}>
        <h2 className="title">Jana Designs</h2>

        
      </div>
    </div>
  )
}

export default ADnavbar
