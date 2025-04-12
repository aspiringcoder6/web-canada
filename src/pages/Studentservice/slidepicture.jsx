import { useState } from "react";

const Box = [
  {
    id: 1,
    picture: [
      "/assets/images/Studentservice/activities1.png",
      "/assets/images/Studentservice/activities2.png",
      "/assets/images/Studentservice/activities3.png",
    ],
    title: "STUDENT ACTIVITIES",
    text: "Oxford College of Canada has a very energetic and vigorous team of staff who provide a large number of extracurricular activities for our students. We have organized many visits to various university campuses, the regular basketball competitions, football contests, hiking trips and barbecues, visits to touris attractions such as Toronto Zoo, Niagara Falls, etc. We believe these activities enrich the students’ after-school life and broaden their horizons.",
  },
  {
    id: 2,
    picture: ["/assets/images/Studentservice/medical.png"],
    title: "MEDICAL INSURANCE",
    text: "We provide medical insurance for our students so that they could enjoy the medical benefits. The features cover X rays, eye examinations, impacted wisdom teeth, etc. Please contact the school for more details.",
  },
  {
    id: 3,
    picture: [
      "/assets/images/Studentservice/airport1.png",
      "/assets/images/Studentservice/airport2.png",
    ],
    title: "AIRPORT PICK-UP",
    text: "As long as the student faxes his/her flight number and arrival time to Oxford College’s International Student Department, we will arrange airport pick-up for the student. Please notify the school at least one week before arrival.",
  },
  {
    id: 4,
    picture: [
      "/assets/images/Studentservice/accommodation1.png",
      "/assets/images/Studentservice/accommodation2.png",
      "/assets/images/Studentservice/accommodation3.png",
    ],
    title: "ACCOMMODATION ARRANGEMENT",
    text: "Oxford College of Canada chooses homes for students under strict criteria. The homes chosen will be responsible for the students’ living, including accommodation and dinner. They will also help the students to get familiar with Canadian culture and ways of living, which will greatly shorten the time needed for them to assimilate to the western society and better their English. Each student will have his/her own bedroom. Breakfast, lunch and supper will be provided, which help students to concentrate on their studies.",
  },
];

function SingleSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextImage = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[20rem] md:h-[36rem] overflow-hidden">
      <div className="w-full h-full relative">
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
                : "opacity-0 z-0"
            }`}
          />
        ))}

        <div className="absolute w-full flex justify-end bottom-10 gap-1 pr-4 md:pr-10 z-30">
          <button
            onClick={nextImage}
            className="group bg-[rgba(255,255,255,0.5)] px-4 py-2 md:px-8 md:py-4 rounded-4xl hover:bg-white transition duration-300 ease-in-out"
          >
            <img
              src="/assets/images/ArrowCenterRight.svg"
              alt="Arrow Right"
              className="w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Slide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  md:grid-rows-2  mx-[4rem] sm:mx-[6rem] gap-[4rem] xl:gap-[10rem] xl:mx-[10rem]">
      {Box.map((item) => (
          <div key={item.id} className="">
          <SingleSlider images={item.picture} />
          <div className="text-start py-8">
            <h2 className="text-xl md:text-2xl text-[#23417E] font-bold">{item.title}</h2>
            <p className="text-xs sm:text-base mt-4 text-[#5D5D5D]">{item.text}</p>
          </div>
          </div>
      ))}
    </div>
  );
}
