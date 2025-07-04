// pages/select-gift.js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SelectGiftPage = () => {
  const router = useRouter();
  const { sender } = router.query; // Home page se aaya hua sender ka naam
  const [selectedDua, setSelectedDua] = useState(null); // Selected dua ka ID store karega
  const [shareLink, setShareLink] = useState(''); // Generated shareable link

  // Duas aur unki GIFs ki list
  const duas = [
    {
      id: 'dua1',
      text: 'Allah aapko khushiyan aur barkatein ata farmaye. Ameen.',
      gif: '/dua1.gif', // Make sure this GIF is in public folder
      language: 'Roman Hindi'
    },
    {
      id: 'dua2',
      text: 'May Allah bless you with peace and prosperity. Ameen.',
      gif: '/dua2.gif', // Make sure this GIF is in public folder
      language: 'English'
    },
    {
      id: 'dua3',
      text: 'Har mushkil se hifazat farmaye aur zindagi mein kamyabi de. Ameen.',
      gif: '/dua3.gif', // Make sure this GIF is in public folder
      language: 'Roman Hindi'
    },
    {
      id: 'dua4',
      text: 'Wishing you endless blessings and success. Ameen.',
      gif: '/dua4.gif', // Make sure this GIF is in public folder
      language: 'English'
    },
    {
      id: 'dua5',
      text: 'Allah aapki har jaayaz dua qubool kare. Ameen.',
      gif: '/dua5.gif', // Make sure this GIF is in public folder
      language: 'Roman Hindi'
    },
  ];

  // Yeh useEffect tab chalta hai jab sender ka naam URL mein change hota hai.
  // Abhi hum iska zyada use nahi karenge, bas naam display karne ke liye.
  useEffect(() => {
    if (sender) {
      console.log(`Sender: ${decodeURIComponent(sender)}`);
    }
  }, [sender]);

  // Link generate karne ka function
  const handleGenerateShareLink = () => {
    if (!selectedDua) {
      alert('Kripya pehle koi dua chunein!');
      return;
    }
    // Final receiver link ko generate karna hai
    // For example: yourwebsite.com/gift-receiver?sender=SenderName&duaId=dua1
    const finalLink = `${window.location.origin}/gift-receiver?sender=${encodeURIComponent(sender)}&duaId=${selectedDua}`;
    setShareLink(finalLink);
    
    // Yahan aap ek confirmation message dikha sakti hain ya directly share option open kar sakti hain
    alert(`Aapka link taiyar hai!\n${finalLink}\nAb aap ise share kar sakti hain!`);
  };

  // Share button functionality (placeholders)
  const shareViaWhatsApp = () => {
    if (!shareLink) {
      alert('Pehle link generate karein.');
      return;
    }
    const message = `Aapke liye ek khaas Islamic gift hai, ${decodeURIComponent(sender || 'aapke dost')} ki taraf se! Dekhne ke liye click karein: ${shareLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareViaFacebook = () => {
    if (!shareLink) {
      alert('Pehle link generate karein.');
      return;
    }
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}&quote=${encodeURIComponent(`Aapke liye ek khaas Islamic gift hai!`)}`, '_blank');
  };

  const shareViaInstagram = () => {
    // Instagram par direct share link APIs mushkil hain.
    // Instagram ke liye, user ko link copy karne ke liye kehna behtar hai.
    if (!shareLink) {
      alert('Pehle link generate karein.');
      return;
    }
    alert('Instagram par share karne ke liye, link copy karein aur apni story/post mein paste karein:\n\n' + shareLink);
    navigator.clipboard.writeText(shareLink).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };


  // Donation button functionality
  const handleDonation = () => {
    alert('Jazakallah! Donation page par redirect kar rahe hain. (Yeh abhi sirf demo hai)');
    // Yahan aap kisi actual donation platform ke link par redirect kar sakti hain.
    // window.open('YOUR_DONATION_LINK_HERE', '_blank');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background: Falling Stars Animation (same as home page) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black to-blue-900 opacity-80">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <div className="relative z-10 p-6 max-w-3xl w-full text-center">
        {/* Sender's Name Display */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 drop-shadow-lg leading-tight">
          <span className="block">{decodeURIComponent(sender || 'Pyare dost')}, ab apni dua chunein:</span>
        </h1>

        {/* Dua Selection Area */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl border border-blue-500 backdrop-blur-sm mb-8">
          <p className="text-gray-200 text-lg sm:text-xl mb-6">
            Aap kis dua ke saath gift bhejna chahte hain?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {duas.map((dua) => (
              <div
                key={dua.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 ${
                  selectedDua === dua.id ? 'border-cyan-400 bg-blue-700 bg-opacity-30 shadow-lg' : 'border-blue-600 bg-black bg-opacity-40'
                }`}
                onClick={() => setSelectedDua(dua.id)}
              >
                <img
                  src={dua.gif}
                  alt={dua.text}
                  className="w-full h-40 object-cover rounded-md mb-3 border border-gray-600 shadow-md"
                />
                <p className={`text-lg font-semibold ${selectedDua === dua.id ? 'text-white' : 'text-gray-100'}`}>
                  {dua.text}
                </p>
                <span className="text-sm text-gray-400">({dua.language})</span>
              </div>
            ))}
          </div>

          {/* Generate Link Button */}
          <button
            onClick={handleGenerateShareLink}
            className="w-full mt-8 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg text-xl sm:text-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
          >
            Generate Shareable Link
          </button>
        </div>

        {/* Share Link Display and Buttons */}
        {shareLink && (
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl border border-green-500 backdrop-blur-sm mb-8 animate-fade-in">
            <p className="text-green-400 text-lg sm:text-xl mb-4">
              Aapka khaas link taiyar hai! Ab share karein:
            </p>
            <textarea
              readOnly
              value={shareLink}
              className="w-full p-3 mb-4 rounded-lg bg-black bg-opacity-50 text-green-300 border border-green-600 text-md break-words resize-none h-24"
              onClick={(e) => e.target.select()} // Select all text on click
            />
            
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button
                onClick={shareViaWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-lg shadow-md flex items-center gap-2 text-md transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2.05a10 10 0 00-8.91 14.86l-1.3 4.79a1 1 0 001.27 1.27l4.79-1.3a10 10 0 0014.86-8.91 10 10 0 00-10.71-10.71zM17.47 15.02a.86.86 0 01-1.22.07l-2.06-1.54a.86.86 0 00-1 .09c-.58.38-1.5.86-2.61.42a6.45 6.45 0 01-2.61-2.61c-.44-1.11.04-2.03.42-2.61a.86.86 0 00.09-1l-1.54-2.06a.86.86 0 01.07-1.22l.53-.53a1.74 1.74 0 012.35-.08l2.25 1.72a.86.86 0 00.99-.08l2.5-2.07a.86.86 0 011.23.07l.53.53a.86.86 0 01-.07 1.23l-1.72 2.25a.86.86 0 00.08 1l2.07 2.5a.86.86 0 01-.07 1.23l-.53.53z"/></svg>
                WhatsApp
              </button>
              <button
                onClick={shareViaFacebook}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg shadow-md flex items-center gap-2 text-md transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.27 0-3.892 1.543-3.892 4.045v2.955z"/></svg>
                Facebook
              </button>
              <button
                onClick={shareViaInstagram}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-5 rounded-lg shadow-md flex items-center gap-2 text-md transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.5 2C4.463 2 2 4.463 2 7.5v9C2 19.537 4.463 22 7.5 22h9c3.037 0 5.5-2.463 5.5-5.5v-9C22 4.463 19.537 2 16.5 2h-9zm0 2h9c2.062 0 3.5 1.438 3.5 3.5v9c0 2.062-1.438 3.5-3.5 3.5h-9c-2.062 0-3.5-1.438-3.5-3.5v-9c0-2.062 1.438-3.5 3.5-3.5zm7.5 3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3 2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
                Instagram
              </button>
            </div>
          </div>
        )}

        {/* Donation Button */}
        <button
          onClick={handleDonation}
          className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg text-xl sm:text-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-75 mt-8"
        >
          Donate for Children's Education (Sadaqah Jariyah)
        </button>

        {/* Back to Home/Receiver page (Placeholder for now) */}
        <button
          onClick={() => router.push('/')} // Go back to home page
          className="mt-6 text-blue-400 hover:text-blue-300 text-lg sm:text-xl underline transition-colors duration-300"
        >
          &larr; Start a New Gift
        </button>
      </div>
    </div>
  );
};

export default SelectGiftPage;
      
