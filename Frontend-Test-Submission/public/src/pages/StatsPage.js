// /src/pages/StatsPage.js
import React, { useEffect, useState } from 'react';
import { logEvent } from '../Logging-Middleware'; // Import logEvent

const StatsPage = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    logEvent('frontend', 'info', 'StatsPage', 'Fetching URL statistics');

    // Mock data for demonstration
    const mockStats = [
      { shortenedUrl: 'http://localhost:3000/abc123', clicks: 5 },
      { shortenedUrl: 'http://localhost:3000/def456', clicks: 12 },
      { shortenedUrl: 'http://localhost:3000/ghi789', clicks: 3 },
    ];
    setStats(mockStats);
    logEvent('frontend', 'info', 'StatsPage', `Statistics fetched successfully: ${mockStats.length} records`);
  }, []);

  return (
    <div className="container">
      <h1>URL Statistics</h1>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            <a href={stat.shortenedUrl} target="_blank" rel="noopener noreferrer">{stat.shortenedUrl}</a> - Clicks: {stat.clicks}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsPage;
