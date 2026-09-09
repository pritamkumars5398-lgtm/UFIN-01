import React from "react";
import { Link } from "react-router-dom";

/**
 * Bottom-of-page call to action. Simple teal banner with a single button,
 * matching the CTA used at the end of the service/solution pages.
 */
export default function CompanyCTA({
  heading = "Ready to get started?",
  subtitle = "Leave an online request now. We will contact you during business hours and give you a 10% discount on the initial equipment installation.",
  buttonLabel = "Submit Request",
  to = "/consultation",
}) {
  return (
    <section className="bg-[#4E8F89] py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">{heading}</h2>
        <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link
          to={to}
          className="inline-block px-10 py-4 bg-[#f59e0b] hover:bg-[#ffae00] text-black font-bold rounded-lg transition text-lg shadow-lg hover:shadow-xl"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
