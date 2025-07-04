// pages/select-gift.js (CONFIRM THIS CODE IS APPLIED - Dua Repetition Fixed)

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SelectGiftPage = () => {
  const router = useRouter();
  const { sender } = router.query; 
  const [selectedDua, setSelectedDua] = useState(null);
  const [shareLink, setShareLink] = useState('');

  const duas = [
    { id: 'dua1', text: 'Ya Allah! [RECEIVER_NAME] ke har din ko noor se bhar de, uske gham ko khushi mein badal de. Uske har qadam par rehmat barsa, aur uska har faisla uske haq mein behtareen bana de. Ameen.', gif: '/dua1.gif', language: 'Roman Hindi' },
    { id: 'dua2', text: 'Ilahi! [RECEIVER_NAME] ke dil ko sukoon de, uski duaon ko qubool kar, uske raaston ko asaan bana, aur har moorkh dukh se uski hifazat farma. Uski zindagi mein sirf woh laayein jo uske liye behtareen ho. Ameen.', gif: '/dua2.gif', language: 'Roman Hindi' },
    { id: 'dua3', text: 'Ya Rab! [RECEIVER_NAME] jahan bhi rahe, teri rehmat uske saath ho. Har raat uske liye rahat ka sabab ho, har subah naye umeedon ka chiragh ho. Uski zindagi mein har mod par sirf khushi, barkat aur mohabbat ho. Ameen.', gif: '/dua3.gif', language: 'Roman Hindi' },
    { id: 'dua4', text: 'Dear Allah, may You fill [RECEIVER_NAME]’s life with light, replace her sorrows with peace, and guide every step she takes with wisdom and mercy. Let her heart be full of gratitude and her journey filled with purpose. Ameen.', gif: '/dua4.gif', language: 'English' },
    { id: 'dua5', text: 'May [RECEIVER_NAME]’s heart always find calm even in the storm, and may every tear turn into a smile. May her dreams blossom with grace, and may Allah protect her from pain, granting her only what brings joy and strength. Ameen.', gif: '/dua5.gif', language: 'English' },
    { id: 'dua6', text: 'O Allah, bless [RECEIVER_NAME] with endless love, unwavering faith, and a peaceful soul. Let her nights be restful and her days full of light. Whatever burden she carries, ease it. Whatever prayer she whispers, accept it. Ameen.', gif: '/dua6.gif', language: 'English' },
  ];

  const displaySenderName = sender ? decodeURIComponent(sender) : 'Pyare Dost';
  
  const handleGenerateShareLink = () => {
    if (!selectedDua) {
      alert('Kripya pehle koi dua chunein!');
      return;
    }
    // Ab receiverName query param mein nahi jayega, receiver khud enter karega
    const finalLink = `${window.location.origin}/gift-receiver?sender=${encodeURIComponent(displaySenderName)}&duaId=${selectedDua}`;
    setShareLink(finalLink);
    
    alert(`Aapka link taiyar hai!\n\n${finalLink}\n\nAb aap ise share kar sakti hain!`);
  };

  const shareViaWhatsApp = () => {
    if (!shareLink) { alert('Pehle link generate karein.'); return; }
    const message = `Aapke liye ek khaas Islamic gift hai, ${displaySenderName} ki taraf se! Dekhne ke liye click karein: ${shareLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareViaFacebook = () => {
    if (!shareLink) { alert('Pehle link generate karein.'); return; }
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}&quote=${encodeURIComponent(`Aapke liye ek khaas Islamic gift hai!`)}`, '_blank');
  };

  const shareViaInstagram = () => {
    if (!shareLink) { alert('Pehle link generate karein.'); return; }
    alert('Instagram par share karne ke liye, link copy karein aur apni story/post mein paste karein:\n\n' + shareLink);
    navigator.clipboard.writeText(shareLink).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  const handleDonation = () => {
    alert('Jazakallah! Donation page par redirect kar rahe hain. (Yeh abhi sirf demo hai)');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black to-blue-900 opacity-80">
        <div className="star"></div><div className="star"></div><div className="star"></div>
        <div className="star"></div><div className="star"></div><div className="star"></div>
      </div>

      <div className="relative z-10 p-6 max-w-3xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 drop-shadow-lg leading-tight">
          <span className="block">{displaySenderName}, ab apni dua chunein:</span>
        </h1>

        <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl border border-blue-500 backdrop-blur-sm mb-8">
          <p className="text-gray-200 text-lg sm:text-xl mb-6">
            Aap kis dua ke saath gift bhejna chahte hain?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {duas.map((dua) => (
              <div
                key={dua.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 relative ${
                  selectedDua === dua.id ? 'border-cyan-400 bg-blue-700 bg-opacity-30 shadow-lg' : 'border-blue-600 bg-black bg-opacity-40'
                }`}
                onClick={() => setSelectedDua(dua.id)}
              >
                <input
                  type="radio"
                  name="duaSelection"
                  id={`radio-${dua.id}`}
                  value={dua.id}
                  checked={selectedDua === dua.id}
                  onChange={() => setSelectedDua(dua.id)}
                  className="absolute top-3 left-3 w-5 h-5 accent-cyan-400 cursor-pointer"
                />
                
                <img
                  src={dua.gif}
                  alt={dua.text}
                  className="w-full h-36 object-cover rounded-md mb-3 border border-gray-600 shadow-md transform hover:scale-102 transition-transform duration-300"
                />
                {/* Ensure only ONE p tag here to avoid duplication */}
                <p className={`text-xl font-semibold ${selectedDua === dua.id ? 'text-white' : 'text-gray-100'} mt-2`}>
                  {dua.text.replace('[RECEIVER_NAME]', 'aapke liye')} {/* Placeholder for display */}
                </p>
                <span className="text-sm text-gray-400">({dua.language})</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleGenerateShareLink}
            className="w-full mt-8 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg text-xl sm:text-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
          >
            Generate Shareable Link
          </button>
        </div>

        {shareLink && (
          <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl border border-green-500 backdrop-blur-sm mb-8 animate-fade-in">
            <p className="text-green-400 text-lg sm:text-xl mb-4">
              Aapka khaas link taiyar hai! Ab share karein:
            </p>
            <textarea
              readOnly
              value={shareLink}
              className="w-full p-3 mb-4 rounded-lg bg-black bg-opacity-50 text-green-300 border border-green-600 text-md break-words resize-none h-24"
              onClick={(e) => e.target.select()}
            />
            
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button onClick={shareViaWhatsApp} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-lg shadow-md flex items-center gap-2 text-md transform hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2.05a10 10 0 00-8.91 14.86l-1.3 4.79a1 1 0 001.27 1.27l4.79-1.3a10 10 0 0014.86-8.91 10 10 0 00-10.71-10.71zM17.47 15.02a.86.86 0 01-1.22.07l-2.06-1.54a.86.86 0 00-1 .09c-.58.38-1.5.86-2.61.42a6.45 6.45 0 01-2.61-2.61c-.44-1.11.04-2.03.42-2.61a.86.86 0 00.09-1l-1.54-2.06a.86.86 0 01.07-1.22l.53-.53a1.74 1.74 0 012.35-.08l2.25 1.72a.86.86 0 00.99-.08l2.5-2.07a.86.86 0 011.23.07l.53.53a.86.86 0 01-.07 1.23l-1.72 2.25a.86.86 0 00.08 1l2.07 2.5a.86.86 0 01-.07 1.23l-.53.53z"/></svg> WhatsApp
              </button>
              <button onClick={shareViaFacebook} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg shadow-md flex items-center gap-2 text-md transform hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.27 0-3.892 1.543-3.892 4.045v2.955z"/></svg> Facebook
              </button>
              <button onClick={shareViaInstagram} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-5 rounded-lg shadow-md flex items-center gap-2 text-md transform hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.5 2C4.463 2 2 4.463 2 7.5v9C2 19.537 4.463 22 7.5 22h9c3.037 0 5.5-2.463 5.5-5.5v-9C22 4.463 19.537 2 16.5 2h-9zm0 2h9c2.062 0 3.5 1.438 3.5 3.5v9c0 2.062-1.438 3.5-3.5 3.5h-9c-2.062 0-3.5-1.438-3.5-3.5v-9c0-2.062 1.438-3.5 3.5-3.5zm7.5 3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3 2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg> Instagram
              </button>
            </div>
          </div>
        )}

        <button
          onClick={handleDonation}
          className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg text-xl sm:text-2xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-75 mt-8"
        >
          Donate for Children's Education (Sadaqah Jariyah)
        </button>

        <button
          onClick={() => router.push('/')}
          className="mt-6 text-blue-400 hover:text-blue-300 text-lg sm:text-xl underline transition-colors duration-300"
        >
          &larr; Start a New Gift
        </button>
      </div>
    </div>
  );
};

export default SelectGiftPage;
  
