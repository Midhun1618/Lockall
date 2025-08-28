import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

function PremiumPage() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <motion.div
        className="premium"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="welcome"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          🎉 Welcome to the Premium Page!
        </motion.h2>

        <motion.img
          src="https://picsum.photos/600/400"
          alt="Premium"
          className="premium-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <motion.button
          onClick={() => navigate("/")}
          className="button"
          style={{ marginTop: "2rem", width: "250px" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔙 Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}

export default PremiumPage;

