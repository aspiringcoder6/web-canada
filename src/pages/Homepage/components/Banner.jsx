import { useState } from "react";

export default function Banner() {
  const images = [
    "/assets/images/Property1=Default.png",
    "/assets/images/Property2=Default.png",
    "/assets/images/Property3=Default.png",
    "/assets/images/Property4=Default.JPG",
    "/assets/images/Property5=Default.jpg",
    "/assets/images/Property6=Default.JPG",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  // Move to next image
  const nextImage = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Move to previous image
  const prevImage = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="relative w-full h-full">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-20 translate-x-0"
                : index === (currentIndex - 1 + images.length) % images.length
                ? direction === "right"
                  ? "-translate-x-10 opacity-0 z-10"
                  : "translate-x-10 opacity-0 z-10"
                : "opacity-80 -z-1"
            }`}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="absolute w-full flex justify-end bottom-10 gap-1 pr-10 z-30">
        <button
          onClick={prevImage}
          className="group bg-[rgba(255,255,255,0.5)] px-8 py-4 rounded-4xl hover:bg-white transition duration-300 ease-in-out"
        >
          <img
            src="/assets/images/ArrowCenterLeft.svg"
            alt="Arrow Left"
            className="w-5 transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
          />
        </button>
        <button
          onClick={nextImage}
          className="group bg-[rgba(255,255,255,0.5)] px-8 py-4 rounded-4xl hover:bg-white transition duration-300 ease-in-out"
        >
          <img
            src="/assets/images/ArrowCenterRight.svg"
            alt="Arrow Right"
            className="w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}
