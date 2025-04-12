function Requirement(props) {
  return (
    <div className="group relative flex items-center justify-center w-full max-w-[300px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[320px]">
      <img src={props.src} className="w-full object-cover rounded-xl" alt={props.req.name} />

      <div className="absolute z-20 bottom-4 w-[90%] bg-white p-6 sm:p-4 text-center opacity-0 transition-opacity duration-700 group-hover:opacity-100 rounded-xl shadow-lg">
        {Number.isInteger(props.req.value) ? (
          <p className="text-3xl sm:text-2xl flex items-center gap-3 justify-center">
            <span
              className="text-5xl sm:text-4xl"
              style={{ fontFamily: "SFUIBold" }}
            >
              {props.req.value}
            </span>
            {props.req.name}
          </p>
        ) : (
          <p
            className="text-3xl sm:text-2xl"
            style={{ fontFamily: "SFUIBold" }}
          >
            {props.req.value}
          </p>
        )}
      </div>

      <div
        className="absolute z-10 bottom-0 text-left w-full text-white text-xl sm:text-lg h-1/2 bg-gradient-to-t from-black/80 to-transparent flex justify-center rounded-b-xl"
        style={{ fontFamily: "SFUIMedium" }}
      >
        <p className="w-[90%] m-auto absolute bottom-4">{props.req.name}</p>
      </div>
    </div>
  );
}


