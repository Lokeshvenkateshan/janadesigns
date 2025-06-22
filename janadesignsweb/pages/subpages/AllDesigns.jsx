import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/catalogue.css';
import ScrollReveal from 'scrollreveal';
import NavBar from '../../NavbarComponent/NavBar';
import ADnavbar from './ADnavbar';

const AllDesigns = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [designs, setDesigns] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

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

  if (loading) {
    return (
      <>
      <ADnavbar/>
      <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '20px' }}>
        Loading designs...
      </div>
      </>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px', color: 'red' }}>
        Error: {error}
      </div>
    );
  }

  return (
    <>
    <ADnavbar/>
    <section className="catalogue-section">

      <button
        onClick={() => navigate('/')}
        
        className='back-button'
      >
        ← Back
      </button>
      
      <div className="catalogueall-wrap">
        

      <h2 className="catalogue-title">All Designs</h2>

      {Object.entries(designs).map(([type, items]) => (
        <div key={type} style={{ marginBottom: '40px' }}>
          <h3 style={{ color: '#2c4152', marginBottom: '20px' }}>{type}</h3>
          <div className="design-grid">
            {items.map((design) => (
              <div
                className="design-card"
                key={design._id}
              >
                <div className="image-wrapper">
                  <img src={design.image} alt={design.name} />
                  <button
                    className="info-button"
                    onClick={() => navigate(`/design/${design._id}`)}
                  >
                    info
                  </button>
                </div>
                <div className="design-name">{design.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </section>
    </>
  );
};

export default AllDesigns;

