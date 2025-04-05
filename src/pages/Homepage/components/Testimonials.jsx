export default function Testimonials() {
  return (
    <div className="pb-30">
      <h1
        className="text-[#23417e] text-6xl relative w-fit m-auto"
        style={{ fontFamily: "SFUIBold" }}
      >
        Testimonials
        <img
          src="/assets/images/orangedash.svg"
          className="absolute -bottom-5 right-0 w-full"
        />
      </h1>
      <div className="grid grid-cols-3 px-20 pt-30 gap-5">
        <video controls>
          <source src="/assets/videos/mexico.mp4" type="video/mp4" />
        </video>
        <video controls>
          <source src="/assets/videos/vietnam.mp4" type="video/mp4" />
        </video>
        <video controls>
          <source src="/assets/videos/summer.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
