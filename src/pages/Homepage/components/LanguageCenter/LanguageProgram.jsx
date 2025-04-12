import React from "react";

const programs = [
  { name: "General English Program", highlight: false },
  { name: "IELTS Preparation Program", highlight: true },
  { name: "English For Health Care", highlight: false },
  { name: "University Pathway Preparation", highlight: true },
  { name: "Online: Focus On Essay Writing", highlight: false },
];

export default function LanguagePrograms() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-60 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:max-w-xl">
          <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <img src="/assets/images/canada_up.svg" alt="Canada" className="w-10 h-10" />
            <h2 className="text-3xl md:text-4xl lg:text-xl xl:text-3xl font-bold text-[#2b4170] relative inline-block leading-tight text-center lg:text-left">
              Language Programs
              <img
                src="/assets/images/orangedash.svg"
                className="absolute left-1/2 transform -translate-x-1/2 lg:left-36 lg:translate-x-0 bottom-[-10px] w-2/3"
                alt="Dash underline"
              />
            </h2>
          </div>

          <ul className="mt-6 space-y-4 ml-10 sm:ml-47 md:ml-47 lg:ml-0 flex flex-col items-start text-left">
            {programs.map((program, index) => (
              <li
                key={index}
                className="flex items-center gap-4 md:gap-6 text-base md:text-lg lg:text-xl"
              >
                <img src="/assets/images/language3.svg" alt="tick" className="w-7 h-7 md:w-9 md:h-9" />
                <span className={program.highlight ? "text-[#d76d33]" : "text-[#2b4170]"}>
                  {program.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md relative">
          <div className="rounded-full overflow-hidden">
            <img
              src="/assets/images/language2.svg"
              alt="Students"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>

  );
}
