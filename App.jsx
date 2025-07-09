import React, { useEffect, useState } from "react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date("2026-02-22T00:00:00").getTime();
      const now = new Date().getTime();
      const distance = target - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-[#3e2b1a] text-center px-4 py-8 bg-white/60">
      <nav className="flex justify-center gap-4 flex-wrap bg-white/60 p-4 rounded-full max-w-xl mx-auto">
        <button className="bg-[#f0e9e2] text-lg rounded-full px-4 py-2">Wedding</button>
        <button className="bg-[#f8c7a5] text-lg rounded-full px-4 py-2">Travel & Stay</button>
        <button className="bg-[#f8c7a5] text-lg rounded-full px-4 py-2">Indian Ceremonies</button>
      </nav>

      <div className="mt-20 mb-10">
        <h1 className="text-5xl md:text-6xl font-[cursive]">Mounica</h1>
        <h2 className="text-2xl md:text-3xl font-[cursive]">&</h2>
        <h1 className="text-5xl md:text-6xl font-[cursive]">Joshua</h1>
      </div>

      <div className="flex justify-center gap-6 md:gap-10 text-lg md:text-xl font-medium mb-10 flex-wrap">
        <div>
          <div>{timeLeft.days}</div>
          <div className="text-sm md:text-base">Days</div>
        </div>
        <div>
          <div>{timeLeft.hours}</div>
          <div className="text-sm md:text-base">Hours</div>
        </div>
        <div>
          <div>{timeLeft.minutes}</div>
          <div className="text-sm md:text-base">Mins.</div>
        </div>
        <div>
          <div>{timeLeft.seconds}</div>
          <div className="text-sm md:text-base">Secs.</div>
        </div>
      </div>

      <div className="bg-[#fefaf5] rounded-full px-6 py-2 inline-block text-base md:text-lg font-semibold">
        Sunday, February 22, 2026 &nbsp; | &nbsp; Vijayawada, India
      </div>
    </div>
  );
}
