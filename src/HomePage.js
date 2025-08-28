import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

function HomePage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleOpen = () => {
    if (input === "ABYZ") {
      navigate("/premium");
    } else {
      alert("Invalid code ❌");
    }
  };

  return (
    <div className="app">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="title">🔐 Premium Access</h1>
        <motion.input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Access Code"
          className="input"
          whileFocus={{ scale: 1.03, boxShadow: "0 0 15px rgba(108,99,255,0.6)" }}
        />
        <motion.button
          onClick={handleOpen}
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Open 🚀
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HomePage;
