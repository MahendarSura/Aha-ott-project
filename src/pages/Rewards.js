import React, { useState, useEffect } from 'react';

const Rewards = () => {
  const [points, setPoints] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching rewards data
    setTimeout(() => {
      try {
        // Simulated successful data fetch
        setPoints(1500);
        setRewards([
          { title: 'Free Movie Rental' },
          { title: '20% Off Subscription' },
          { title: 'Exclusive Content Access' }
        ]);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch rewards');
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>My Rewards</h1>
      <p>You have {points} points</p>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>{reward.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;


