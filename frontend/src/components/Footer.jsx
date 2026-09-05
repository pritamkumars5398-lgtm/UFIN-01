import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock3,
  ArrowUp,
} from "lucide-react";
import { FaTelegramPlane, FaApple, FaGooglePlay } from "react-icons/fa";
import { SiHuawei } from "react-icons/si";
import { TbDeviceMobileMessage } from "react-icons/tb"; // as a generic icon
import logoLight from "../assets/logo-light.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-10">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Top Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100/80 rounded-full p-1 flex">
            <button className="px-6 py-2.5 rounded-full bg-white shadow-sm text-sm font-semibold text-[#1F2937]">
              For business
            </button>
            <button className="px-6 py-2.5 text-sm font-semibold text-[#6B7280]">
              To people
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-20">

          {/* Left Column */}
          <div className="pr-4">
            <Link to="/" className="block mb-8">
              <img
                src={logoLight}
                alt="Tekonika Systems"
                className="h-24 w-auto object-contain mix-blend-multiply origin-left"
              />
            </Link>
            
            <div className="space-y-4 text-[#1B7F6D] text-[15px] font-medium mb-10">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#A4CBC5]" />
                <span>8 (800) 444-04-81</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#A4CBC5]" />
                <span>a@ufin.online</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock3 size={18} className="text-[#A4CBC5]" />
                <span>Mon-Fri: 9:00 - 18:00</span>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1B7F6D] flex items-center justify-center hover:opacity-80 transition cursor-pointer">
                <FaTelegramPlane className="text-white text-lg" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1B7F6D] flex items-center justify-center hover:opacity-80 transition cursor-pointer font-bold text-white">
                R
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1B7F6D] flex items-center justify-center hover:opacity-80 transition cursor-pointer">
                <TbDeviceMobileMessage className="text-white text-xl" />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-[#1F2937] text-[15px] mb-6">Control services</h3>
            <ul className="space-y-4 text-[#1F2937] text-[13px]">
              <li className="hover:text-[#1B7F6D] cursor-pointer">GLONASS transport monitoring</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Video surveillance for transport</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Driver control</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Route assignments</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Fuel consumption control</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Tire pressure monitoring</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Employee monitoring</li>
            </ul>

            <h3 className="font-bold text-[#1F2937] text-[15px] mt-10 mb-6">Integrations</h3>
            <ul className="space-y-4 text-[#1F2937] text-[13px]">
              <li className="hover:text-[#1B7F6D] cursor-pointer">API</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Relay servers</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Transition from Wialon</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">GLONASS installation</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-[#1F2937] text-[15px] mb-6">Solutions</h3>
            <ul className="space-y-4 text-[#1F2937] text-[13px]">
              <li className="hover:text-[#1B7F6D] cursor-pointer">Efficiency</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Transportation safety</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Level of service provision</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Threat Control</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Customer loyalty and retention</li>
            </ul>

            <h3 className="font-bold text-[#1F2937] text-[15px] mt-10 mb-6">By industry</h3>
            <ul className="space-y-4 text-[#1F2937] text-[13px]">
              <li className="hover:text-[#1B7F6D] cursor-pointer">Transportation of food products</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Freight transportation</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Passenger transportation</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Taxi</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Construction equipment</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Leasing</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Dangerous goods</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Agricultural machinery</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Monitoring of transport and housing and communal services</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Banks</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Production</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Trade</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Pharmaceuticals</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Medical institutions</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Fuel and energy</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Light commercial vehicles</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-[#1F2937] text-[15px] mb-6">Resources</h3>
            <ul className="space-y-4 text-[#1F2937] text-[13px]">
              <li className="hover:text-[#1B7F6D] cursor-pointer">Compatible equipment for business</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Mobile app user manual</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">User Agreement</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">What new things have we developed?</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Questions and Answers</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Instructions for trackers</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="relative">
            <h3 className="font-bold text-[#1F2937] text-[15px] mb-6">Company</h3>
            <ul className="space-y-4 text-[#1F2937] text-[13px]">
              <li className="hover:text-[#1B7F6D] cursor-pointer">About the company</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Contacts</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Reviews</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Partners</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">News</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Blog</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Vacancies</li>
              <li className="hover:text-[#1B7F6D] cursor-pointer">Guarantees</li>
            </ul>

            {/* Scroll to Top Button */}
            <button 
              onClick={scrollToTop}
              className="absolute -right-6 md:right-0 bottom-0 md:-bottom-10 w-12 h-12 rounded-full bg-[#1B7F6D] hover:bg-[#156456] transition flex items-center justify-center shadow-lg"
            >
              <ArrowUp className="text-white" size={24} />
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1B7F6D] pt-10 pb-12 text-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Top Row: Badges */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Badges Left */}
            <div className="flex gap-4">
              <img src="/src/assets/label-min.svg" alt="Минцифры" className="h-[52px]" />
              <img src="/src/assets/label-rf.svg" alt="Роспатент" className="h-[52px]" />
            </div>

            {/* App Stores Right */}
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition">
                <img src="/src/assets/apk-android-white.svg" alt="APK Android" className="h-10" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img src="/src/assets/apk-huawei-white.svg" alt="APK Huawei" className="h-10" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img src="/src/assets/app-store-square.svg" alt="App Store" className="h-10" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img src="/src/assets/google-play-square.svg" alt="Google Play" className="h-10" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img src="/src/assets/huawei-square.svg" alt="Huawei AppGallery" className="h-10" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img src="/src/assets/ru-store-square.svg" alt="RuStore" className="h-10" />
              </a>
            </div>
          </div>

          {/* Bottom Row: Copyright */}
          <div className="mt-12 text-center opacity-70 text-[11px] leading-relaxed font-light">
            © 2016-2024 ООО "Compass", INN 9717008560, OGRN 5157746091457<br />
            © 2018-2024 IP Kochkurkina INN 771616491922, OGRNIP 31
          </div>
          
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-8 top-10 w-[42px] h-[42px] rounded-full bg-transparent border border-white/20 hover:bg-white/10 transition flex items-center justify-center"
        >
          <ArrowUp className="text-white" size={20} />
        </button>

      </div>
    </footer>
  );
}