// pages/gift-receiver.js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const GiftReceiverPage = () => {
  const router = useRouter();
  const { sender, duaId } = router.query;
  const [dua, setDua] = useState(null);

  const duas = [
    { id: 'dua1', text: 'Allah aapko hamesha khush rakhe, Ameen!', gif: '/dua1.gif', language: 'Roman Hindi' },
    { id: 'dua2', text: 'May peace and blessings be upon you. Ameen.', gif: '/dua2.gif', language: 'English' },
    { id: 'dua3', text: 'Har dukh door ho, khushiyan milein, Ameen!', gif: '/dua3.gif', language: 'Roman Hindi' },
    { id: 'dua4', text: 'Wishing you joy and prosperity. Ameen.', gif: '/dua4.gif', language: 'English' },
    { id: 'dua5', text: 'Aapki har nek murad poori ho, Ameen!', gif: '/dua5.gif', language: 'Roman Hindi' },
  ];

  useEffect(() => {
    if (duaId) {
      const selectedDua = duas.find(d => d.id === duaId);
      if (selectedDua) {
        setDua(selectedDua);
      } else {
        setDua({ id: 'default', text: 'Aapke liye ek khaas tohfa!', gif: '/islamic-animation.gif' });
      }
    } else {
      setDua({ id: 'default', text: 'Aapke liye ek khaas tohfa!', gif: '/islamic-animation.gif' });
    }
  }, [duaId]);

  if (!dua) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">
        Loading your gift... <span className="animate-pulse ml-2">🎁</span>
      </div>
    );
  }

  const displaySenderName = sender ? decodeURIComponent(sender) : 'Kisi Pyare Ki Taraf Se';

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden p-6">
      {/* Background: Falling Stars Animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black to-blue-900 opacity-80">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className="relative z-10 p-6 max-w-xl w-full text-center bg-white bg-opacity-10 rounded-xl shadow-xl border border-blue-500 backdrop-blur-sm">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-cyan-400 drop-shadow">
          {displaySenderName} ka Aapke liye Khaas Tohfa!
        </h1>

        <div className="bg-white p-2 rounded-lg shadow-inner mb-6 mx-auto border border-blue-400 max-w-xs md:max-w-sm overflow-hidden">
          <img
            src={dua.gif}
            alt={dua.text}
            className="w-full h-auto max-h-64 object-contain rounded-md mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <p className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-6 animate-pulse-light leading-tight">
          "{dua.text}"
        </p>
        
        <p className="text-gray-200 text-lg sm:text-xl mb-8">
          Aap bhi yeh khushiyan aage share kar sakte hain!
        </p>

        <button
          onClick={() => router.push('/')}
          className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg text-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-75"
        >
          Ek Aur Tohfa Bhejein &rarr;
        </button>
      </div>
    </div>
  );
};

export default GiftReceiverPage;
      
