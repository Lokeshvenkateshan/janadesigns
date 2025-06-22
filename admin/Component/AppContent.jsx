import React from "react";
import AdminLogin from "../pages/AdminLogin";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../mainComponent/Main";
import ProtectedRoute from "./ProtectedRoute";
import AdminDash from "../pages/AdminDash";
import Upload from "../pages/Upload";
import DesignList from "../pages/DesignList";
import EnquiryList from "../pages/EnquiryList";

const AppContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        {/* <Route path="/admin" element={<Main />} /> */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDash />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard" element={<AdminDash />} />
        <Route path="/adddesign" element={<Upload/>} />
        <Route path="/designlist" element={<DesignList/>} />
        <Route path="/enquiry" element={<EnquiryList/>} />
      </Routes>
    </div>
  );
};

export default AppContent;
