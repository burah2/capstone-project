import React from 'react';
import './PointsEarned.css'; // You can define your styles in this file or import an external stylesheet

const PointsEarned = () => {
  const earnPoints = () => {
    // Your earn points logic here
  };

  const getPoints = () => {
    // Your get points logic here
  };

  return (
    <div>
      <h1>Points Earned</h1>
      <button onClick={earnPoints}>Earn Points</button>
      <button onClick={getPoints}>Get Points</button>
      <div id="pointsDisplay"></div>
    </div>
  );
};

export default PointsEarned;
