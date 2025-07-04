// pages/index.js (CONFIRM THIS CODE IS APPLIED)

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const [senderName, setSenderName] = useState('');
  const router = useRouter();

  const handleCreateGift = () => {
    if (!senderName.trim()) {
      alert('Kripya apna naam enter karein!');
      return;
    }
    // Sirf sender ka naam select-gift page par bhejenge
    router.push(`/select-gift?sender=${encodeURIComponent(senderName.trim())}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background: Falling Stars Animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black to-blue-900 opacity-80">
        <div className="star"></div><div className="star"></div><div className="star"></div>
        <div className="star"></div><div className="star"></div><div className="star"></div>
      </div>

      <div className="relative z-10 p-6 max-w-2xl w-full text-center bg-white bg-opacity-10 rounded-xl shadow-xl border border-blue-500 backdrop-blur-sm">
        <div className="mb-8 animate-bounce-subtle">
          <img src="/islamic-animation.gif" alt="Islamic Blessings Animation" className="mx-auto w-32 h-32 sm:w-48 sm:h-48 rounded-full shadow-lg border-4 border-yellow-400" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
          Deeni Gift ka Gift <span role="img" aria-label="gift">🎁</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">
          Apne pyaron ko ek roohani tohfa bhej kar unka din roshan karein.
        </p>
        
        <div className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Aapka naam yahan type karein..."
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="w-full p-3 rounded-lg bg-black bg-opacity-50 text-white border border-gray-600 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 placeholder-gray-400 text-lg"
          />
        </div>

        <button
          onClick={handleCreateGift}
          className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg text-xl sm:text-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-opacity-75"
        >
          Create Your Gift Link
        </button>
      </div>
    </div>
  );
};

export default HomePage;
              
