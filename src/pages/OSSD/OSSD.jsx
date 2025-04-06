function Requirement(props) {
  return (
    <div className="group relative flex items-center justify-center">
      <img src={props.src} className="w-full" />
      <div className="absolute z-2 bottom-5 w-[90%] bg-white p-8 text-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        {Number.isInteger(props.req.value) ? (
          <p className="text-4xl flex items-center gap-3 justify-center">
            <span className="text-6xl" style={{ fontFamily: "SFUIBold" }}>
              {props.req.value}
            </span>
            {props.req.name}
          </p>
        ) : (
          <p className="text-4xl flex items-center gap-3 justify-center">
            <span className="text-4xl" style={{ fontFamily: "SFUIBold" }}>
              {props.req.value}
            </span>
          </p>
        )}
      </div>
      <div
        className="absolute z-1 bottom-0 text-left w-full text-white text-2xl h-1/2 bg-gradient-to-t from-black/80 to-transparent flex justify-center"
        style={{ fontFamily: "SFUIMedium" }}
      >
        <p className="w-[90%] m-auto absolute bottom-5">{props.req.name}</p>
      </div>
    </div>
  );
}

export default function OSSD() {
  return (
    <div>
      <div className="w-full py-15">
        <h1
          style={{ fontFamily: "SFUIBold" }}
          className="text-[#23417e] text-5xl"
        >
          OSSD Program
        </h1>
      </div>
      <div className="bg-[#23417e] py-30">
        <div className="flex w-[80%] m-auto items-center gap-10">
          <div className="text-white text-left text-xl flex flex-col gap-5">
            <p className="text-3xl mb-5" style={{ fontFamily: "SFUIBold" }}>
              Program Information
            </p>
            <p>
              <b>Program Code:</b> OSSD-P01
            </p>
            <p>
              <b>School:</b> Oxford College of Canada
            </p>
            <p>
              <b>Diploma:</b> Ontario Secondary School Diploma (OSSD)
            </p>
            <p>
              <b>Program Type:</b> High School Program
            </p>
            <p>
              <b>Duration:</b> 1 year / 4 terms (per grade level) – Maximum 3
              courses per term
            </p>
            <p>
              <b>Location:</b> Toronto Campus
            </p>
          </div>
          <img src="/assets/images/OSSD/ossd1.png" />
        </div>
      </div>
      <div className="flex items-center gap-10 mb-30 w-[80%] m-auto mt-30">
        <img src="/assets/images/canada_up.svg" />
        <h1
          className="text-[#23417e] text-5xl flex items-center justify-center gap-5 relative"
          style={{ fontFamily: "SFUIBold" }}
        >
          About OSSD
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-3 -right-5 w-[60%]"
          />
        </h1>
      </div>
      <div className="flex w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl">
        <img src="/assets/images/OSSD/flag.png" />
        <div>
          <p
            className="text-[#23417e] text-2xl mb-20"
            style={{ fontFamily: "SFUIBold" }}
          >
            Ontario Secondary School Diploma
          </p>
          <p>
            Oxford College of Canada offers high school courses aligned with the
            Ontario Ministry of Education curriculum, helping students meet
            entrance requirements for North American post-secondary education.
            Graduates receive the Ontario Secondary School Diploma (OSSD) after
            earning all necessary credits, including six Grade 12 credits for
            university applications.
          </p>
          <p>
            Our Guidance Counselor assists students in choosing universities and
            supports them through the application process, including obtaining
            Letters of Acceptance.
          </p>
          <p>
            For transfer students, please review the credit requirements for
            international students. Credit assessments based on provided
            transcripts will be conducted by the school.
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
        <img src="/assets/images/canada_up.svg" />
        <h1
          className="text-[#23417e] text-5xl flex items-center justify-center gap-5 relative"
          style={{ fontFamily: "SFUIBold" }}
        >
          OSSD Requirements
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-5 right-0 w-[70%]"
          />
        </h1>
      </div>
      <div className="flex w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl">
        <div className="w-[50%]">
          <p
            className="text-[#23417e] text-xl mb-5"
            style={{ fontFamily: "SFUIBold" }}
          >
            To qualify for the Ontario Secondary School Diploma (OSSD), students
            must：
          </p>
          <ul
            style={{ listStyle: "disc" }}
            className="ml-10 gap-5 flex flex-col "
          >
            <li>Earn 30 credits: 17 (Compulsory) + 13 (Elective) courses.</li>
            <li>
              A minimum of 40 volunteer hours is mandatory for graduation.
            </li>
            <li>
              Students are required to take the Ontario Secondary School
              Literacy Test (EQAO Test). If students fail the test, they have
              the option to retake it in the following year or to enroll in the
              Ontario Secondary School Literacy Course (OSSLC).
            </li>
          </ul>
          <div className="mt-10 flex gap-5">
            <a
              href="#register"
              className="text-white bg-[#23417e] py-3 px-8 rounded-4xl flex gap-4 items-center justify-between"
            >
              Learn More about OSSD Requirement
              <div className="bg-white rounded-full p-0.5">
                <img src="/assets/images/arrow-up-right.svg" />
              </div>
            </a>
          </div>
        </div>
        <div className="overflow-x-auto scroll-snap-x snap-mandatory w-[37%]">
          <div className="flex w-full gap-5">
            <div className="w-full flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/OSSD/frame1.png"
                req={{ name: "Compulsory Credits", value: 17 }}
              />
            </div>
            <div className="w-full flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/OSSD/frame2.png"
                req={{ name: "Volunteer Hours", value: 40 }}
              />
            </div>
            <div className="w-full flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/OSSD/frame3.png"
                req={{ name: "Optional (Elective) Credits", value: 13 }}
              />
            </div>
            <div className="w-full flex-shrink-0 snap-center">
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
