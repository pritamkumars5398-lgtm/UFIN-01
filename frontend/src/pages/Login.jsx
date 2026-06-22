import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logoLight from "../assets/logo-light.png";

export default function Login() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#EAF5F3] flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Link to="/" className="inline-block mb-6">
            <img src={logoLight} alt="Tekonika Systems" className="h-12 object-contain" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{t("loginPage.title")}</h1>
          <p className="text-gray-400 text-sm">{t("loginPage.subtitle")}</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="text-xs text-gray-400 uppercase tracking-widest block mb-1.5">{t("loginPage.labelEmail")}</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs text-gray-400 uppercase tracking-widest">{t("loginPage.labelPassword")}</label>
                <a href="#" className="text-xs text-[#4E8F89] hover:underline">{t("loginPage.forgotPass")}</a>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 pr-11 text-sm text-gray-800 focus:outline-none focus:border-[#4E8F89] transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4E8F89] hover:bg-[#3d7a74] text-white font-bold py-3.5 rounded-lg transition mt-2"
            >
              {t("loginPage.submitBtn")}
            </button>

          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              {t("loginPage.noAccount")}{" "}
              <Link to="/consultation" className="text-[#4E8F89] hover:underline font-medium">
                {t("loginPage.requestLink")}
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
