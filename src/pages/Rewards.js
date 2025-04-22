import React, { useState, useEffect } from 'react';

// Mock function to simulate fetching user rewards data
const fetchRewardsData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        points: 1500,
        rewards: [
          { id: 1, title: 'Free Movie Rental', description: 'Redeem for a free movie rental on AHA' },
          { id: 2, title: 'Discounted Subscription', description: 'Get 20% off your next AHA subscription renewal' },
          { id: 3, title: 'Exclusive Content', description: 'Access to premium exclusive shows for 1 month' },
        ],
      });
    }, 1000);
  });
};

const Rewards = () => {
  const [rewardsData, setRewardsData] = useState(null);

  // Fetch rewards data when component mounts
  useEffect(() => {
    const getRewardsData = async () => {
      const data = await fetchRewardsData();
      setRewardsData(data);
    };

    getRewardsData();
  }, []);

  if (!rewardsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rewards-container">
      <h1>My Rewards</h1>

      <div className="rewards-header">
        <p>You have {rewardsData.points} points</p>
      </div>

      <div className="rewards-list">
        <h3>Available Rewards</h3>
        <ul>
          {rewardsData.rewards.map((reward) => (
            <li key={reward.id} className="reward-item">
              <h4>{reward.title}</h4>
              <p>{reward.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rewards;

