// pages/gift-receiver.js (FIXED: Dua Rendering)

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const GiftReceiverPage = () => {
  const router = useRouter();
  // Sender, duaId, aur receiverName URL query se lenge
  const { sender, duaId, receiverName } = router.query; 
  const [dua, setDua] = useState(null);

  // Aapki taraf se di gayi nayi duayen (select-gift page wali list se exact match honi chahiye)
  const duas = [
    { id: 'dua1', text: 'Ya Allah! [RECEIVER_NAME] ke har din ko noor se bhar de, uske gham ko khushi mein badal de. Uske har qadam par rehmat barsa, aur uska har faisla uske haq mein behtareen bana de. Ameen.', gif: '/dua1.gif', language: 'Roman Hindi' },
    { id: 'dua2', text: 'Ilahi! [RECEIVER_NAME] ke dil ko sukoon de, uski duaon ko qubool kar, uske raaston ko asaan bana, aur har moorkh dukh se uski hifazat farma. Uski zindagi mein sirf woh laayein jo uske liye behtareen ho. Ameen.', gif: '/dua2.gif', language: 'Roman Hindi' },
    { id: 'dua3', text: 'Ya Rab! [RECEIVER_NAME] jahan bhi rahe, teri rehmat uske saath ho. Har raat uske liye rahat ka sabab ho, har subah naye umeedon ka chiragh ho. Uski zindagi mein har mod par sirf khushi, barkat aur mohabbat ho. Ameen.', gif: '/dua3.gif', language: 'Roman Hindi' },
    { id: 'dua4', text: 'Dear Allah, may You fill [RECEIVER_NAME]’s life with light, replace her sorrows with peace, and guide every step she takes with wisdom and mercy. Let her heart be full of gratitude and her journey filled with purpose. Ameen.', gif: '/dua4.gif', language: 'English' },
    { id: 'dua5', text: 'May [RECEIVER_NAME]’s heart always find calm even in the storm, and may every tear turn into a smile. May her dreams blossom with grace, and may Allah protect her from pain, granting her only what brings joy and strength. Ameen.', gif: '/dua5.gif', language: 'English' },
    { id: 'dua6', text: 'O Allah, bless [RECEIVER_NAME] with endless love, unwavering faith, and a peaceful soul. Let her nights be restful and her days full of light. Whatever burden she carries, ease it. Whatever prayer she whispers, accept it. Ameen.', gif: '/dua6.gif', language: 'English' },
  ];

  useEffect(() => {
    if (duaId) {
      const selectedDua = duas.find(d => d.id === duaId);
      if (selectedDua) {
        setDua(selectedDua);
      } else {
        // Fallback if duaId is not found or invalid
        setDua({ id: 'default', text: 'Aapke liye ek khaas tohfa!', gif: '/islamic-animation.gif' });
      }
    } else {
      // Default behavior if no duaId is provided
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
  // Receiver ka naam URL se aayega, agar nahi hai to "aapke liye"
  const displayReceiverName = receiverName ? decodeURIComponent(receiverName) : 'aapke liye';

  // Dua ke text mein [RECEIVER_NAME] ko replace karna
  const finalDuaText = dua.text.replace('[RECEIVER_NAME]', displayReceiverName);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden p-6">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black to-blue-900 opacity-80">
        <div className="star"></div><div className="star"></div><div className="star"></div>
        <div className="star"></div><div className="star"></div><div className="star"></div>
      </div>

      <div className="relative z-10 p-6 max-w-xl w-full text-center bg-white bg-opacity-10 rounded-xl shadow-xl border border-blue-500 backdrop-blur-sm">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-cyan-400 drop-shadow">
          {displaySenderName} ka Aapke liye Khaas Tohfa!
        </h1>

        <div className="bg-white p-2 rounded-lg shadow-inner mb-6 mx-auto border border-blue-400 max-w-xs md:max-w-sm overflow-hidden">
          <img
            src={dua.gif}
            alt={finalDuaText} // Alt text updated to final dua text
            className="w-full h-auto max-h-64 object-contain rounded-md mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <p className="text-2xl sm:text-3xl font-semibold text-yellow-400 mb-6 animate-pulse-light leading-tight">
          "{finalDuaText}"
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
    
