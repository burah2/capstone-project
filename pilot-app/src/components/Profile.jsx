import React from 'react';

const UserProfileCreation = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic goes here
  };

  return (
    <div className="profile-form-container">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default UserProfileCreation;
