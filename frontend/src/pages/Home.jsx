import React from 'react'
import Hero from '../components/Hero'
import ProfitabilitySection from '../components/ProfitabilitySection'
import ClientFeedback from '../components/ClientFeedback'
import UnifiedAccounnt from '../components/UnifiedAccounnt'
import IndustrySolutions from '../components/IndustrySolutions'
import RequestSection from '../components/RequestSection'
import ResourcesSection from '../components/ResourcesSection'
import NewsSection from '../components/NewsSection'
import UpdateLog from '../components/UpdateLog'
import FeatureBanner from '../components/FeatureBanner'
import DevicesSection from '../components/DevicesSectio'
import CompanyClients from '../components/CompanyClients'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      <Hero />

      {/* Ticker strip — Image 1 style (light mint) */}
      <div
        className="py-3 px-6 text-center text-sm font-medium"
        style={{ background: "#dff0ed", color: "#2d7a71" }}
      >
        {t("home.ticker")}{" "}
        <a
          href="#"
          className="font-semibold underline hover:opacity-75 transition"
          style={{ color: "#ff9c23" }}
        >
          {t("home.learnMore")}
        </a>
      </div>

      {/* Image 1 heading + Image 2 animation video */}
      <ProfitabilitySection />

      <UnifiedAccounnt />
      <IndustrySolutions />
      <ClientFeedback />
      <CompanyClients />
      <DevicesSection />
      <RequestSection />
      <FeatureBanner />
      <ResourcesSection />
      <UpdateLog />
      <NewsSection />
    </div>
  )
}
