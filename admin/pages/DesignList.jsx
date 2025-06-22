import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/designlist.css';
import NavBar from '../Component/NavBar';

const DesignList = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [designs, setDesigns] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const fetchDesigns = async () => {
    try {
      setLoading(true);
      const res = await axios.get( `${serverURL}/designs`);
      const grouped = res.data.reduce((acc, design) => {
        if (!acc[design.type]) acc[design.type] = [];
        acc[design.type].push(design);
        return acc;
      }, {});
      setDesigns(grouped);
      setError('');
    } catch (err) {
      setError('Failed to fetch designs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDesigns();
  }, []);

  const handleDelete = async (id) => {
  try {
    const res = await axios.delete(`${serverURL}/designs/${id}`);
    if (res.status === 200) {
      setDesigns((prev) => {
        const updated = { ...prev };
        for (const type in updated) {
          updated[type] = updated[type].filter(design => design._id !== id);
          if (updated[type].length === 0) delete updated[type];
        }
        return updated;
      });
      setDeleteMessage('Design deleted successfully');
      setTimeout(() => setDeleteMessage(''), 2000);
    } else {
      setDeleteMessage('Failed to delete design');
    }
  } catch (err) {
    setDeleteMessage('Failed to delete design');
  }
};

  if (loading) return <><NavBar/><p className="center-text">Loading designs...</p></>;
  if (error) return <p className="center-text error-text">{error}</p>;

  return (
    <>
    <NavBar/>
    <div className="admin-container">
      <h2 className='designlist-title'>Admin Design List</h2>
      {deleteMessage && <div className="delete-message">{deleteMessage}</div>}
      {Object.keys(designs).length === 0 && <p>No designs available.</p>}

      {Object.entries(designs).map(([type, designsArray]) => (
        <div key={type} className="design-group">
          <h3 className='type-title'>{type}</h3>
          <table className="design-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Info</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {designsArray.map(({ _id, name, info, image }) => (
                <tr key={_id}>
                  <td>{name}</td>
                  <td>{info}</td>
                  <td>
                    <img src={image} alt={name} className="design-image" />
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(_id)}
                      title="Delete Design"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </>
  );
};

export default DesignList;