export default function OSSD() {
  return (
    <div>
      <div className="w-full py-16 px-4">
        <h1
          style={{ fontFamily: "SFUIBold" }}
          className="text-[#23417e] text-4xl md:text-5xl text-center"
        >
          OSSD Program
        </h1>
      </div>

      <div className="bg-[#23417e] py-16 px-4">
        <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-auto items-center gap-10">
          <div className="text-white text-center md:text-left text-base md:text-xl flex flex-col gap-4">
            <p className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "SFUIBold" }}>
              Program Information
            </p>
            <p className="text-left ml-4"><b>Program Code:</b> OSSD-P01</p>
            <p className="text-left ml-4"><b>School:</b> Oxford College of Canada</p>
            <p className="text-left ml-4"><b>Diploma:</b> Ontario Secondary School Diploma (OSSD)</p>
            <p className="text-left ml-4"><b>Program Type:</b> High School Program</p>
            <p className="text-left ml-4"><b>Duration:</b> 1 year / 4 terms (per grade level) – Maximum 3 courses per term</p>
            <p className="text-left ml-4"><b>Location:</b> Toronto Campus</p>
          </div>
          <img
            src="/assets/images/OSSD/ossd1.png"
            alt="OSSD Program"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-16 w-full max-w-screen-lg mx-auto mt-10 px-4">
        <img
          src="/assets/images/canada_up.svg"
          alt="Canada Up"
          className="w-20 md:w-auto"
        />
        <h1
          className="text-[#23417e] text-3xl md:text-5xl flex items-center justify-center gap-3 md:gap-5 relative text-center md:text-left"
          style={{ fontFamily: "SFUIBold" }}
        >
          About OSSD
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-2 md:-bottom-3 -right-2 md:-right-5 w-1/2 md:w-[60%]"
            alt="Dash"
          />
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-auto gap-10 md:gap-20 px-4 text-[#23417e] text-base md:text-xl">
        <img
          src="/assets/images/OSSD/flag.png"
          alt="OSSD Flag"
          className="w-full md:w-1/2 object-contain"
        />
        <div className="flex flex-col gap-5 text-left">
          <p
            className="text-[#23417e] text-xl text-center md:text-2xl mb-4"
            style={{ fontFamily: "SFUIBold" }}
          >
            Ontario Secondary School Diploma
          </p>
          <p>
            Oxford College of Canada offers high school courses aligned with the
            Ontario Ministry of Education curriculum, helping students meet entrance
            requirements for North American post-secondary education. Graduates
            receive the Ontario Secondary School Diploma (OSSD) after earning all
            necessary credits, including six Grade 12 credits for university
            applications.
          </p>
          <p>
            Our Guidance Counselor assists students in choosing universities and
            supports them through the application process, including obtaining
            Letters of Acceptance.
          </p>
          <p>
            For transfer students, please review the credit requirements for
            international students. Credit assessments based on provided transcripts
            will be conducted by the school.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#register"
              className="text-white bg-[#23417e] py-3 px-6 rounded-3xl flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Register Now
              <div className="bg-white rounded-full p-1">
                <img src="/assets/images/arrow-up-right.svg" alt="arrow" />
              </div>
            </a>
            <button
              className="text-[#23417e] text-lg md:text-2xl flex gap-2 items-center justify-center"
              style={{ fontFamily: "SFUILight" }}
              onClick={() => {
                navigate("OSSD");
              }}
            >
              <span className="border-[#23417e] border-2 rounded-full px-3 py-1.5">
                ▶
              </span>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 lg:mb-30 md:mb-20 w-[80%] m-auto mt-30 px-4">
        <img
          src="/assets/images/canada_up.svg"
          alt="Canada"
          className="w-16 md:w-auto"
        />
        <h1
          className="text-[#23417e] text-3xl md:text-5xl flex items-center justify-center gap-3 md:gap-5 relative text-center md:text-left"
          style={{ fontFamily: "SFUIBold" }}
        >
          OSSD Requirements
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-2 md:-bottom-5 right-0 w-1/2 md:w-[70%]"
            alt="Dash"
          />
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row w-[80%] m-auto gap-10 lg:gap-20 text-left text-[#23417e] text-base md:text-xl">
        <div className="w-full lg:w-1/2">
          <p
            className="text-[#23417e] text-lg md:text-xl mb-5"
            style={{ fontFamily: "SFUIBold" }}
          >
            To qualify for the Ontario Secondary School Diploma (OSSD), students must:
          </p>
          <ul className="ml-6 flex flex-col gap-3 list-disc">
            <li>Earn 30 credits: 17 (Compulsory) + 13 (Elective) courses.</li>
            <li>A minimum of 40 volunteer hours is mandatory for graduation.</li>
            <li>
              Students are required to take the Ontario Secondary School Literacy
              Test (EQAO Test). If students fail the test, they can retake it the
              following year or enroll in the Ontario Secondary School Literacy
              Course (OSSLC).
            </li>
          </ul>
          <div className="mt-10 flex">
            <a
              href="#register"
              className="text-white bg-[#23417e] py-3 px-8 rounded-4xl flex gap-3 items-center"
            >
              Learn More about OSSD Requirement
              <div className="bg-white rounded-full p-1">
                <img src="/assets/images/arrow-up-right.svg" alt="arrow" />
              </div>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[37%] overflow-x-auto scroll-snap-x snap-mandatory">
          <div className="flex w-full gap-5">
            <div className="min-w-[250px] flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/OSSD/frame1.png"
                req={{ name: "Compulsory Credits", value: 17 }}
              />
            </div>
            <div className="min-w-[250px] flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/OSSD/frame2.png"
                req={{ name: "Volunteer Hours", value: 40 }}
              />
            </div>
            <div className="min-w-[250px] flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/OSSD/frame3.png"
                req={{ name: "Optional (Elective) Credits", value: 13 }}
              />
            </div>
            <div className="min-w-[250px] flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/OSSD/frame1.png"
                req={{ name: "Volunteer Hours", value: "Pass OSSLT" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F7Fe] py-30">
        <h1
          style={{ fontFamily: "SFUIBold" }}
          className="text-[#23417e] text-4xl mb-10"
          id="register"
        >
          Plan For university/college
        </h1>
        <p className="text-gray-500 mb-10 w-[80%] m-auto text-xl">
          Our education specialists will help student with their
          university/college study plan from the very beginning. Set academic
          goals, stay on the right track, and be successful. For those students
          who have completed a certain degree of high school education overseas
          and want to transfer to our school, please find a summary of the
          credits that international students are required to complete in our
          school (Detailed information will be provided by the school after
          verifying the transcript that provided by students).
        </p>
        <img src="/assets/images/OSSD/table.png" className="m-auto" />
      </div>
      <div className="bg-white py-30">
        <img src="/assets/images/OSSD/chart.png" className="m-auto" />
      </div>
    </div>
  );
}
