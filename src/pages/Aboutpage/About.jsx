export default function About() {
  return (
    <div>
      <div className="w-[80%] m-auto mt-30 text-[#23417e]">
        {/* Layout for large screens */}
        <div className="hidden lg:flex flex-row items-start justify-between">
          <div className="w-[50%]">
            <div className="flex items-center gap-10 mb-10 m-auto">
              <img src="assets/images/canada_up.svg" />
              <h1
                className="text-[#23417e] text-4xl lg:text-5xl flex items-center justify-center gap-5 relative"
                style={{ fontFamily: "SFUIBold" }}
              >
                About OCC
                <img
                  src="/assets/images/orangedash.svg"
                  className="absolute -bottom-4 right-0 w-[100%]"
                />
              </h1>
            </div>
            <div className="text-left text-[#23417e] text-0.5xl">
              <p>
                Located in the heart of Toronto, we are a private
                international high school, which prepares students for fast
                entrance into Canadian and American universities and colleges.
                Certified by the Ontario Ministry of Education (Oxford College
                of Canada registration number: (667315) and recognized by all
                North American universities and colleges, we have gained a fine
                reputation in providing secondary school credit courses (Grade 9
                - Grade 12) for overseas and local students. All courses offered
                by our school have been developed in accordance with the
                requirements of the Ontario Ministry of Education.
              </p>
              <br />
              <p>
                Oxford College of Canada has a rich history of providing
                high-quality, in-person and online education. With a commitment
                to academic excellence and a nurturing learning environment,
                Oxford College of Canada has been a cornerstone of education,
                preparing students for success in a rapidly evolving world.
              </p>
              <br />
              <p>
                Welcome to the future of education – a future where tradition
                meets innovation, and where the pursuit of knowledge knows no
                bounds.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <img src="/assets/images/about/about1.png" />
            <img src="/assets/images/about/about2.png" className="mt-20" />
            <img src="/assets/images/about/about3.png" />
          </div>
        </div>

        {/* Layout for small screens */}
        <div className="flex flex-col gap-10 lg:hidden">
          <div className="flex items-center gap-10 mb-10 m-auto">
            <img src="assets/images/canada_up.svg" />
            <h1
              className="text-[#23417e] text-4xl lg:text-5xl flex items-center justify-center gap-5 relative"
              style={{ fontFamily: "SFUIBold" }}
            >
              About OCC
              <img
                src="/assets/images/orangedash.svg"
                className="absolute -bottom-4 right-0 w-[100%]"
              />
            </h1>
          </div>
          {/* Section 1 */}
          <div>
            <img
              src="/assets/images/about/about1lg.png"
              className="w-full mb-3 max-lg:max-h-100 object-contain"
            />
            <p>
              Located in the heart of Toronto, we are a private
              international high school, which prepares students for fast
              entrance into Canadian and American universities and colleges.
              Certified by the Ontario Ministry of Education (Oxford College of
              Canada registration number: (667315) and recognized by all North
              American universities and colleges, we have gained a fine
              reputation in providing secondary school credit courses (Grade 9 -
              Grade 12) for overseas and local students. All courses offered by
              our school have been developed in accordance with the requirements
              of the Ontario Ministry of Education.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <img
              src="/assets/images/about/about2lg.png"
              className="w-full mb-3 max-lg:max-h-150 object-contain"
            />
            <p>
              Oxford College of Canada has a rich history of providing
              high-quality, in-person and online education. With a commitment to
              academic excellence and a nurturing learning environment, Oxford
              College of Canada has been a cornerstone of education, preparing
              students for success in a rapidly evolving world.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <img
              src="/assets/images/about/about3lg.png"
              className="w-full mb-3 max-lg:max-h-150 object-contain"
            />
            <p>
              Welcome to the future of education – a future where tradition
              meets innovation, and where the pursuit of knowledge knows no
              bounds.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10 mb-30 w-[80%] m-auto mt-30">
        <img src="assets/images/canada_up.svg" />
        <h1
          className="text-[#23417e] text-4xl lg:text-5xl flex items-center justify-center gap-5 relative"
          style={{ fontFamily: "SFUIBold" }}
        >
          Our Campus
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-4 right-0 w-[100%]"
          />
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-[80%] m-auto gap-20 text-left text-[#23417e] text-0.5xl mb-30">
        <div>
          <p>
            Nestled within the vibrant North York area of Toronto, our
            institution offers students an enriching experience in one of
            Canada's most diverse and culturally rich cities. Toronto, known for
            its welcoming atmosphere and multiculturalism, provides students
            with a unique opportunity to immerse themselves in a tapestry of
            cultures, languages, and traditions from around the world.
          </p>
          <br />
          <p>
            Studying in Toronto not only offers access to world-class education
            but also provides a gateway to Canadian studies and experiences.
            Students have the opportunity to explore the country's rich history,
            diverse landscapes, and vibrant cities, gaining a deeper
            understanding of Canadian culture and society.
          </p>
          <br />
          <p>
            Moreover, our school's strategic location ensures that students have
            easy access to transportation options, allowing for seamless
            exploration of the city and beyond. With excellent connectivity
            within Toronto, students can easily navigate their way to various
            cultural landmarks, museums, parks, and entertainment venues,
            enhancing their overall experience.
          </p>
          <br />
          <p>
            In essence, studying in Toronto offers international students a
            transformative journey filled with diverse experiences, academic
            growth, and cultural exploration, laying the foundation for a
            rewarding and unforgettable educational experience in Canada.
          </p>
        </div>
        <img src="/assets/images/about/map.png" />
      </div>
      <div className="bg-[#f0f7fe] w-full py-20">
        <div className="flex max-md:flex-col w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl">
          <img
            src="/assets/images/about/about4.png"
            className="hidden md:block w-[50%]"
          />
          <div>
            <p style={{ fontFamily: "SFUIBold" }} className="text-5xl my-15">
              Our Mission
            </p>
            <p>
              Oxford College of Canada envisions a world where every student is
              empowered to lead and inspire positive change, cultivating global
              citizens of integrity, empathy, and excellence
            </p>
          </div>
          <img
            src="/assets/images/about/about4.png"
            className="block md:hidden w-full"
          />
        </div>
      </div>
      <div className="w-full py-20 mb-30">
        <div className="flex max-md:flex-col w-[80%] m-auto gap-20 text-left text-[#23417e] text-xl">
          <div>
            <p style={{ fontFamily: "SFUIBold" }} className="text-5xl my-15">
              Our Vision
            </p>
            <p>
              Oxford College of Canada provides transformative education,
              promoting strong academics, critical thinking, and cultural
              understanding. We foster growth through personalized learning and
              a diverse community, shaping compassionate leaders who embrace
              diversity and excellence.
            </p>
          </div>
          <img
            src="/assets/images/about/about5.png"
            className="w-full md:w-[50%]"
          />
        </div>
      </div>
    </div>
  );
}
