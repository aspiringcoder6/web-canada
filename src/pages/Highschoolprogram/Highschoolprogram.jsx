import { div, nav } from "framer-motion/client";
import RegistrationForm from "./Form";
import { useNavigate } from "react-router-dom";

export default function Highschoolprogram() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#23417e] w-full py-10">
        <h1
          style={{ fontFamily: "SFUIBold" }}
          className="text-white text-3xl md:text-4xl lg:text-5xl text-center"
        >
          OUR PROGRAMS
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 w-[90%] md:w-[80%] m-auto mt-10 text-center md:text-left">
        <img src="assets/images/canada_up.svg" className="w-16 md:w-20" />
        <h1
          className="text-[#23417e] text-3xl md:text-4xl lg:text-5xl relative flex items-center justify-center md:justify-start gap-5"
          style={{ fontFamily: "SFUIBold" }}
        >
          OSSD Program
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-2 right-0 w-[60%] hidden md:block"
          />
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row w-[90%] md:w-[80%] m-auto gap-10 lg:gap-20 text-[#23417e] text-base md:text-lg lg:text-xl">
        <img
          src="/assets/images/highschool/highschool1.png"
          className="w-full lg:w-[50%] object-cover rounded-xl"
        />
        <div className="flex flex-col justify-center gap-6">
          <p className="text-left">
            Oxford College of Canada offers high school courses aligned with the
            Ontario Ministry of Education curriculum, helping students meet entrance
            requirements for North American post-secondary education. Graduates
            receive the Ontario Secondary School Diploma (OSSD) after earning all
            necessary credits, including six Grade 12 credits for university
            applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#register"
              className="text-white bg-[#23417e] py-3 px-8 rounded-4xl flex items-center justify-center gap-4 sm:w-auto"
            >
              Register Now
              <div className="bg-white rounded-full p-1">
                <img src="/assets/images/arrow-up-right.svg" />
              </div>
            </a>
            <button
              className="text-[#23417e] text-lg md:text-xl flex items-center justify-center gap-3"
              style={{ fontFamily: "SFUILight" }}
              onClick={() => {
                navigate("OSSD");
              }}
            >
              <span className="border-[#23417e] border-2 rounded-full px-4 py-2">
                ▶
              </span>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 w-[90%] md:w-[80%] m-auto mt-20 text-center md:text-left">
        <img src="assets/images/canada_up.svg" className="w-16 md:w-20" />
        <h1
          className="text-[#23417e] text-3xl md:text-4xl lg:text-5xl relative flex items-center justify-center md:justify-start gap-5"
          style={{ fontFamily: "SFUIBold" }}
        >
          Elite Program
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-2 right-0 w-[60%] hidden md:block"
          />
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row-reverse w-[90%] md:w-[80%] m-auto gap-10 lg:gap-20 text-[#23417e] text-base md:text-lg lg:text-xl">
        <img
          src="/assets/images/highschool/highschool2.png"
          className="w-full lg:w-[50%] object-cover rounded-xl"
        />
        <div className="flex flex-col justify-center gap-6">
          <p className="text-left">
            Oxford College of Canada's Elite Program provides top students a secure path
            to prestigious universities worldwide, boasting a 100% success rate in
            admissions. Key features include successful university admissions like the
            University of Toronto, early planning and goal setting, regular counselling
            from top university admission officers, and official IELTS testing with
            pre-test training. Additionally, a variety of extracurricular activities
            enhance students' university application portfolios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#register"
              className="text-white bg-[#23417e] py-3 px-8 rounded-4xl flex items-center justify-center gap-4 w-full sm:w-auto"
            >
              Register Now
              <div className="bg-white rounded-full p-1">
                <img src="/assets/images/arrow-up-right.svg" />
              </div>
            </a>
            <button
              className="text-[#23417e] text-lg md:text-xl flex items-center justify-center gap-3"
              style={{ fontFamily: "SFUILight" }}
              onClick={() => {
                navigate("Elite");
              }}
            >
              <span className="border-[#23417e] border-2 rounded-full px-4 py-2">
                ▶
              </span>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 w-[90%] md:w-[80%] m-auto mt-20 text-center md:text-left">
        <img src="assets/images/canada_up.svg" className="w-16 md:w-20" />
        <h1
          className="text-[#23417e] text-3xl md:text-4xl lg:text-5xl relative flex items-center justify-center md:justify-start gap-5"
          style={{ fontFamily: "SFUIBold" }}
        >
          Art Program
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-2 right-0 w-[60%] hidden md:block"
          />
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row w-[90%] md:w-[80%] m-auto gap-10 lg:gap-20 text-[#23417e] text-base md:text-lg lg:text-xl mb-10">
        <img
          src="/assets/images/highschool/highschool3.png"
          className="w-full lg:w-[50%] object-cover rounded-xl"
        />
        <div className="flex flex-col justify-center gap-6">
          <p className="text-left">
            From art portfolio tutorials to high school level art and design courses, OCC
            art department offers customized art programs for students with unique art
            talents, preparing them to enter top art universities around the world. To
            broaden students' academic spectrum and secure a brighter future career, we
            are committed to improving their academic performance (OSSD credits,
            including credits in illustration, animation, pre-architecture and so on) and
            English communication skills (Academic English program). Students can also
            benefit from our holistic and professional support throughout their academic
            journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#register"
              className="text-white bg-[#23417e] py-3 px-8 rounded-4xl flex items-center justify-center gap-4 w-full sm:w-auto"
            >
              Register Now
              <div className="bg-white rounded-full p-1">
                <img src="/assets/images/arrow-up-right.svg" />
              </div>
            </a>
            <button
              className="text-[#23417e] text-lg md:text-xl flex items-center justify-center gap-3"
              style={{ fontFamily: "SFUILight" }}
            >
              <span className="border-[#23417e] border-2 rounded-full px-4 py-2">
                ▶
              </span>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F7Fe] py-30">
        <h1
          style={{ fontFamily: "SFUIBold" }}
          className="text-[#23417e] text-4xl mb-10"
          id="register"
        >
          Ready To Join?
        </h1>
        <RegistrationForm />
      </div>
    </div>
  );
}
