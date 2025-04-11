import { IoMdPlay } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const statisticsFlat = [
  { value: "96%", label: "University Acceptance Rate" },
  { value: "QUALITY", label: "Academic Education" },
  { value: "≤ 15", label: "Class Size" },
  { value: "10+", label: "Seasonal Activities" },
  { value: "30+", label: "Credit Classes" },
  { value: "TUTORING", label: "After Class" },
  { value: "IELTS", label: "Official Testing Center" },
  { value: "FULL SERVICE", label: "For Students" },
  { value: "PRIME", label: "Location In Toronto" },
];

function Statistics() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is md or smaller
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(
        (prevIndex) =>
          isMobile
            ? (prevIndex + 1) % statisticsFlat.length
            : (prevIndex + 1) % 3 // for 3 sets
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const displayStats = isMobile
    ? [statisticsFlat[index]]
    : statisticsFlat.slice(index * 3, index * 3 + 3);

  return (
    <div className="bg-[#23417e] w-full text-white p-7 overflow-hidden px-0 lg:px-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className={`grid ${
            isMobile
              ? "grid-cols-1 grid-rows-1"
              : "grid-cols-3 max-sm:grid-rows-3 max-sm:grid-cols-1"
          } gap-5`}
        >
          {displayStats.map((stat, i) => (
            <div
              key={i}
              className={`max-sm:text-left p-5 ${
                !isMobile && i < 2 ? "sm:border-r border-white" : ""
              }`}
            >
              <h2 className="text-3xl mb-2 font-bold">{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default function Hero() {
  return (
    <>
      <div className="flex flex-col py-30 items-center overflow-hidden">
        <h1
          className="text-[#23417e] text-4xl md:text-6xl flex items-center justify-center gap-5"
          style={{ fontFamily: "SFUIBold" }}
        >
          Oxford College of Canada Since 2004
          <img src="assets/images/canada.svg" className="hidden lg:block" />
        </h1>
        <p
          style={{ fontFamily: "SFUILight" }}
          className="text-gray-500 text-xl md:text-2xl lg:text-3xl max-w-[80%] lg:max-w-[50%] mt-5"
        >
          Welcome to the future of education - a future where{" "}
          <span className="text-[#23417e]" style={{ fontFamily: "SFUIBold" }}>
            tradition
          </span>{" "}
          meets{" "}
          <span className="text-[#23417e]" style={{ fontFamily: "SFUIBold" }}>
            innovation
          </span>
          , and where the pursuit of knowledge{" "}
          <span className="text-[#23417e]" style={{ fontFamily: "SFUIBold" }}>
            knows no bounds.
          </span>
        </p>
        <div className="mt-10 flex gap-5">
          <a
            className="text-white bg-[#23417e] py-3 px-8 rounded-4xl flex gap-4 items-center justify-between"
            href="/highschool"
          >
            Apply Now
            <div className="bg-white rounded-full p-0.5">
              <img src="/assets/images/arrow-up-right.svg" />
            </div>
          </a>
          <button
            className="text-[#23417e] text-2xl flex gap-2 items-center"
            style={{ fontFamily: "SFUILight" }}
          >
            <span className="border-[#23417e] border-2 aspect-square rounded-full p-3">
              <IoMdPlay />
            </span>
            <span className="hidden md:block">Viewbook</span>
          </button>
        </div>
        <img src="/assets/images/Vector.svg" className="absolute left-0 -z-1" />
      </div>{" "}
      <Statistics />
    </>
  );
}
