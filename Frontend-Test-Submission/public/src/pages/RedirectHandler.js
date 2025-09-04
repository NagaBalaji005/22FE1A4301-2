// /src/pages/RedirectHandler.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Using react-router for navigation
import { logEvent } from '../Logging-Middleware'; // Import logEvent

const RedirectHandler = () => {
  const { shortCode } = useParams();  // Using useParams hook

  useEffect(() => {
    logEvent('frontend', 'info', 'RedirectHandler', `Redirecting for shortcode: ${shortCode}`);

    // Retrieve the original URL from localStorage
    const originalUrl = localStorage.getItem(shortCode);
    if (originalUrl) {
      window.location.replace(originalUrl);
      logEvent('frontend', 'info', 'RedirectHandler', `Redirected to: ${originalUrl}`);
    } else {
      // If not found, redirect to a default page or show error
      window.location.replace('/');
      logEvent('frontend', 'error', 'RedirectHandler', 'Shortcode not found');
    }
  }, [shortCode]);

  return null; // No UI needed as it redirects immediately
};

export default RedirectHandler;
