import { useEffect, useState } from "react";
import { Play, Send } from "lucide-react";

const testimonials = [
  {
    name: "Alex",
    country: "Brazil",
    message: "OCC helped me improve my English and get into university!",
    avatar: "/assets/images/ava1.svg",
  },
  {
    name: "Lee",
    country: "South Korea",
    message: "Great teachers and a warm environment.",
    avatar: "/assets/images/ava2.jpg",
  },
  {
    name: "Aisha",
    country: "Nigeria",
    message: "I passed my IELTS! Thanks OCC!",
    avatar: "/assets/images/ava3.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); 
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#F0F7FE] py-16 px-4">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2b4170] mb-16 relative w-fit mx-auto">
          Testimonials
          <img src="/assets/images/orangedash.svg" className="absolute left-5 w-5/6" />
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-30 justify-center">
          <div className="w-5/6 lg:max-w-1/2 h-100 bg-gradient-to-b from-[#2b4170] to-white rounded-2xl flex items-center justify-center shadow-lg border-3 border-[#2b4170] relative"
                style={{
                    backgroundImage: "url('/assets/images/ielts1.jpg'), linear-gradient(to bottom, #2b4170, white)",
                    backgroundBlendMode: "overlay",
                }}
          >
            <button className="bg-[#F3B8B8] text-[#2b4170] rounded-[1.7vw] p-4 border-3 border-[#2b4170]">
              <Play />
            </button>
            <img src="/assets/images/highlight.svg" className="absolute -top-10 -left-9 w-12 h-12" />
          </div>

          <div
            className={`w-full max-w-[350px] bg-white rounded-xl p-6 shadow-md flex flex-col justify-between 
              transform transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="text-gray-800 mb-4">{current.message}</p>
            <div className="flex items-center gap-3 mt-auto text-left bg-[#F0F7FE] rounded-4xl py-2 px-2">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{current.name}</p>
                <p className="text-sm text-gray-500">{current.country}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pr-4 mt-8">
            <img src="/assets/images/plane.svg" className="w-12 h-12" />
        </div>
      </div>
    </section>
  );
}
