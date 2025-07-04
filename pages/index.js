// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const [senderName, setSenderName] = useState('');
  const router = useRouter();

  const handleCreateGift = () => {
    if (senderName.trim()) {
      router.push(`/select-gift?sender=${encodeURIComponent(senderName.trim())}`);
    } else {
      alert('Kripya apna naam darj karein.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden text-white">
      <Head>
        <title>Deeni Gift</title>
        <meta name="description" content="Send beautiful Islamic gifts with duas." />
      </head>

      {/* Stars Background */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`star star-${i + 1}`}></div>
      ))}

      <div className="relative z-10 bg-gradient-to-br from-purple-700 to-blue-900 p-8 rounded-xl shadow-2xl text-center max-w-md w-full animate-fade-in">
        <h1 className="text-4xl font-extrabold mb-6 text-yellow-300 drop-shadow-lg">
          Deeni Gift
        </h1>
        <p className="text-lg mb-8 text-gray-200">
          Apne pyaron ko duaon aur tohfon se nawazein.
        </p>

        <div className="mb-6">
          <label htmlFor="senderName" className="block text-lg font-medium text-gray-100 mb-2">
            Aapka naam:
          </label>
          <input
            type="text"
            id="senderName"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Yahan apna naam likhein"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
        </div>

        <button
          onClick={handleCreateGift}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-3 px-6 rounded-lg text-xl shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 animate-bounce-subtle"
        >
          Gift Banayein
        </button>
      </div>
    </div>
  );
}
