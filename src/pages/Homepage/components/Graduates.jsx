const graduates = [
  "/assets/images/graduates/graduate1.png",
  "/assets/images/graduates/graduate2.png",
  "/assets/images/graduates/graduate3.png",
  "/assets/images/graduates/graduate4.png",
  "/assets/images/graduates/graduate5.png",
  "/assets/images/graduates/graduate6.png",
  "/assets/images/graduates/graduate7.png",
  "/assets/images/graduates/graduate8.png",
];
export default function Graduates() {
  return (
    <div className="py-30">
      <h1
        className="text-[#23417e] text-4xl md:text-5xl relative w-fit m-auto"
        style={{ fontFamily: "SFUIBold" }}
      >
        Our Graduates
        <img
          src="/assets/images/orangedash.svg"
          className="absolute -bottom-5 right-0 w-full"
        />
      </h1>
      <div className="overflow-x-scroll flex mt-30 px-10 gap-5">
        {graduates.map((graduatee) => {
          return <img src={graduatee} key={graduatee} />;
        })}
      </div>
    </div>
  );
}
