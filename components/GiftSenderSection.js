// components/GiftSenderSection.js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // For client-side navigation

const GiftSenderSection = () => {
  const [senderName, setSenderName] = useState('');
  const router = useRouter();

  // Dynamic sender name from URL query parameter (if a shared link is opened)
  // If no sender name is in the URL, it defaults to "Deeni Gift"
  const { sender: urlSenderName } = router.query;
  const initialSenderName = urlSenderName ? decodeURIComponent(urlSenderName) + " ka" : "Deeni Gift";

  const handleGenerateLink = () => {
    if (senderName.trim() === '') {
      alert('Please enter your name to create your gift link!');
      return;
    }
    // Encode senderName to be URL-safe (e.g., handles spaces, special characters)
    const encodedSenderName = encodeURIComponent(senderName.trim());
    
    // Navigate to the next page where sender selects the gift/dua
    // We will create this `/select-gift` page next!
    router.push(`/select-gift?sender=${encodedSenderName}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background: Falling Stars Animation (Pure CSS stars added directly here) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black to-blue-900 opacity-80">
        {/* These divs create the falling star effect using CSS animations */}
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className="relative z-10 p-6 max-w-2xl w-full text-center">
        {/* Top Rectangular Banner for Islamic Animation */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-800 p-2 rounded-lg shadow-lg mb-8 mx-auto max-w-xs sm:max-w-sm overflow-hidden border border-blue-400 animate-pulse-light">
          {/* IMPORTANT: Place your Islamic animation GIF in the 'public' folder. */}
          {/* For example, if your GIF is named 'my-islamic-gif.gif', put it in 'public/my-islamic-gif.gif' */}
          {/* Then, change the 'src' below to '/my-islamic-gif.gif' */}
          <img
            src="/islamic-animation.gif" // MAKE SURE THIS PATH IS CORRECT FOR YOUR GIF IN THE PUBLIC FOLDER!
            alt="Islamic Blessings Animation"
            className="w-full h-auto max-h-24 object-contain mx-auto"
          />
        </div>

        {/* Sender's Dynamic Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-400 mb-6 drop-shadow-lg leading-tight">
          <span className="block">{initialSenderName} ka Gift</span>
          <span className="inline-block ml-3 text-yellow-400 text-5xl sm:text-6xl">🎁</span>
        </h1>

        {/* Type Your Name Form */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl border border-blue-500 backdrop-blur-sm">
          <p className="text-gray-200 text-lg sm:text-xl mb-4">
            Enter your name to create your unique gift link:
          </p>
          <input
            type="text"
            className="w-full p-4 mb-6 rounded-lg bg-black bg-opacity-50 text-white placeholder-gray-400 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-lg"
            placeholder="Type your name here..."
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
          <button
            onClick={handleGenerateLink}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-lg shadow-lg text-xl sm:text-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Create Your Gift Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftSenderSection;
          
