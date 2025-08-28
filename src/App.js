import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PremiumPage from "./PremiumPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/premium" element={<PremiumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
