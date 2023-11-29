import React from 'react';
import AI from "./components/AI"
import Authentication from './Authentication';
import DropdownMenu from './DropdownMenu';
import GoogleSignIn from './GoogleSignIn';
import Language from './Language';
import Mode from './Mode';
import Notification from '.Notification';
import Parking from '.Parking';
import Points from '.Points';
import Profile from '.Profile';
import Voice from '.Voice';
import WeatherAssistant from './WeatherAssistant';

function App() {

  return (
    <>
      <h1>Welcome to PathPilot</h1>

        <AI/>
        <Authentication/>
        <DropdownMenu/>
        <GoogleSignIn />
        <Language />
        <Mode />
        <Notification />
        <Parking />
        <Points />
        <Profile />
        <Voice/>
        <WeatherAssistant />

    </>
  )
}

export default App
