export default function Footer() {
  return (
    <div className="bg-[rgba(35,62,126,0.1)] py-10 overflow-hidden">
      <div className="w-[80%] m-auto relative ">
        <img src="/assets/images/logos/footerlogo.png" />
        <div className="grid grid-cols-3 text-left text-[#23417e] mt-10 gap-2">
          <ul>
            <li style={{ fontFamily: "SFUIBold" }} className="mb-5">
              Our School
            </li>
            <li>About Us</li>
            <li>Our Campus</li>
            <li>Vision</li>
            <li>Mission</li>
          </ul>
          <ul>
            <li style={{ fontFamily: "SFUIBold" }} className="mb-5">
              Services
            </li>
            <li>Student Activities</li>
            <li>Accommodation Arrangement</li>
            <li>Medical Insurance</li>
            <li>Tutoring Services</li>
          </ul>
          <ul>
            <li style={{ fontFamily: "SFUIBold" }} className="mb-5">
              Contact US
            </li>
            <li className="flex items-center gap-3">
              <img src="/assets/images/phone.png" />
              416.488.5035
            </li>
            <li className="flex items-center gap-3">
              <img src="/assets/images/email.png" />
              info@oxfordcollege.ca
            </li>
            <li className="flex items-center gap-3">
              <img src="/assets/images/globe.png" />
              www.oxfordcollege.ca
            </li>
            <li className="flex items-center gap-3">
              <img src="/assets/images/location.png" />
              108 -155 Consumers Road, North York, ON M2J 0A3 Canada
            </li>
          </ul>
        </div>
        <div className="flex gap-5 m-auto justify-center items-center">
          <img src="/assets/images/facebook.svg" />
          <img src="/assets/images/instagram.svg" />
          <img src="/assets/images/tiktok.svg" />
          <img src="/assets/images/camera.svg" />
          <img src="/assets/images/bilibili.svg" />
          <img src="/assets/images/chinese.svg" />
        </div>
        <img
          src="/assets/images/footerleaf.png"
          className="absolute -bottom-20 -right-20"
        />
        <div className="flex justify-between w-full border-t-[#D9DBE9] border-t-2 py-5 mt-5 text-[#6F6C90] text-xl">
          <p>Copyright © 2025 Oxford College of Canada</p>
          <p>
            All Rights Reserved |
            <a href="#" className="text-[#8b82fa] underline">
              {" "}
              Terms and Conditions
            </a>{" "}
            |
            <a href="#" className="text-[#8b82fa] underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
