const topuniversitiesData = [
  {
    imgSrc: "/assets/images/logos/toronto.png",
    name: "University of Toronto",
    accept: 75,
  },
  {
    imgSrc: "/assets/images/logos/McGill.png",
    name: "McGill University",
    accept: 24,
  },
  {
    imgSrc: "/assets/images/logos/Otawa.png",
    name: "University of Otawa",
    accept: 55,
  },
  {
    imgSrc: "/assets/images/logos/Queen.png",
    name: "Queen's University",
    accept: 5,
  },
  {
    imgSrc: "/assets/images/logos/York.png",
    name: "York University",
    accept: 28,
  },
];
const top10CanadaData = [
  {
    imgSrc: "/assets/images/logos/Waterloo.png",
    name: "Waterloo University",
    accept: 24,
  },
  {
    imgSrc: "/assets/images/logos/ottawared.png",
    name: "University of Otawa",
    accept: 55,
  },
  {
    imgSrc: "/assets/images/logos/Western.png",
    name: "Western University",
    accept: "05",
  },
  {
    imgSrc: "/assets/images/logos/Queenlg.png",
    name: "Queen's University",
    accept: 28,
  },
  {
    imgSrc: "/assets/images/logos/Calgary.png",
    name: "University of Calgary",
    accept: 45,
  },
];
const top20CanadaData = [
  {
    imgSrc: "/assets/images/logos/yorksm.png",
    name: "York University",
    accept: 55,
  },
  {
    imgSrc: "/assets/images/logos/victoriasm.png",
    name: "University of Victoria",
    accept: 24,
  },
  {
    imgSrc: "/assets/images/logos/torontosm.png",
    name: "Toronto Metropolitan Uni",
    accept: 55,
  },
  {
    imgSrc: "/assets/images/logos/manitobasm.png",
    name: "University of Manitoba",
    accept: "05",
  },
  {
    imgSrc: "/assets/images/logos/lauriersm.png",
    name: "Laurier University",
    accept: 28,
  },
  {
    imgSrc: "/assets/images/logos/ocadsm.png",
    name: "OCAD University",
    accept: 28,
  },
  {
    imgSrc: "/assets/images/logos/guelph.png",
    name: "Guelph University",
    accept: 25,
  },
  {
    imgSrc: "/assets/images/logos/carletonsm.png",
    name: "Carleton University",
    accept: 28,
  },
  {
    imgSrc: "/assets/images/logos/alberta.png",
    name: "Alberta University",
    accept: 28,
  },
  {
    imgSrc: "/assets/images/logos/brock.png",
    name: "Brock University",
    accept: 10,
  },
];
function TopUniversity(props) {
  return (
    <div className="grid grid-rows-2 gap-5 justify-center">
      <img src={props.uni.imgSrc} className="m-auto" />
      <div>
        <p
          style={{ fontFamily: props.top20 ? "SFUINormal" : "SFUIBold" }}
          className={`${props.top20 ? "text-xs" : ""}`}
        >
          {props.uni.name}
        </p>
        <p className="flex items-start gap-2 bottom-0 mt-5 text-left">
          <span
            className={`${props.top10 ? "text-black" : "text-[#2d54a5]"} ${
              props.top20 ? "text-2xl" : "text-4xl"
            }`}
            style={{ fontFamily: "SFUIBold" }}
          >
            {props.uni.accept}
          </span>{" "}
          Acceptance letters
        </p>
      </div>
    </div>
  );
}
function Stats() {
  return (
    <>
      <div className="flex items-center w-[90%] m-auto">
        <div className="rounded-full bg-[rgb(105,126,167)] w-[20%] aspect-square flex flex-col justify-center items-center">
          <h2
            className="text-5xl text-white"
            style={{ fontFamily: "SFUIBold" }}
          >
            98%
          </h2>
          <p className="text-white text-0.5xl">
            Graduates accepted into colleges and universities by August 2024
          </p>
        </div>
        <div
          className="text-[#23417e] text-6xl "
          style={{ fontFamily: "SFUIBold" }}
        >
          Top Five Universities In Canada
        </div>
        <div className="rounded-full p-5 bg-[rgb(105,126,167)] w-[20%] aspect-square flex flex-col justify-center items-center">
          <h2
            className="text-5xl text-white"
            style={{ fontFamily: "SFUIBold" }}
          >
            95%
          </h2>
          <p className="text-white text-0.5xl">
            Graduates will enroll in colleges and universities across North
            America
          </p>
        </div>
      </div>
      <div className="flex justify-around mt-20">
        {topuniversitiesData.map((university, index) => {
          return <TopUniversity key={index} uni={university} />;
        })}
      </div>
      <h1
        className="text-[#23417e] text-4xl "
        style={{ fontFamily: "SFUIBold" }}
      >
        TOP 10 UNIVERSITIES IN CANADA
      </h1>
      <div className="flex justify-around w-[75%] m-auto mt-20">
        {top10CanadaData.map((uni, index) => {
          return <TopUniversity key={index} uni={uni} top10={true} />;
        })}
      </div>
      <h1
        className="text-[#23417e] text-3xl "
        style={{ fontFamily: "SFUIBold" }}
      >
        TOP 20 UNIVERSITIES IN CANADA
      </h1>
      <div className="flex justify-around m-auto mt-20">
        {top20CanadaData.map((uni, index) => {
          return (
            <TopUniversity key={index} uni={uni} top10={true} top20={true} />
          );
        })}
      </div>
      <div className="flex mt-20 items-center justify-around">
        <div className="w-[50%]">
          <div>
            <div className="grid grid-cols-4">
              <img src="/assets/images/flag.png" className="mr-5 cols-span-1" />
              <div className="flex justify-around cols-span-3">
                <p className="text-5xl" style={{ fontFamily: "SFUIBold" }}>
                  25
                </p>
                <p className="text-xl ml-5">Acceptance letter</p>
              </div>
            </div>
            <p
              className="text-left text-xl mt-5"
              style={{ fontFamily: "SFUIMedium" }}
            >
              From 23 additional universities in Canada
            </p>
          </div>
          <div>
            <div className="grid grid-cols-4 mt-10">
              <img
                src="/assets/images/world.png"
                className="mr-5 cols-span-1"
              />
              <div className="flex justify-around cols-span-3">
                <p className="text-5xl" style={{ fontFamily: "SFUIBold" }}>
                  30
                </p>
                <p className="text-xl ml-5">Acceptance letter</p>
              </div>
            </div>
            <p
              className="text-left text-xl mt-5"
              style={{ fontFamily: "SFUIMedium" }}
            >
              From 23 additional universities globally
            </p>
          </div>
        </div>
        <div>
          <p
            className="text-[#23417e] text-3xl mb-10"
            style={{ fontFamily: "SFUIBold" }}
          >
            OTHER UNIVERSITIES GLOBALLY
          </p>
          <div className="grid grid-cols-3 grid-rows-2 gap-y-10">
            <div>
              <img src="/assets/images/logos/Nus.png" className="m-auto" />
              <p style={{ fontFamily: "SFUIMedium" }}>
                National University of Singapore
              </p>
            </div>
            <div>
              <img src="/assets/images/logos/Sydney.png" className="m-auto" />
              <p style={{ fontFamily: "SFUIMedium" }}>
                The University of Sydney
              </p>
            </div>
            <div>
              <img
                src="/assets/images/logos/Melbourne.png"
                className="m-auto"
              />
              <p style={{ fontFamily: "SFUIMedium" }}>
                The University of Melbourne
              </p>
            </div>
            <div>
              <img src="/assets/images/logos/Hongkong.png" className="m-auto" />
              <p style={{ fontFamily: "SFUIMedium" }}>Hong Kong University</p>
            </div>
            <div>
              <img src="/assets/images/logos/Boston.png" className="m-auto" />
              <p style={{ fontFamily: "SFUIMedium" }}>Boston University</p>
            </div>
            <div>
              <img src="/assets/images/logos/Nus.png" className="m-auto" />
              <p style={{ fontFamily: "SFUIMedium" }}>Belmont University</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default function Logos() {
  return (
    <div className="w-full bg-[#F0F7FE]">
      <div className="w-[80%] m-auto py-20">
        <img src="/assets/images/logos/oxford.png" className="m-auto" />
        <p className="text-gray-600 text-2xl sm:w-[70%] m-auto mt-5">
          Oxford College of Canada’s class of 2024 received a total of
          <span className="text-[#23417e]" style={{ fontFamily: "SFUIBold" }}>
            {" "}
            265 offers
          </span>{" "}
          and over{" "}
          <span className="text-[#23417e]" style={{ fontFamily: "SFUIBold" }}>
            $1.3million
          </span>{" "}
          in scholarship
        </p>
        <Stats />
      </div>
    </div>
  );
}
