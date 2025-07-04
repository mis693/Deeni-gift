// components/LoadingScreen.js (NEW FILE)

import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(10); // Start countdown from 10

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 seconds

    // Countdown logic
    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    // Clear interval when countdown reaches 0 or component unmounts
    const clearCountdown = setTimeout(() => {
      clearInterval(countdownInterval);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
      clearTimeout(clearCountdown);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black to-blue-900 text-white p-4">
        <img
          src="/islamic-animation.gif" // Aapki loading GIF ka path
          alt="Loading Animation"
          className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-full shadow-lg border-4 border-yellow-400 mb-8 animate-pulse"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4 animate-fade-in-slow">
          Aapka gift taiyar ho raha hai...
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 font-mono">
          {countdown > 0 ? `${countdown} seconds remaining...` : 'Almost there!'}
        </p>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingScreen;
            
