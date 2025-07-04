/* styles/globals.css (COMPLETE & UPDATED CODE) */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom fonts and base styles */
@layer base {
  body {
    font-family: 'Poppins', sans-serif; /* Ya jo bhi font aap chahte hain */
    @apply bg-black text-white; /* Basic background and text color */
  }
  /* Ensure the background gradient covers the whole page */
  html, body, #__next {
    height: 100%;
    margin: 0;
    padding: 0;
  }
}

/* Falling Stars Animation (same as before, crucial for background) */
@keyframes fallingStar {
  0% {
    transform: translateY(-100vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(200vh) translateX(100vw) rotate(360deg);
    opacity: 0;
  }
}

.star {
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  animation: fallingStar 15s linear infinite;
}

/* Delay for individual stars to create a continuous effect */
.star:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
.star:nth-child(2) { top: 20%; left: 30%; animation-delay: 2s; }
.star:nth-child(3) { top: 5%; left: 50%; animation-delay: 4s; }
.star:nth-child(4) { top: 30%; left: 70%; animation-delay: 6s; }
.star:nth-child(5) { top: 15%; left: 90%; animation-delay: 8s; }
.star:nth-child(6) { top: 25%; left: 5%; animation-delay: 10s; }

/* Fade-in Animation (for share link section) */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

/* Pulse Light Animation (for dua text) */
@keyframes pulse-light {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.2); }
}
.animate-pulse-light {
  animation: pulse-light 2s infinite;
}

/* Bounce subtle for the GIF on homepage */
@keyframes bounce-subtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px); /* A small bounce */
  }
}
.animate-bounce-subtle {
  animation: bounce-subtle 3s infinite ease-in-out;
}

/* New Animations for Loading Screen */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}
.animate-pulse {
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes fadeInSlow {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in-slow {
  animation: fadeInSlow 2s ease-in-out forwards;
}
