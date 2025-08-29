import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [unlockedCode, setUnlockedCode] = useState(null);

  const handleOpen = () => {
    if (input === "ABYZ") {
      setUnlockedCode("ABYZ");
    } else if (input === "PQRS") {
      setUnlockedCode("PQRS");
    } else {
      alert("Invalid code!");
    }
  };

  const handleBack = () => {
    setUnlockedCode(null);
    setInput("");
  };

  return (
    <div className="app-container">
      {!unlockedCode ? (
        <div className="unlock-box fade-in">
          <h1 className="title">Enter Access Code</h1>
          <input
            type="text"
            placeholder="Enter code..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-input"
          />
          <button onClick={handleOpen} className="open-btn">
            Open
          </button>
        </div>
      ) : (
        <div className="content-box fade-in">
          <h2 className="image-text">
            {unlockedCode === "ABYZ"
              ? "Welcome to ABYZ Page"
              : "Welcome to PQRS Page"}
          </h2>
          <img
            src={
              unlockedCode === "ABYZ"
                ? "/images/image1.jpg"
                : "/images/image2.jpg"
            }
            alt="Unlocked Content"
            className="unlocked-image"
          />
          <button onClick={handleBack} className="back-btn">
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
