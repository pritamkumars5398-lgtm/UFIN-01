import React from "react";
import {
  Phone,
  Mail,
  Clock3,
  Send,
} from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import { RiRadioButtonLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Toggle */}
        <div className="flex justify-center mb-14">
          <div className="bg-[#EDEDED] rounded-full p-1 shadow">

            <button className="px-5 py-2 rounded-full bg-white shadow text-sm font-medium">
              For business
            </button>

            <button className="px-5 py-2 text-sm font-medium">
              To people
            </button>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* Left */}
          <div>

            {/* Logo */}
            <img
              src="https://dummyimage.com/180x60/ffffff/000000&text=UFIN+CONTROL"
              alt="logo"
              className="mb-12"
            />

            {/* Contact */}
            <div className="space-y-5 text-[#4E8F89]">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>8 (800) 444-04-81</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>aq@ufin.online</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={18} />
                <span>Mon–Fri: 9:00 - 18:00</span>
              </div>

            </div>

            {/* Social */}
            <div className="flex gap-5 mt-10">

              <div className="w-11 h-11 rounded-full bg-[#A4CBC5] flex items-center justify-center">
                <FaTelegramPlane className="text-white text-lg" />
              </div>

              <div className="w-11 h-11 rounded-full bg-[#A4CBC5] flex items-center justify-center">
                <Send className="text-white" size={18} />
              </div>

              <div className="w-11 h-11 rounded-full bg-[#A4CBC5] flex items-center justify-center">
                <RiRadioButtonLine className="text-white text-xl" />
              </div>

            </div>

          </div>

          {/* Column 1 */}
          <div>

            <h3 className="font-bold text-lg mb-8">
              Control services
            </h3>

            <ul className="space-y-4 text-gray-700">

              <li>GLONASS transport monitoring</li>
              <li>Video surveillance for transport</li>
              <li>Driver control</li>
              <li>Route assignments</li>
              <li>Fuel consumption control</li>
              <li>Tire pressure monitoring</li>
              <li>Employee monitoring</li>

            </ul>

            <h3 className="font-bold text-lg mt-12 mb-6">
              Integrations
            </h3>

            <ul className="space-y-4 text-gray-700">

              <li>API</li>
              <li>Relay servers</li>
              <li>Transition from Wialon</li>
              <li>GLONASS installation</li>

            </ul>

          </div>

          {/* Column 2 */}
          <div>

            <h3 className="font-bold text-lg mb-8">
              Solutions
            </h3>

            <ul className="space-y-4 text-gray-700">

              <li>Efficiency</li>
              <li>Transportation safety</li>
              <li>Level of service provision</li>
              <li>Threat Control</li>
              <li>Customer loyalty</li>

            </ul>

            <h3 className="font-bold text-lg mt-12 mb-6">
              By industry
            </h3>

            <ul className="space-y-4 text-gray-700">

              <li>Transportation of food products</li>
              <li>Freight transportation</li>
              <li>Passenger transportation</li>
              <li>Taxi</li>
              <li>Construction equipment</li>
              <li>Leasing</li>
              <li>Dangerous goods</li>

            </ul>

          </div>

          {/* Column 3 */}
          <div>

            <h3 className="font-bold text-lg mb-8">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-700">

              <li>Compatible equipment for business</li>
              <li>Mobile app user manual</li>
              <li>User Agreement</li>
              <li>Privacy Policy</li>
              <li>Questions and Answers</li>
              <li>Instructions for trackers</li>

            </ul>

            <h3 className="font-bold text-lg mt-12 mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-700">

              <li>About the company</li>
              <li>Contacts</li>
              <li>Reviews</li>
              <li>Partners</li>
              <li>News</li>
              <li>Blog</li>

            </ul>

          </div>

        </div>
      </div>
    </footer>
  );
}