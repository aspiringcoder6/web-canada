const statisticsSets = [
  [
    { value: "96%", label: "University Acceptance Rate" },
    { value: "QUALITY", label: "Academic Education" },
    { value: "≤ 15", label: "Class Size" },
  ],
  [
    { value: "10+", label: "Seasonal Activities" },
    { value: "30+", label: "Credit Classes" },
    { value: "TUTORING", label: "After Class" },
  ],
  [
    { value: "IELTS", label: "Official Testing Center" },
    { value: "FULL SERVICE", label: "For Students" },
    { value: "PRIME", label: "Location In Toronto" },
  ],
];
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
function Statistics() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % statisticsSets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#23417e] w-full text-white p-7 overflow-hidden px-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="grid max-sm:grid-rows-3 max-sm:grid-cols-1 grid-cols-3 gap-5"
        >
          {statisticsSets[index].map((stat, i) => (
            <div
              key={i}
              className={`max-sm:text-left p-5 ${
                i < 2 ? "sm:border-r max-sm:border-b border-white" : ""
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
          className="text-[#23417e] text-6xl flex items-center justify-center gap-5"
          style={{ fontFamily: "SFUIBold" }}
        >
          Oxford College of Canada Since 2004
          <img src="assets/images/canada.svg" />
        </h1>
        <p
          style={{ fontFamily: "SFUILight" }}
          className="text-gray-500 text-3xl max-w-[50%] mt-5"
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
          <button className="text-white bg-[#23417e] py-3 px-8 rounded-4xl flex gap-4 items-center justify-between">
            Apply Now
            <div className="bg-white rounded-full p-0.5">
              <img src="/assets/images/arrow-up-right.svg" />
            </div>
          </button>
          <button
            className="text-[#23417e] text-2xl flex gap-2 items-center"
            style={{ fontFamily: "SFUILight" }}
          >
            <span className="border-[#23417e] border-2 rounded-full px-3.5 py-2 ">
              ▶
            </span>
            Viewbook
          </button>
        </div>
        <img src="/assets/images/Vector.svg" className="absolute left-0 -z-1" />
      </div>{" "}
      <Statistics />
    </>
  );
}
