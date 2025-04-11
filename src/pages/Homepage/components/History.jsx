const milestonesData = [
  {
    imgSrc: "assets/images/milestones/milestone1.png",
    content:
      "Landscaping in a beautiful neighborhood of North York with accessible ways to the subway, main streets, and highways for both walking and driving options.",
  },
  {
    imgSrc: "assets/images/milestones/milestone2.png",
    content:
      "We offer a solid academic experience to our students. Our learning environment is defined by respectful students and caring qualified teachers.",
  },
  {
    imgSrc: "assets/images/milestones/milestone3.png",
    content:
      "Our admission rates to post-secondary academic institutions have been high in the past years and our students achieve great success after graduating from Oxford.",
  },
  {
    imgSrc: "assets/images/milestones/milestone4.png",
    content:
      "Our small class sizes, ranging from 10-12 for language classes to about 20 for university preparatory classes, enable personalized attention and increased communication time.",
  },
  {
    imgSrc: "assets/images/milestones/milestone5.png",
    content:
      "Our school provides excellent support for university-bound students in a welcoming setting, including recruitment teams, airport pickups, accommodation services, and partnerships with Canadian organizations.",
  },
  {
    imgSrc: "assets/images/milestones/milestone6.png",
    content:
      "As an official IELTS test center authorized by IDP, we have enjoyed a partnership exceeding a decade, earning the complete trust of IDP thanks to our superior location and high credibility. ",
  },
];
function Milestone(props) {
  return (
    <div className="group relative flex items-center justify-center w-[80%] md:w-full">
      <img src={props.milestone.imgSrc} />
      <div className="absolute z-2 bottom-5 w-[90%] bg-white p-5 text-left opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        <h2
          className="text-[#23417e] text-2xl flex items-center gap-2"
          style={{ fontFamily: "SFUIBold" }}
        >
          Milestone {props.index}
          <div className="bg-[#23417e] rounded-full p-0.5">
            <img src="/assets/images/arrow-up-right-white.svg" />
          </div>
        </h2>
        <p>{props.milestone.content}</p>
      </div>
      <div
        className="absolute z-1 bottom-0 text-left w-full text-white text-2xl h-1/2 bg-gradient-to-t from-black/80 to-transparent flex justify-center"
        style={{ fontFamily: "SFUIMedium" }}
      >
        <p className="w-[90%] m-auto absolute bottom-5">
          Milestone {props.index}
        </p>
      </div>
    </div>
  );
}
function Milestones() {
  return (
    <div className="overflow-x-scroll scrollbar-hide mt-20">
      <div className="flex w-max gap-7 px-[12%]">
        {milestonesData.map((milestone, index) => {
          return <Milestone milestone={milestone} index={index + 1} />;
        })}
      </div>
    </div>
  );
}
export default function History() {
  return (
    <div className="py-30 bg-white z-1">
      <h1
        className="text-[#23417e] text-4xl md:text-5xl flex items-center justify-center gap-5 relative w-fit m-auto"
        style={{ fontFamily: "SFUIBold" }}
      >
        Our School History
        <img
          src="/assets/images/orangedash.svg"
          className="absolute -bottom-5 right-7"
        />
      </h1>
      <p
        className="w-[80%] m-auto text-[#23417e] mt-30 text-xl md:text-2xl"
        style={{ fontFamily: "SFUILight" }}
      >
        Located in the heart of Toronto, we are a private international high
        school, which prepares students for fast entrance into Canadian and
        American universities and colleges. Oxford College of Canada has been a
        cornerstone of education. preparing students for success in a rapidly
        evolving world.
      </p>
      <Milestones />
    </div>
  );
}
