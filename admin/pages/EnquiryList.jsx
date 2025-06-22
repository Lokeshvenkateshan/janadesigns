import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash, FaCheck } from 'react-icons/fa';
import '../styles/enquirylist.css';
import NavBar from '../Component/NavBar';

const EnquiryList = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const [enquiries, setEnquiries] = useState([]);
  const [handledIds, setHandledIds] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await axios.get(`${serverURL}/enquiries`);
        setEnquiries(res.data);
      } catch (err) {
        console.error('Failed to fetch enquiries:', err);
      }
    };
    fetchEnquiries();
  }, []);

  const handleMarkHandled = (id) => {
    setHandledIds((prev) => [...prev, id]);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${serverURL}/enquiries/${id}`);
      setEnquiries(enquiries.filter(enquiry => enquiry._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <>
    <NavBar/>
    <div className="enquiry-container">
      <h2>Customer Enquiries</h2>
      <table className="enquiry-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Design</th>
            <th>Type</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Message</th>
            <th>Submitted At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry, index) => (
            <tr key={enquiry._id} className={handledIds.includes(enquiry._id) ? 'handled' : ''}>
              <td>{index + 1}</td>
              <td>{enquiry.designName}</td>
              <td>{enquiry.designType}</td>
              <td>{enquiry.phone}</td>
              <td>{enquiry.email}</td>
              <td>{enquiry.message}</td>
              <td>{new Date(enquiry.submittedAt).toLocaleString()}</td>
              <td className="action-btns">
                <button
                  className={`tick-btn ${handledIds.includes(enquiry._id) ? 'handled-btn' : ''}`}
                  onClick={() => handleMarkHandled(enquiry._id)}
                >
                  <FaCheck />
                </button>
                <button className="delete-btn" onClick={() => handleDelete(enquiry._id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default EnquiryList;
