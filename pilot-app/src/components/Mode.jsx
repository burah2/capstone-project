import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Light/Dark Mode Switch</h1>
      <label className="switch">
        <input type="checkbox" id="modeSwitch" onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default App;
