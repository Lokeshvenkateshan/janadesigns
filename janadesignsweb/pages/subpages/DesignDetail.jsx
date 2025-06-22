import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/designdetail.css";
import axios from "axios";
import ADnavbar from "./ADnavbar";

const DesignDetail = () => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [design, setDesign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [form, setForm] = useState({ phone: "", email: "", message: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchDesign = async () => {
      try {
        const res = await axios.get(`${serverURL}/designs/${id}`);
        setDesign(res.data);
      } catch (err) {
        console.error("Error fetching design:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDesign();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${serverURL}/enquiries`, {
        designName: design.name,
        designType: design.type,
        phone: form.phone,
        email: form.email,
        message: form.message,
      });
      setMessage("Enquiry submitted successfully!");
      setForm({ phone: "", email: "", message: "" });
      setTimeout(() => setEnquiryOpen(false), 2000);
    } catch (err) {
      console.error("Enquiry failed:", err);
      setMessage("Submission failed. Try again.");
    }
  };

  if (loading) return <><ADnavbar /><div className="loading-text">Loading...</div></>;
  if (!design) return <div className="loading-text">Design not found</div>;

  return (
    <>
      <ADnavbar />
      <motion.div
        className="design-detail"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button className="design-back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="design-content-wrapper">
          <img src={design.image} alt={design.name} className="big-image" />

          <div className="design-info-right">
            <u><h2 className="design-title">{design.name}</h2></u>
            <p className="design-info">{design.info}</p>

            <div className="standard-description">
              <h4>Design Highlights</h4>
              <ul>
                <li>Pixel-perfect silk saree weaving blueprint</li>
                <li>Traditional art with modern detailing</li>
                <li>Customizable based on weaving thread and colors</li>
              </ul>
            </div>

            <button
              className="enquire-btn"
              onClick={() => setEnquiryOpen(true)}
            >
              Enquire
            </button>
          </div>
        </div>

        <AnimatePresence>
          {enquiryOpen && (
            <motion.div
              className="popup-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEnquiryOpen(false)}
            >
              <motion.div
                className="popup"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="popup-close-btn"
                  onClick={() => setEnquiryOpen(false)}
                >
                  ×
                </button>
                <center><h3 className="enquiry-title">Enquire About This Design</h3></center>
                <form onSubmit={handleSubmit}>
                  <div>
                    <strong>Design:</strong> {design.name}
                  </div>
                  <div>
                    <strong>Type:</strong> {design.type}
                  </div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <textarea
                    placeholder="Message"
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  <button type="submit">Submit</button>
                  {message && <div className="msg">{message}</div>}
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default DesignDetail;
