import { Download } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="bg-[#2b4170] py-10 px-4">
      <div className="max-w-full mx-auto flex flex-col md:flex-row md:px-40 items-center justify-between gap-6">
        <h2
          className="text-white text-3xl md:text-[24px] text-center md:text-left"
          style={{ fontFamily: "Zapfino, cursive" }}
        >
          Enjoy? Register Today To Start Your Journey!
        </h2>

        <a
          href="/assets/download/applicationform.pdf"
          download
          className="inline-flex items-center gap-2 bg-white text-[#2b4170] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
        >
          <img src="/assets/images/downloadarrow.svg" alt="Canada" className="w-7 h-7" />
          Download OCC Registration Form (PDF)
        </a>
      </div>
    </section>
  );
}
