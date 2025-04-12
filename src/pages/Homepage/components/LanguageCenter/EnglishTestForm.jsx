import { ArrowRight } from "lucide-react";

export default function EnglishLevelForm() {
  return (
    <section id="test" className="bg-white py-20 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2b4170] relative inline-block">
          Check Your English Level
          <img src="/assets/images/orangedash.svg" className="absolute -bottom-4 left-30 w-1/2" />
        </h2>
        <p className="text-[#5b6b87] mt-4"> <br></br>
          Take a quick test to find the right program for you!
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-100 rounded-2xl p-8 shadow-md">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div>
            <label className="block text-sm font-semibold text-[#2b4170] mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full rounded-full px-5 py-3 bg-white text-[#2b4170] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#2b4170] mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full rounded-full px-5 py-3 bg-white text-[#2b4170] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-[#2b4170] mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full rounded-full px-5 py-3 bg-white text-[#2b4170] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#2b4170] mb-2">
              Nationality
            </label>
            <input
              type="text"
              className="w-full rounded-full px-5 py-3 bg-white text-[#2b4170] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#2b4170] mb-2">
              Country of Residence
            </label>
            <input
              type="text"
              className="w-full rounded-full px-5 py-3 bg-white text-[#2b4170] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-[#2b4170] mb-2">
              Desired Program
            </label>
            <input
              type="text"
              className="w-full rounded-full px-5 py-3 bg-white text-[#2b4170] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-[#2b4170] mb-2">
              Estimated Start Date
            </label>
            <input
              type="date"
              className="w-full rounded-full px-5 py-3 bg-white text-[#2b4170] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#2b4170] text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#40588a] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
