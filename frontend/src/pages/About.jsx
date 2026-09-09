import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

// Images from assets
import aboutHeroImg from "../assets/about-hero.png";
import aboutTruckImg from "../assets/trucks.png";
import aboutHighwayImg from "../assets/about-highway.png";
import osipovPortraitImg from "../assets/osipov-portrait.png";
import chulskyPortraitImg from "../assets/chulsky-portrait.png";
import GazpromLogo from "../assets/GazpromMain.png.webp";
import galileoLogo from "../assets/galileo10.jpg.webp";
import rybric1 from "../assets/rybric-1.png.webp";
import rybric10 from "../assets/rybric-10.png.webp";
import imgNews1 from "../assets/img-24-e1674854414374.png.webp";
import vacanciesInterviewImg from "../assets/vacancies-interview.png";
import CompanyCTA from "../components/CompanyCTA";

// Certificate placeholder images (use inline SVG placeholder)
const CertPlaceholder = ({ label }) => (
  <div className="w-[160px] h-[220px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center p-4">
    <p className="text-xs text-gray-500 text-center leading-snug">{label}</p>
  </div>
);

/* ─── History timeline data ─── */
const historyYears = [
  {
    year: "2016",
    title: "Full control of vehicle parameters",
    desc: "Monitor location, fuel level and CAN. Monitor revenue collection and reduce costs.",
    img: aboutHighwayImg,
  },
  {
    year: "2017",
    title: "Driver monitoring module launched",
    desc: "Introducing driver behaviour analytics and fatigue detection for safer fleets.",
    img: aboutTruckImg,
  },
  {
    year: "2018",
    title: "Temperature & cargo control",
    desc: "Real-time temperature monitoring for food, pharma and sensitive goods transport.",
    img: aboutHighwayImg,
  },
  {
    year: "2019",
    title: "API integrations ecosystem",
    desc: "Opening platform APIs to partners and third-party logistics systems.",
    img: aboutTruckImg,
  },
  {
    year: "2020",
    title: "2 trillion data points collected",
    desc: "Milestone of scale — Ufin platform surpasses 2+ trillion IoT data records.",
    img: aboutHighwayImg,
  },
  {
    year: "2021",
    title: "People tracking & mobile app",
    desc: "Expanding beyond vehicles — employee monitoring and iOS/Android apps.",
    img: aboutTruckImg,
  },
  {
    year: "2022",
    title: "10,000+ connected devices",
    desc: "Global device network surpasses 10 thousand units across industries.",
    img: aboutHighwayImg,
  },
];

/* ─── Stats ─── */
const stats = [
  { value: "400+", label: "corporate clients rely on Ufin" },
  { value: "2+ trillion", label: "data values are collected annually" },
  { value: "10 thousand +", label: "devices connected worldwide" },
  { value: "25+", label: "new features released annually" },
];

/* ─── Client logos ─── */
const clientLogos = [
  { src: GazpromLogo, alt: "Gazprom" },
  { src: galileoLogo, alt: "Galileo" },
  { src: rybric1, alt: "Client 3" },
  { src: rybric10, alt: "Client 4" },
  { src: imgNews1, alt: "Client 5" },
];

