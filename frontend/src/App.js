import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import Up from "./components/Up";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-12">Crop Disease Predictor</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<Up/>}/>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </Router>
  );
}

export default App;
