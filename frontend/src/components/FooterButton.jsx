
  import React from "react";
import {
  ArrowUp,
  Mail,
  Apple,
  PlayCircle,
  Download,
} from "lucide-react";

export default function FooterButton() {
  return (
    <footer className="bg-[#1b8a72] text-white relative">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Logos */}
        <div className="flex items-center gap-4">
          <div className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold">
            Ministry of Russia
          </div>

          <div className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold">
            Rospatent
          </div>
        </div>

        {/* Middle Apps */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-white px-3 py-2 rounded">
            <Download size={18} />
            APK
          </div>

          <div className="flex items-center gap-2 border border-white px-3 py-2 rounded">
            <Download size={18} />
            APK
          </div>

          <div className="flex items-center gap-2 border border-white px-3 py-2 rounded">
            <Apple size={18} />
          </div>

          <div className="flex items-center gap-2 border border-white px-3 py-2 rounded">
            <PlayCircle size={18} />
          </div>
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-white rounded flex items-center justify-center">
            <span className="text-xs">H</span>
          </div>
          <div className="w-10 h-10 border border-white rounded flex items-center justify-center">
            <span className="text-xs">F</span>
          </div>
          <div className="w-10 h-10 border border-white rounded flex items-center justify-center">
            <span className="text-xs">T</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs border-t border-white/30 py-4 px-4">
        © 2016–2024 Compass | INN 9717088560, OGRN 5157746094457 <br />
        © 2018–2024 IP Kachkurina INN 77166149922, OGRN ...
      </div>

      {/* Floating Buttons */}
      <button className="fixed bottom-5 right-5 bg-white text-black p-3 rounded-full shadow-lg">
        <ArrowUp size={18} />
      </button>

      <button className="fixed bottom-5 left-5 bg-white text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
        <Mail size={16} />
        Send Message
      </button>
    </footer>
  );
}