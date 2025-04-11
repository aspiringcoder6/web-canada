import { useState } from "react";
import classNames from "classnames";

export default function Eliteprogram() {
  const images = [
    {
      imgSrc: "/assets/images/Elite/elite1.png",
      content:
        "Highly successful admissions into top universities such as the University of Toronto",
    },
    {
      imgSrc: "/assets/images/Elite/elite2.png",
      content: "Early planning and goal-setting to secure target universities",
    },
    {
      imgSrc: "/assets/images/Elite/elite3.png",
      content:
        "Regular admission counselling and guidance by admission officers from top universities",
    },
  ];
  const images2 = [
    {
      imgSrc: "/assets/images/Elite/elite4.png",
      content: "Flexible registration times: January, May and September entry",
    },
    {
      imgSrc: "/assets/images/Elite/elite5.png",
      content:
        "A wide range of extracurricular activities to increase the competitiveness of their application portfolio",
    },
    {
      imgSrc: "/assets/images/Elite/elite6.png",
      content:
        "Official TOEFL and IELTS testing center, strong pre-test training and support",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [fade, setFade] = useState(true);
  const [fade2, setFade2] = useState(true);
  const nextImage2 = () => {
    setFade2(false);
    setTimeout(() => {
      setCurrentIndex2((prev) => (prev + 1) % images.length);
      setFade2(true);
    }, 300);
  };
  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  };

  return (
    <div>
      <div className="w-full py-15">
        <h1
          style={{ fontFamily: "SFUIBold" }}
          className="text-[#23417e] text-5xl"
        >
          ELITE PROGRAM
        </h1>
      </div>
      <div className="bg-[#23417e] py-30">
        <div className="flex w-[80%] m-auto items-center gap-10">
          <div className="text-white text-left text-xl flex flex-col gap-5">
            <p className="text-3xl mb-5" style={{ fontFamily: "SFUIBold" }}>
              ELITE PROGRAM INFORMATION
            </p>
            <p>
              <b>Program Code:</b> OSSD-E01
            </p>
            <p>
              <b>School:</b> Oxford College of Canada
            </p>
            <p>
              <b>Diploma:</b> Ontario Secondary School Diploma (OSSD)
            </p>
            <p>
              <b>Program Type:</b> Advanced Program – For Outstanding Students
            </p>
            <p>
              <b>Duration:</b> 1–2 years, depending on individual pathway
            </p>
            <p>
              <b>Intake:</b> January, May, September
            </p>
            <p>
              <b>Location:</b> Toronto Campus
            </p>
          </div>
          <img src="/assets/images/OSSD/ossd1.png" />
        </div>
      </div>
      <div className="flex w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl my-30">
        <div className="w-[60%]">
          <p
            className="text-[#23417e] text-3xl mb-10"
            style={{ fontFamily: "SFUIBold" }}
          >
            About Elite Program
          </p>
          <p className="text-gray-500">
            Oxford College of Canada's Elite Program provides top students a
            secure path to prestigious universities worldwide, boasting a 100%
            success rate in admissions. Key features include successful
            university admissions like the University of Toronto, early planning
            and goal setting, regular counselling from top university admission
            officers, and official IELTS testing with pre-test training.
            Additionally, a variety of extracurricular activities enhance
            students' university application portfolios.
          </p>
        </div>

        <div className="w-[40%] relative h-[300px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.imgSrc}
              className={classNames(
                "w-full h-full absolute top-0 left-0 transition-opacity duration-500 object-cover",
                {
                  "opacity-100 z-10": index === currentIndex && fade,
                  "opacity-0 z-0": index !== currentIndex || !fade,
                }
              )}
            />
          ))}
          <button
            onClick={nextImage}
            className="group absolute right-5 bottom-5 bg-[rgba(255,255,255,0.5)] px-8 py-3 rounded-4xl hover:bg-white transition duration-300 ease-in-out z-20"
          >
            <img
              src="/assets/images/ArrowCenterRight.svg"
              alt="Arrow Right"
              className="w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </button>
          <p
            className={classNames(
              "text-gray-500 mt-5 text-xl transition-opacity duration-300 absolute bottom-[-3.5rem] left-0 w-full",
              {
                "opacity-100": fade,
                "opacity-0": !fade,
              }
            )}
          >
            {images[currentIndex].content}
          </p>
        </div>
      </div>
      <div className="flex w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl my-30">
        <div className="w-[60%]">
          <p
            className="text-[#23417e] text-3xl mb-10"
            style={{ fontFamily: "SFUIBold" }}
          >
            Admission Requirements
          </p>
          <ul
            className="text-gray-500 ml-5 flex flex-col gap-5"
            style={{ listStyle: "disc" }}
          >
            <li>High School students and graduates</li>
            <li>Pass our entrance examination and interview</li>
            <li>Have an IELTS score of 5.0 or above</li>
            <li>A minimum overall average of 80% at home country</li>
          </ul>
          <a
            href="#register"
            className="text-white w-fit mt-10 bg-[#23417e] py-3 px-8 rounded-4xl flex gap-4 items-center justify-between"
          >
            Register Now
            <div className="bg-white rounded-full p-0.5">
              <img src="/assets/images/arrow-up-right.svg" />
            </div>
          </a>
        </div>

        <div className="w-[40%] relative h-[300px]">
          {images2.map((image, index) => (
            <img
              key={index}
              src={image.imgSrc}
              className={classNames(
                "w-full h-full absolute top-0 left-0 transition-opacity duration-500 object-cover",
                {
                  "opacity-100 z-10": index === currentIndex2 && fade2,
                  "opacity-0 z-0": index !== currentIndex2 || !fade2,
                }
              )}
            />
          ))}
          <button
            onClick={nextImage2}
            className="group absolute right-5 bottom-5 bg-[rgba(255,255,255,0.5)] px-8 py-3 rounded-4xl hover:bg-white transition duration-300 ease-in-out z-20"
          >
            <img
              src="/assets/images/ArrowCenterRight.svg"
              alt="Arrow Right"
              className="w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </button>
          <p
            className={classNames(
              "text-gray-500 mt-5 text-xl transition-opacity duration-300 absolute bottom-[-3.5rem] left-0 w-full",
              {
                "opacity-100": fade2,
                "opacity-0": !fade2,
              }
            )}
          >
            {images2[currentIndex2].content}
          </p>
        </div>
      </div>
      <div className="bg-white py-30">
        <h1
          style={{ fontFamily: "SFUIBold" }}
          className="text-[#23417e] text-4xl mb-10"
          id="register"
        >
          University Placement Assurance Plan
        </h1>
        <div className="flex w-[80%] m-auto items-center gap-10 mt-20">
          <div className="text-gray-500 mb-10 text-xl text-left w-[50%] flex flex-col gap-10">
            <p>
              Our University Placement Assurance Plan entails personalized study
              plans crafted by our guidance team for each student before their
              enrollment.
            </p>
            <p>
              Representatives from more than 10 well-known universities are
              invited annually to interact with our students directly, providing
              valuable insights and motivational speeches. Our dedicated
              guidance team, comprising experienced professionals, assists
              students throughout the university or college application process,
              tailoring study plans based on individual skills and grades.
              Additionally, recommendation letters from the principal are
              provided to strengthen students' chances of admission to their
              desired universities.
            </p>
            <p>The program commences in January and September.</p>
          </div>

          <img src="/assets/images/Elite/placement.png" className="m-auto" />
        </div>
      </div>
    </div>
  );
}