export default function About() {
  const [activeYear, setActiveYear] = useState(0);
  const slide = historyYears[activeYear];

  const nextSlide = () => setActiveYear((prev) => (prev + 1) % historyYears.length);
  const prevSlide = () => setActiveYear((prev) => (prev - 1 + historyYears.length) % historyYears.length);

  return (
    <div className="font-sans">

      {/* ══════════════════════════════════════════════════
          SECTION 1 — Hero Banner
          Dark overlay over meeting image, text bottom-left
      ══════════════════════════════════════════════════ */}
      <section className="relative h-[380px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${aboutHeroImg}')` }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,25,35,0.85) 0%, rgba(15,25,35,0.65) 50%, rgba(15,25,35,0.35) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <h1 className="text-[46px] font-bold text-white leading-tight mb-3">
            About the company
          </h1>
          <p className="text-white/75 text-[18px]">Focused on your needs</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — Mission / Make business decisions
          Left: truck photo | Right: heading + text
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — truck image */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src={aboutTruckImg}
                alt="Truck on the road"
                className="w-full h-[380px] object-cover"
              />
            </div>

            {/* Right — text */}
            <div>
              <h2 className="text-[42px] font-bold text-gray-900 leading-tight mb-6">
                Make business decisions with real-time analytics
              </h2>
              <p className="text-gray-500 text-[16px] leading-relaxed">
                Ufin's mission is to improve the security, efficiency, and
                resilience of the operations that power the economy. We are
                pioneers in cloud-based control and management services,
                enabling businesses dependent on physical operations to
                leverage IoT data to improve their operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — Stats / Brief facts
          Mint/light-teal bg, 4 stats centered
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#e5f2ef] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-bold text-gray-900 mb-12">
            Brief facts about our company
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="text-[32px] font-bold text-[#3dab8e] mb-2">
                  {s.value}
                </p>
                <p className="text-gray-600 text-[14px] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — Some of our clients
          White bg, heading left, logos scroll right
      ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-center">
            <div>
              <h2 className="text-[32px] font-bold text-gray-900 leading-tight">
                Some of our clients
              </h2>
              <p className="text-gray-500 text-[14px] mt-4 leading-relaxed">
                Ufin serves 400+ corporate clients across construction,
                utilities &amp; energy, special services, healthcare, education,
                manufacturing, and food &amp; pharmaceutical logistics.
              </p>
            </div>
            {/* Logos */}
            <div className="flex flex-wrap items-center gap-10">
              {clientLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 object-contain grayscale hover:grayscale-0 transition opacity-70 hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — Our History (dark green, timeline slider)
          Left: label + heading + desc + year tabs
          Right: image + next arrow
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#1d4135] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white">
              <p className="text-[#3dab8e] text-xs font-semibold tracking-widest uppercase mb-6">
                OUR HISTORY
              </p>
              <h2 className="text-[40px] font-bold leading-tight mb-6">
                {slide.title}
              </h2>
              <p className="text-white/60 text-[15px] mb-10 leading-relaxed">
                {slide.desc}
              </p>

              {/* Year tabs */}
              <div className="flex gap-6 flex-wrap">
                {historyYears.map((item, i) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(i)}
                    className={`text-[15px] font-semibold transition pb-1 border-b-2 ${
                      i === activeYear
                        ? "text-white border-white"
                        : "text-white/40 border-transparent hover:text-white/70"
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Right — image + next arrow */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-[360px] object-cover"
                />
              </div>
              {/* Next arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-14 h-14 bg-[#3dab8e] hover:bg-[#35a07f] rounded-full flex items-center justify-center shadow-lg transition"
              >
                <ChevronRight size={26} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — Check out our guide (Management team)
          White bg, heading left, two portrait cards right
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — heading */}
            <div>
              <h2 className="text-[40px] font-bold text-gray-900 leading-tight">
                Check out our guide
              </h2>
            </div>

            {/* Right — two portrait cards */}
            <div className="flex gap-6">
              {/* Alexey Osipov */}
              <div className="flex-1 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="h-[260px] overflow-hidden">
                  <img
                    src={osipovPortraitImg}
                    alt="Alexey Osipov"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-semibold text-gray-900 text-[15px]">
                    Alexey Osipov
                  </p>
                  <p className="text-gray-400 text-[13px] mt-0.5">
                    General manager
                  </p>
                </div>
              </div>

              {/* Chulsky Sergey */}
              <div className="flex-1 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="h-[260px] overflow-hidden">
                  <img
                    src={chulskyPortraitImg}
                    alt="Chulsky Sergey"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-semibold text-gray-900 text-[15px]">
                    Chulsky Sergey
                  </p>
                  <p className="text-gray-400 text-[13px] mt-0.5">
                    Technical Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — Certificates + Testimonies (side by side)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Certificates */}
            <div>
              <h2 className="text-[32px] font-bold text-gray-900 mb-10">
                Our certificates
              </h2>
              <div className="flex gap-5 flex-wrap">
                <CertPlaceholder label='Certificate of partnership "Navtelecom"' />
                <CertPlaceholder label='Certificate of partnership "EM Group"' />
                <CertPlaceholder label='Certificate of partnership "GLONASS-TV"' />
              </div>
            </div>

            {/* Testimonies */}
            <div>
              <h2 className="text-[32px] font-bold text-gray-900 mb-10">
                Testimonies
              </h2>
              <div className="flex gap-5 flex-wrap">
                <CertPlaceholder label="License for services provision" />
                <CertPlaceholder label="Certificate of software registration" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 8 — Vacancies 
          White bg, image left, text right
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — image */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src={vacanciesInterviewImg}
                alt="Job interview"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Right — text */}
            <div>
              <p className="text-[#3dab8e] font-bold text-[14px] mb-8">Vacancies</p>
              <h2 className="text-[44px] font-medium text-gray-900 leading-tight mb-10">
                Join the Ufin team.
              </h2>
              <a
                href="/company#vacancies"
                className="inline-flex items-center justify-center border border-[#3dab8e] text-[#3dab8e] hover:bg-[#3dab8e] hover:text-white font-medium px-8 py-3 rounded text-[15px] transition"
              >
                View vacancies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 9 — Call to Action Banner
      ══════════════════════════════════════════════════ */}
      <CompanyCTA
        heading="Ready to get started?"
        subtitle="Leave an online request now! We will contact you during business hours and give you a 10% discount on the initial equipment installation."
        buttonLabel="Submit Request"
        to="/consultation"
      />

    </div>
  );
}
