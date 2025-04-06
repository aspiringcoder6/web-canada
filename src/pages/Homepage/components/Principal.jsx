export default function Principal() {
  return (
    <div className="w-[80%] m-auto py-30">
      <h1
        className="text-[#23417e] text-6xl relative w-fit m-auto"
        style={{ fontFamily: "SFUIBold" }}
      >
        Meet Our Principal
        <img
          src="/assets/images/orangedash.svg"
          className="absolute -bottom-5 right-0"
        />
      </h1>
      <div className="mt-30 flex max-lg:flex-col lg:flex-row items-start gap-20">
        <div className="">
          <p className="text-left" style={{ fontFamily: "SFUIBold" }}>
            Dear Parents, Students, and Visitors,
          </p>
          <p className="text-left" style={{ fontFamily: "SFUILight" }}>
            I want to take this opportunity and welcome you to Oxford College of
            Canada.
          </p>
          <p className="text-left" style={{ fontFamily: "SFUILight" }}>
            I believe you will find our school to be a warm and caring place
            where the main goal is to provide each and every student the
            attention necessary to achieve his/her individual success. We have
            students from diverse backgrounds, international and local, filled
            with talent and desire to grow educationally, get involved, and have
            a meaningful high school experience. Our students are extremely
            fortunate to have such a committed and caring staff. These fine
            professionals place our students at the heart of every instructional
            decision. We are looking at what we teach, how we teach, how
            students perform, and what students need to compete in today’s
            universities, colleges, and worldwide job market.
          </p>
          <p className="text-left" style={{ fontFamily: "SFUILight" }}>
            Fortunately, there is a wide course selection available in our
            school and I invite all students to take advantage of this
            opportunity as well as specialized guidance to assist them in
            perusing future academic pathways. The previous years of experience
            speak proudly with the language of many diplomas and degrees that
            our students earned from all range of Provincial or National
            Universities and Colleges. If you come, you will follow the same
            path.
          </p>
          <p className="text-left" style={{ fontFamily: "SFUILight" }}>
            Please join us in creating a successful and positive atmosphere at
            Oxford College of Canada.
          </p>
          <p className="text-left" style={{ fontFamily: "SFUILight" }}>
            As always, if you have questions or concerns, please do not hesitate
            to contact us.
          </p>
          <img src="/assets/images/presSign.png" />
        </div>
        <img src="/assets/images/Video2.png" className="pt-5" />
      </div>
    </div>
  );
}
