// /src/pages/ShortenerPage.js
import React, { useState } from 'react';
import { logEvent } from '../Logging-Middleware'; // Import logEvent

const ShortenerPage = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  // Handle URL shortening
  const handleShorten = async () => {
    logEvent('frontend', 'info', 'ShortenerPage', 'Attempting to shorten a URL');

    if (!url) {
      alert('Please enter a URL');
      return;
    }

    try {
      // Mock response for demonstration
      const shortCode = Math.random().toString(36).substring(2, 8);
      const shortenedUrl = `${window.location.origin}/${shortCode}`;
      setShortenedUrl(shortenedUrl);
      // Store the original URL for redirection
      localStorage.setItem(shortCode, url);
      logEvent('frontend', 'info', 'ShortenerPage', `URL shortened successfully: ${shortenedUrl}`);
    } catch (error) {
      logEvent('frontend', 'error', 'ShortenerPage', `Error during URL shortening: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter your URL"
      />
      <button onClick={handleShorten}>Shorten URL</button>
      {shortenedUrl && <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>}
    </div>
  );
};

export default ShortenerPage;
