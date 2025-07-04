// pages/_app.js (UPDATED CODE)

import '../styles/globals.css';
import LoadingScreen from '../components/LoadingScreen'; // Import the new component
import Head from 'next/head'; // Import Head for favicon

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Deeni Gift</title>
        <meta name="description" content="Send beautiful Islamic gifts with duas." />
        <link rel="icon" href="/favicon.ico" /> {/* Ensure you have a favicon.ico in your public folder */}
      </Head>
      <LoadingScreen> {/* Wrap your app with LoadingScreen */}
        <Component {...pageProps} />
      </LoadingScreen>
    </>
  );
}

export default MyApp;
