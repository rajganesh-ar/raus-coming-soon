import { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-07-05T00:00:00"); // Set your launch date here

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden font-mont">
      {/* 🔁 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* 🌫️ Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

      {/* 🌟 Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <img src="/logo.png" alt="Logo" className="w-52 md:w-64 mb-6" />

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          The Market is Updating, So Are We
        </h1>
        <p className="text-lg md:text-xl opacity-80 mb-8">
          RAUS has been serving innovation. We're upgrading to serve you better.
        </p>

        {/* ⏳ Countdown Timer */}
        <div className="text-2xl md:text-3xl font-bold mb-6">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>

        {/* 📞 Contact */}
        <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base items-center text-white mt-4">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            <a href="mailto:info@raus.ae" className="hover:underline">
              info@raus.ae
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-lg" />
            <a href="tel:+971565881881" className="hover:underline">
              +971 56 588 1881
            </a>
          </div>
        </div>

        {/* 📜 Footer */}
        <div className="absolute bottom-4 text-white text-xs opacity-60">
          &copy; {new Date().getFullYear()} RAUS Integrated Project Management Services LLC. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
