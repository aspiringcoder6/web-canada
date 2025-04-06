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
    <section className="py-16 px-6 md:px-60 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2">
            <img src="/assets/images/canada_up.svg" alt="Canada" className="w-10 h-10" />
            <h2 className="text-[48px] font-bold text-[#2b4170] relative inline-block">
              Language Programs
              <img src="/assets/images/orangedash.svg" className="absolute left-37 w-2/3" />
            </h2>
          </div>

          <ul className="mt-6 space-y-4 text-[28px]">
            {programs.map((program, index) => (
              <li key={index} className="flex items-center gap-9 text-lg">
                <img src="/assets/images/language3.svg" alt="tick" className="w-9 h-9" />
                <span className={program.highlight ? "text-[#d76d33]" : "text-[#2b4170]"}>
                  {program.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full max-w-sm md:max-w-md">
          <div className="rounded-full overflow-hidden relative z-10">
            <img src="/assets/images/language2.svg" alt="Students" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
