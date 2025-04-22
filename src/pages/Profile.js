import React, { useState, useEffect } from 'react';

// Mock function to simulate fetching user data
const fetchUserData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        profileImage: 'https://via.placeholder.com/150', // Example placeholder image
        watchlist: ['Movie 1', 'Movie 2', 'Movie 3'],
        subscriptions: ['AHA Premium', 'Netflix'],
      });
    }, 1000);
  });
};

const Profile = () => {
  const [user, setUser] = useState(null);

  // Fetch user data when component mounts
  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      setUser(data);
    };

    getUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src={user.profileImage} 
          alt={`${user.username}'s profile`} 
          className="profile-image" 
        />
        <h2>{user.username}</h2>
        <p>{user.email}</p>
      </div>

      <div className="profile-details">
        <h3>Watchlist</h3>
        <ul>
          {user.watchlist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Subscriptions</h3>
        <ul>
          {user.subscriptions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

