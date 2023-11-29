// App.js
import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <header>
        {/* Language selector */}
        <div id="languageSelector" className="language-selector">
          <label htmlFor="languageDropdown">Select Language:</label>
          <select
            id="languageDropdown"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            {/* Add more language options as needed */}
          </select>
        </div>

        {/* Other header content goes here */}

        {/* Example content that can be translated */}
        <h1 style={{ display: selectedLanguage === 'en' ? 'block' : 'none' }}>
          Welcome to our Website
        </h1>
        <h1 style={{ display: selectedLanguage === 'fr' ? 'block' : 'none' }}>
          Bienvenue sur Votre Site Web
        </h1>
      </header>

      <main>
        {/* Main content of the webpage goes here */}
      </main>

      <script src="script.js"></script>
    </div>
  );
};

export default App;
