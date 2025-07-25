Capstone Project – Smart Pilot App
Welcome to the Capstone Project repository! This project is a smart pilot assistant web application designed to integrate multiple features such as AI-based voice commands, weather updates, language translation, and parking support into one cohesive user interface.

 Project Overview
The Pilot App acts as a digital co-pilot, assisting users with essential functions via a sleek, responsive web interface. The app integrates:

1. AI Interaction

2. Voice Recognition

3. Live Weather Information

4. Language Translation

5. Smart Parking Support

6. Real-time Notifications

7. Google Sign-In Authentication

8. Dark/Light Mode Switching

Built using React + Vite, this single-page application aims to showcase a multi-module interface usable in simulated or actual cockpit environments.

 Features
Feature	Description
AI.jsx	Handles AI interaction functionality (e.g., virtual assistant)
Voice.jsx	Enables voice recognition and commands
Weather.jsx	Fetches and displays real-time weather information
Parking.jsx	Suggests or simulates smart parking options
Authentication.jsx	Manages Google OAuth sign-in flow
Notification.jsx	Displays real-time in-app alerts and messages
Language.jsx	Language translation or selection module
Mode.jsx	Toggles between dark and light modes
Points.jsx	Likely related to location or scoring (can be clarified)
Profile.jsx	Manages user profile view
Dropdown.jsx	Custom dropdown component for app menus/settings

 Folder Structure
pilot-app/
│
├── public/                    # Static files
├── src/
│   ├── assets/images/         # Image assets
│   ├── components/            # All modular React components
│   ├── App.jsx                # Root app component
│   ├── main.jsx               # App entry point
│   ├── App.css                # Global styling
│   └── index.css              # Tailwind/global styles
├── .eslintrc.cjs              # Linting config
├── vite.config.js             # Vite configuration
├── package.json               # Project dependencies
└── README.md                  # This file
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v18+ recommended)

npm or yarn

Installation
bash
Copy
Edit
# Clone the repo
git clone https://github.com/burah2/capstone-project.git
cd capstone-project/pilot-app

# Install dependencies
npm install

# Start development server
npm run dev
App will be available at http://localhost:5173

 Authentication
The app uses Google Sign-In via Firebase or another provider (assumed based on Google signin.jsx). You may need to configure the credentials in the environment or Firebase dashboard.

 Technologies Used
React (Front-end library)

Vite (Build tool)

JavaScript / JSX

Tailwind CSS 

Google OAuth

OpenWeather API

 Screenshots

📄 License
This project is under the MIT License. See the LICENSE file for details.

🙌 Acknowledgements
Thanks to the instructors, mentors, and contributors who helped build this Capstone.

