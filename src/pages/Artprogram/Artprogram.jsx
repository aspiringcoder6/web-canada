function Requirement(props) {
  return (
    <div className="group relative flex items-center justify-center">
      <img src={props.src} className="w-full" />
      {props.req && (
        <>
          <div className="absolute z-2 bottom-5 w-[90%] bg-white p-8 text-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <p
              className="text-2xl text-left"
              style={{ fontFamily: "SFUIBold" }}
            >
              {props.req.name}
            </p>
            <ul className="text-lg list-disc text-gray-500 text-left ml-7 mt-3">
              {props.req.list.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div
            className="absolute z-1 bottom-0 text-left w-full text-white text-2xl h-1/2 bg-gradient-to-t from-black/80 to-transparent flex justify-center"
            style={{ fontFamily: "SFUIMedium" }}
          >
            <p
              className="w-[90%] m-auto absolute bottom-5 text-2xl"
              style={{ fontFamily: "SFUIBold" }}
            >
              {props.req.name}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function Artprogram() {
  return (
    <div>
      <div className="w-full py-10 lg:py-15">
        <h1
          style={{ fontFamily: "SFUIBold" }}
          className="text-[#23417e] text-5xl"
        >
          ART PROGRAM
        </h1>
      </div>
      <div className="bg-[#23417e] py-30">
        <div className="flex flex-col lg:flex-row w-[80%] m-auto items-center gap-10">
          <div className="text-white text-left text-xl flex flex-col gap-5">
            <p className="text-3xl mb-5" style={{ fontFamily: "SFUIBold" }}>
              ART PROGRAM INFORMATION
            </p>
            <p>
              <b>Program Code:</b> ART-P01
            </p>
            <p>
              <b>School:</b> Oxford College of Canada
            </p>
            <p>
              <b>Diploma:</b> Ontario Secondary School Diploma (OSSD)
            </p>
            <p>
              <b>Program Type:</b> High School Program with a Focus on Arts and
              Design
            </p>
            <p>
              <b>Target Audience:</b> Grade 9–12 students passionate about the
              arts
            </p>
            <p>
              <b>Duration:</b> 1–3 years, depending on academic pathway
            </p>
            <p>
              <b>Intake:</b> January, May, September
            </p>
            <p>
              <b>Location:</b> Toronto Campus
            </p>
          </div>
          <img src="/assets/images/Art/art.png" className="max-w-[100%]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full md:w-[80%] mx-auto mt-10 md:mt-30 px-4">
        <img src="/assets/images/canada_up.svg" className="h-[100%] w-auto" />
        <h1
          className="text-[#23417e] text-3xl md:text-5xl flex items-center justify-center gap-2 md:gap-5 relative text-center md:text-left"
          style={{ fontFamily: "SFUIBold" }}
        >
          <span className="relative inline-block">
            Visual Arts
            <img
              src="/assets/images/orangedash.svg"
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 w-[100%]"
            />
          </span>
          Program
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl py-30">
        <img src="/assets/images/Art/art2.png" />
        <div>
          <p
            className="text-[#23417e] text-3xl mb-10"
            style={{ fontFamily: "SFUIBold" }}
          >
            About this Program
          </p>
          <p>
            From art portfolio tutorials to high school level art and design
            courses, OCC art department offers customized art programs for
            students with unique art talents, preparing them to enter top art
            universities around the world. To broaden students' academic
            spectrum and secure a brighter future career, we are committed to
            improving their academic performance (OSSD credits, including
            credits in illustration, animation, pre-architecture and so on) and
            English communication skills (Academic English program).
          </p>
          <p>
            Students can also benefit from our holistic and professional support
            throughout their academic journey.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl py-30">
        <div className="lg:w-[60%]">
          <p
            className="text-[#23417e] text-3xl mb-10"
            style={{ fontFamily: "SFUIBold" }}
          >
            Falcuty Of Art
          </p>
          <p>
            All our instructors are from the art and design industries with more
            than five years of experience. They familiar with top art school
            admission requirements and assessment criteria, covering the
            following fields:
          </p>
          <ul style={{ listStyleType: "disc" }} className="ml-10 my-5">
            <li>architecture and interior design</li>
            <li>illustration</li>
            <li>animation</li>
            <li>architecture</li>
            <li>digital media</li>
            <li>fashion design</li>
            <li>interactive innovation</li>
            <li>communication design</li>
          </ul>
          <p>
            They will provide students with precise course planning and
            meticulous admission preparation support.
          </p>
        </div>
        <div className="overflow-x-auto scroll-snap-x snap-mandatory lg:w-[30%]">
          <div className="flex w-full gap-5">
            <div className="w-full flex-shrink-0 snap-center">
              <Requirement src="/assets/images/Art/visual0.png" />
            </div>
            <div className="w-full flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/Art/visual1.png"
                req={{
                  name: "Digital Media",
                  list: ["Film", "Animation", "Digital Media", "Game Design"],
                }}
              />
            </div>
            <div className="w-full flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/Art/visual2.png"
                req={{
                  name: "Fine Arts & Illustration",
                  list: [
                    "Illustration",
                    "Fine arts",
                    "Sculpture",
                    "Photography",
                  ],
                }}
              />
            </div>
            <div className="w-full flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/Art/visual3.png"
                req={{
                  name: "Architecture & Interior Design",
                  list: [
                    "Architecture design",
                    "Interior design",
                    "Landscape design",
                    "Urban design",
                  ],
                }}
              />
            </div>
            <div className="w-full flex-shrink-0 snap-center">
              <Requirement
                src="/assets/images/Art/visual4.png"
                req={{
                  name: "Fashion Design",
                  list: [
                    "Fashion design",
                    "Jewelry design",
                    "Textile design",
                    "Fashion management",
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f0f7fe] py-20 h-fit">
        <div className="w-[80%] m-auto">
          <p
            className="text-[#23417e] text-3xl mb-10 text-left"
            style={{ fontFamily: "SFUIBold" }}
          >
            How It Works
          </p>
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 text-left gap-20 ">
            <div>
              <img src="/assets/images/Art/how1.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                Demand Assessment
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                Before the course starts, the teaching team will communicate
                with students through online interviews to understand the
                students' artistic foundation, goals and areas of interest, in
                order to prepare for course planning. After the evaluation, the
                course duration will be planned in detail based on the students'
                artistic foundation and the major they choose to apply for, and
                students will be provided with accurate quotes and class
                schedules as a reference.
              </p>
            </div>
            <div>
              <img src="/assets/images/Art/how2.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                Course Planning
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                We will customize personalized study plan based on the students'
                applied majors. English proficiency, and students’ demands,
                covering high school course planning, portfolio training, and
                English proficiency improvement.
              </p>
            </div>
            <div>
              <img src="/assets/images/Art/how3.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                Portfolio Optimization and Improvement
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                Instructor will evaluate and analyze students' works and make
                suggestions for improvement. Starting from composition, color
                matching, detail processing and other aspects, we will help
                students improve their works and enhance the overall quality and
                visual effects of their portfolio.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 h-fit">
        <div className="w-[80%] m-auto">
          <p
            className="text-[#23417e] text-3xl mb-10 text-left"
            style={{ fontFamily: "SFUIBold" }}
          >
            Why Us
          </p>
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 text-left gap-20 ">
            <div>
              <img src="/assets/images/Art/why1.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                Full Tracking Service
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                Provide students with full tracking service from the beginning
                of the course to the completion of the portfolio. Communicate
                with students regularly to understand their learning progress
                and problems encountered, adjust the tutoring plan in timely
                manner, and ensure that students successfully complete their
                portfolios.
              </p>
            </div>
            <div>
              <img src="/assets/images/Art/why2.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                Resource Support
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                School has maintained long-term and close cooperative relations
                with many famous art schools. Our instructors are full of
                experience in field of art and they familiar with the admission
                standards and portfolio requirements of each school. School will
                invite school admissions representatives to the school regularly
                for seminars and conduct the chances for students to do
                one-on-one admissions consultation. Our experienced team of
                teachers can help students pre screen their portfolios to ensure
                the admission process. At the same time, the school could
                provide career planning services such as resume rewriting and
                mock interviews for graduating students.
              </p>
            </div>
            <div>
              <img src="/assets/images/Art/why3.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                Application Guidance
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                Provide application guidance, including adviceand help in school
                selection, application process, and document preparation
                (*documents writing will be quoted after the application is
                completed), to ensure that the student's application process is
                smooth and students get their desired admission letter.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 h-fit">
        <div className="w-[80%] m-auto">
          <p
            className="text-[#23417e] text-3xl mb-10 text-left"
            style={{ fontFamily: "SFUIBold" }}
          >
            Program Package
          </p>
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 text-left gap-20 w-[95%] m-auto">
            <ul className="list-disc text-gray-500">
              <li>
                One-year Canadian high school course tuition fee (8 courses)
              </li>
              <li>University/college art preparatory courses</li>
              <li>One-on-one academic planning</li>
              <li>
                One-on-one university application consulting service (Excluding
                copywriting fees)
              </li>
              <li>One-on-one portfolio guidance and background improvement</li>
            </ul>
            <ul className="list-disc text-gray-500">
              <li>
                G11 Art Preparatory Class has at least three art classes per
                week, each class lasts three hours
              </li>
              <li>Airport pick-up service</li>
              <li>Student visa service in Canada</li>
              <li>Off-campus activities</li>
              <li>Emergency medical service</li>
              <li>Legal aid</li>
              <li>Basic support for daily life </li>
            </ul>
            <ul className="list-disc text-gray-500">
              <li>Volunteer Hour assistance (high school diploma required)</li>
              <li>After-school academic tutoring</li>
              <li>Student psychological counseling</li>
              <li>Future career planning</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 h-fit">
        <div className="w-[80%] m-auto">
          <div className="flex flex-col items-center lg:flex-row m-auto gap-20 text-left text-[#23417e] text-xl py-30">
            <div>
              <p
                className="text-[#23417e] text-3xl mb-10"
                style={{ fontFamily: "SFUIBold" }}
              >
                About this Program
              </p>
              <ul className="list-disc text-gray-500 ml-10 text-lg flex flex-col gap-3">
                <li>
                  Complete and submit the application form with supporting
                  documents
                </li>
                <li>Pay registration fee</li>
                <li>Book and attend an admission interview</li>
                <li>
                  Approved applicants will receive an offer letter with tuition
                  payment instruction
                </li>
                <li>
                  Make payments for tuition and other fees stated on the offer
                  letter(It may take 4-5 business days to process the payment)
                </li>
                <li>
                  Upon receiving the payment, we will issue a letter of
                  acceptance tosupport your study permit application
                </li>
                <li>Meet our counsellor to get ready for your arrival</li>
                <li>Entrance test and plan courses of study</li>
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
            <img src="/assets/images/Art/about1.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full md:w-[80%] mx-auto mt-10 md:mt-30 px-4">
        <img src="/assets/images/canada_up.svg" className="h-[100%] w-auto" />
        <h1
          className="text-[#23417e] text-3xl md:text-5xl flex items-center justify-center gap-2 md:gap-5 relative text-center md:text-left"
          style={{ fontFamily: "SFUIBold" }}
        >
          <span className="relative inline-block">
            Music
            <img
              src="/assets/images/orangedash.svg"
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 w-[100%]"
            />
          </span>
          Program
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl py-30">
        <img src="/assets/images/Art/art3.png" />
        <div>
          <p
            className="text-[#23417e] text-3xl mb-10"
            style={{ fontFamily: "SFUIBold" }}
          >
            About this Program
          </p>
          <p>
            Our team of experienced music teachers teaches Music Stream and
            covers a variety of popular projects such as piano, guitar, vocal
            music, composition, orchestration, etc. We will personalize teaching
            methods and customize learning plans according to students'
            foundation and goals. From music portfolio guidance to professional
            studio portfolio recording to academic planning and customization of
            G12 courses that match university admission requirements, students
            could benefit from our program and better prepare themselves for
            entering the world's top music universities.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl py-30">
        <div>
          <p
            className="text-[#23417e] text-3xl mb-10"
            style={{ fontFamily: "SFUIBold" }}
          >
            Faculty of music
          </p>
          <p>
            Our teacher team is composed of world-class top professors from home
            and abroad. For example, in- service professors from prestigious
            schools such as erklee College of Music, The Curtis Institute of
            Music, and the Manhattan School of Music will conduct one-on-one
            courses for students, providing them with international and
            professional music guidance and broadening their horizons and ways
            of thinking.
          </p>
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
        <img src="/assets/images/Art/art4.png" />
      </div>
      <div className="bg-[#f0f7fe] py-20 h-fit">
        <div className="w-[80%] m-auto">
          <p
            className="text-[#23417e] text-3xl mb-10 text-left"
            style={{ fontFamily: "SFUIBold" }}
          >
            How It Works
          </p>
          <div className="grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 text-left gap-20 ">
            <div>
              <img src="/assets/images/Art/how4.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                Preliminary Evaluation
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                Based on the students' music experiences, performances or
                singing videos, our teacher team will evaluate their level and
                customize a unique learning plan.
              </p>
            </div>
            <div>
              <img src="/assets/images/Art/how5.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                1v1 Music Course and Portfolio Preparation
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                According to the requirements of the institutions and majors
                that students apply to, our teacher will help them tailor the
                repertoire and portfolio style and clarify the portfolio's
                overall direction and key points. We will also combine students'
                goals with the teacher team's suggestions to provide one-on-one
                guidance and help students improve their expressiveness.
              </p>
            </div>
            <div>
              <img src="/assets/images/Art/how6.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                Mock Recording
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                Simulate the real recording environment toallow students to
                adapt in advance. The instructor will make suggestions for
                improvement based on the recording effect and optimize the
                details.
              </p>
            </div>
            <div>
              <img src="/assets/images/Art/how7.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                Studio Recording
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                In the professional recording studio, students will use
                high-quality recording equipment with the full guidance of
                experienced instructors to complete their portfolio recording,
                which could ensure precise and accurate sound quality.
                Meanwhile, our teacher team could also help to conduct
                post-processing on the recorded audio or video, such as
                mastering, mixing optimization, etc., to make the sound effects
                of the work perfect and reach professional standards.
              </p>
            </div>
            <div>
              <img src="/assets/images/Art/how8.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                Finished Portfolio Review
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                Our teacher team will help students review and organize their
                portfolios, focusing on everything from audio quality to
                artistic expression to ensure the high-quality presentation of
                the works.
              </p>
            </div>
            <div>
              <img src="/assets/images/Art/how9.png" />
              <p
                className="text-[#23417e] text-2xl my-5"
                style={{ fontFamily: "SFUIBold" }}
              >
                University Application Consulting
              </p>
              <p className="text-gray-500" style={{ fontFamily: "SFUINormal" }}>
                Provide application consult for students, including school
                selection, application material preparation, document writing,
                etc., to ensure the integrity and professionalism of the
                application materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
