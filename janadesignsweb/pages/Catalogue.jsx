import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/catalogue.css';
import ScrollReveal from 'scrollreveal';


const Catalogue = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [designs, setDesigns] = useState({});
  const [activeTab, setActiveTab] = useState('Putta');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [hoverStyle, setHoverStyle] = useState({});

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const res = await fetch(`${serverURL}/designs`);
        if (!res.ok) throw new Error('Failed to fetch designs');
        const data = await res.json();

        const grouped = data.reduce((acc, item) => {
          if (!acc[item.type]) acc[item.type] = [];
          acc[item.type].push(item);
          return acc;
        }, {});
        setDesigns(grouped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDesigns();
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      ScrollReveal().reveal('.design-card', {
        duration: 800,
        distance: '40px',
        origin: 'bottom',
        easing: 'ease-in-out',
        interval: 100,
      });
    }
  }, [loading, error, designs]);

  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    setHoverStyle(prev => ({ ...prev, [id]: { transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` } }));
  };

  const handleMouseLeave = (id) => {
    setHoverStyle(prev => ({ ...prev, [id]: { transform: `rotateX(0deg) rotateY(0deg)` } }));
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '20px' }}>Loading designs...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '100px', color: 'red' }}>Error: {error}</div>;
  }

  const activeDesigns = designs[activeTab] || [];

  return (
    <section className="catalogue-section">
      <div className="catalogue-wrap">
        <h2 className="catalogue-title">Design Catalogue</h2>

      <div className="tabs">
        {Object.keys(designs).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="design-grid">
        {activeDesigns.slice(0, 6).map((design) => (
          <div
            className="design-card"
            key={design._id}
            style={hoverStyle[design._id]}
            onMouseMove={(e) => handleMouseMove(e, design._id)}
            onMouseLeave={() => handleMouseLeave(design._id)}
          >
            <div className="image-wrapper">
              <img src={design.image} alt={design.name} />
              
              <Link to={`/design/${design._id}`} className="info-button">info</Link>
            </div>
            <div className="design-name">{design.name}</div>
          </div>
        ))}
      </div>

      {activeDesigns.length > 4 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => navigate('/alldesigns')}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2c4152',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Show More Designs
          </button>
        </div>
      )}
      </div>
    </section>
  );
};

export default Catalogue;
