import { div, nav } from "framer-motion/client";
import RegistrationForm from "./Form";
import { useNavigate } from "react-router-dom";

export default function Highschoolprogram() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#23417e] w-full py-15">
        <h1 style={{ fontFamily: "SFUIBold" }} className="text-white text-5xl">
          OUR PROGRAMS
        </h1>
      </div>
      <div className="flex items-center gap-10 mb-30 w-[80%] m-auto mt-30">
        <img src="assets/images/canada_up.svg" />
        <h1
          className="text-[#23417e] text-5xl flex items-center justify-center gap-5 relative"
          style={{ fontFamily: "SFUIBold" }}
        >
          OSSD Program
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-4 right-0 w-[60%]"
          />
        </h1>
      </div>
      <div className="flex w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl">
        <img src="/assets/images/highschool/highschool1.png" />
        <div>
          <p>
            Oxford College of Canada offers high school courses aligned with the
            Ontario Ministry of Education curriculum, helping students meet
            entrance requirements for North American post-secondary education.
            Graduates receive the Ontario Secondary School Diploma (OSSD) after
            earning all necessary credits, including six Grade 12 credits for
            university applications.
          </p>
          <div className="mt-10 flex gap-5">
            <a
              href="#register"
              className="text-white bg-[#23417e] py-3 px-8 rounded-4xl flex gap-4 items-center justify-between"
            >
              Register Now
              <div className="bg-white rounded-full p-0.5">
                <img src="/assets/images/arrow-up-right.svg" />
              </div>
            </a>
            <button
              className="text-[#23417e] text-2xl flex gap-2 items-center"
              style={{ fontFamily: "SFUILight" }}
              onClick={() => {
                navigate("OSSD");
              }}
            >
              <span className="border-[#23417e] border-2 rounded-full px-3.5 py-2 ">
                ▶
              </span>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10 mb-30 w-[80%] m-auto mt-30">
        <img src="assets/images/canada_up.svg" />
        <h1
          className="text-[#23417e] text-5xl flex items-center justify-center gap-5 relative"
          style={{ fontFamily: "SFUIBold" }}
        >
          Elite Program
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-4 right-0 w-[60%]"
          />
        </h1>
      </div>
      <div className="flex w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl">
        <div>
          <p>
            Oxford College of Canada's Elite Program provides top students a
            secure path to prestigious universities worldwide, boasting a 100%
            success rate in admissions. Key features include successful
            university admissions like the University of Toronto, early planning
            and goal setting, regular counsellingfrom top university admission
            officers, and official IELTS testing with pre-test training.
            Additionally, a variety of extracurricular activities enhance
            students' university application portfolios.
          </p>
          <div className="mt-10 flex gap-5">
            <a
              href="#register"
              className="text-white bg-[#23417e] py-3 px-8 rounded-4xl flex gap-4 items-center justify-between"
            >
              Register Now
              <div className="bg-white rounded-full p-0.5">
                <img src="/assets/images/arrow-up-right.svg" />
              </div>
            </a>
            <button
              className="text-[#23417e] text-2xl flex gap-2 items-center"
              style={{ fontFamily: "SFUILight" }}
              onClick={() => {
                navigate("Elite");
              }}
            >
              <span className="border-[#23417e] border-2 rounded-full px-3.5 py-2 ">
                ▶
              </span>
              Learn More
            </button>
          </div>
        </div>
        <img src="/assets/images/highschool/highschool2.png" />
      </div>
      <div className="flex items-center gap-10 mb-30 w-[80%] m-auto mt-30">
        <img src="assets/images/canada_up.svg" />
        <h1
          className="text-[#23417e] text-5xl flex items-center justify-center gap-5 relative"
          style={{ fontFamily: "SFUIBold" }}
        >
          Art Program
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-4 right-0 w-[60%]"
          />
        </h1>
      </div>
      <div className="flex w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl mb-30">
        <img src="/assets/images/highschool/highschool3.png" />
        <div>
          <p>
            From art portfolio tutorials to high school level art and design
            courses, OCC art department offers customized art programs for
            students withunique art talents, preparing them to enter top art
            universities around the world. To broaden students' academic
            spectrum and secure a brighter future career, we are committed to
            improving their academic performance (OSSD credits, including
            credits in illustration, animation, pre-architecture and so on) and
            English communication skills(Academic English program). Students can
            also benefit from our holistic and professional support throughout
            their academic journey.
          </p>
          <div className="mt-10 flex gap-5">
            <a
              href="#register"
              className="text-white bg-[#23417e] py-3 px-8 rounded-4xl flex gap-4 items-center justify-between"
            >
              Register Now
              <div className="bg-white rounded-full p-0.5">
                <img src="/assets/images/arrow-up-right.svg" />
              </div>
            </a>
            <button
              className="text-[#23417e] text-2xl flex gap-2 items-center"
              style={{ fontFamily: "SFUILight" }}
            >
              <span className="border-[#23417e] border-2 rounded-full px-3.5 py-2 ">
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
