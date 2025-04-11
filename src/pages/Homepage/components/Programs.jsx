import { act, useState } from "react";
//Replace with actual programsData here
const programsData = [
  {
    name: "High School Program",
    content:
      "At the heart of our program, providing students with an opportunity to engage with Canadian customs, traditions, and way of life through interactions with local peers and host families",
    link: "/highschool",
  },
  {
    name: "Language Courses",
    content:
      "Our ESL (English as a Second Language) program is designed to enhance students’ proficiency in reading, writing, speaking, and listening, essential for success in the workplace, academia, and everyday interactions.",
    link: "/languagecenter",
  },
  {
    name: "Camp Programs",
    content:
      "International Youth Program curates diverse youth camp programs, offering students aged 8 to 17 an immersive language learning environment and the opportunity to experience the rich tapestry of cultures worldwide.",
    link: "https://internationalyouthprogram.com/",
  },
];
function Program(props) {
  return (
    <div
      className="flex items-center justify-start border-t-1 border-[#23417e] last:border-b-1 gap-10 relative overflow-hidden mb-1 py-5 max-md:px-5"
      onClick={() => {
        props.pressAction();
      }}
    >
      {/* Background container to hold background images */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          props.active ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url("/assets/images/programbg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <p
        className={`text-6xl hidden md:block ${
          props.active ? "text-[#23417e]" : "text-white"
        } w-30 text-center ml-10 transition-colors duration-500 ease-in-out`}
        style={{
          fontFamily: "SFUIMedium",
          textShadow: props.active
            ? "1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -2px 2px 0px white"
            : "1px 1px 0px #23417e, -1px -1px 0px #23417e, 1px -1px 0px #23417e, -2px 2px 0px #23417e",
        }}
      >
        0{props.index + 1}
      </p>
      <div className="text-left">
        <h2
          className={`${
            props.active ? "text-white" : "text-[#23417e]"
          } text-2xl md:text-4xl mb-5 transition-colors duration-500 ease-in-out`}
          style={{ fontFamily: "SFUIBold" }}
        >
          {props.program.name}
        </h2>
        <p
          className={`${
            props.active ? "text-white" : "text-[#23417e]"
          } text-sm md:text-lg`}
        >
          {props.program.content}
        </p>
      </div>
      <div
        className={`bg-white rounded-full p-5 mr-10 transition-opacity duration-500 ease-in-out ${
          props.active ? "opacity-100" : "opacity-0 hidden"
        }`}
        onClick={() => {
          props.linkAction();
        }}
      >
        <img
          src="/assets/images/arrow-up-right.svg"
          className="w-15 rotate-45"
        />
      </div>
    </div>
  );
}

export default function Programs() {
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <div className="w-[80%] m-auto">
      <div className="flex items-center gap-2 md:gap-10 mb-30">
        <img src="assets/images/canada_up.svg" />
        <h1
          className="text-[#23417e] text-5xl flex items-center justify-center gap-5 relative"
          style={{ fontFamily: "SFUIBold" }}
        >
          Programs
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-5"
          />
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <img
          src="/assets/images/Rectangle90.png"
          className="max-lg:max-h-150 object-contain"
        />
        <div className="grid grid-rows-3">
          {programsData.map((program, index) => {
            return (
              <Program
                program={program}
                index={index}
                active={activeIdx == index}
                pressAction={() => {
                  setActiveIdx(() => {
                    return index == activeIdx ? -1 : index;
                  });
                }}
                linkAction={() => {
                  window.open(program.link, "_blank", "noopener,noreferrer");
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
