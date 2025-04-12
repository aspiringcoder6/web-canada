import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import "./Hero.css";

const images = [
  "/assets/images/language4.jpg",
  "/assets/images/ielts1.jpg",
  "/assets/images/language5.jpg",
  "/assets/images/language6.jpg",
  "/assets/images/language7.jpg",
  "/assets/images/language8.jpg",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#23417E] text-white py-16 px-6 lg:px-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/images/leaf1.svg')] bg-no-repeat bg-center bg-contain pointer-events-none top-150 md:w-130 md:h-130 md:left-50 md:top-110 lg:w-164 lg:h-164 lg:left-150 lg:-top-5" />
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="max-w-150 text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Your Gateway <span className="font-semibold opacity-70">to</span><br />
            <span className="text-[#EEA284] text-5xl md:text-[80px]" style={{ fontFamily: 'Waterfall, cursive' }}>
              English Language Mastery
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Are you ready to <strong>boost your English</strong> and <strong>unlock global opportunities</strong>?<br />
            <strong className="text-yellow-300">Join</strong> our <strong>dynamic</strong> and <strong>personalized</strong> language programs designed for <strong>success</strong> in academic, professional, and real-life settings.
          </p>

          <div className="mt-8 w-full flex flex-col sm:flex-row items-center justify-left gap-4">
            <a
              href="#register"
              className="w-[235px] inline-flex items-center justify-center gap-2 bg-white text-[#2b4170] font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 transition"
            >
              Register Now <ArrowUpRight size={18} />
            </a>
            <a
              href="#test"
              className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition"
            >
              <Play className="w-5 h-5" /> Check Your English Level
            </a>
          </div>

        </div>

        <div className="w-full lg:w-[500px] h-[320px] relative flex items-center justify-center">
          <div className="w-full h-full border-4 border-white rounded-2xl overflow-hidden shadow-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
            <img src="/assets/images/star.svg" className="absolute -top-10 -left-9 w-12 h-12" />
            <img src="/assets/images/mark.svg" className="absolute opacity-0 lg:opacity-100 lg:top-73 lg:left-119 w-12 h-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
