import React, { useState } from "react";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const themeStyles = {
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#000",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={themeStyles}>
      <h1>{isDark ? "Dark Theme" : "Light Theme"}</h1>
      <button onClick={toggleTheme} style={{ marginTop: "20px", padding: "10px 20px" }}>
       night
      </button>
    </div>
  );
};

export default ToggleTheme;
