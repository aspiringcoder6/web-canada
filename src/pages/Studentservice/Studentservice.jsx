import Slidepicture from "./slidepicture";

export default function Studentservice() {
  return (
    <div>
      <div className="flex items-center gap-4 md:gap-10 my-20 md:my-30 w-[80%] m-auto">
        <img src="assets/images/canada_up.svg" className="w-[3rem] md:w-[6rem]" />
        <h1
          className="text-[#23417e] text-3xl md:text-5xl flex items-center justify-center gap-5 relative"
          style={{ fontFamily: "SFUIBold" }}
        >
          Our Services
          <img
            src="/assets/images/orangedash.svg"
            className="absolute -bottom-4 right-0 w-[60%]"
          />
        </h1>
      </div>
      <Slidepicture />
    </div>
  );
}
