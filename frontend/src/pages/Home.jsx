import React from 'react'
import Hero from '../components/Hero'
import OperationsSection from '../components/OperationsSection'
import ClientFeedback from '../components/ClientFeedback'
import UnifiedAccounnt from '../components/UnifiedAccounnt'
import RequestSection from '../components/RequestSection'
import ResourcesSection from '../components/ResourcesSection'
import NewsSection from '../components/NewsSection'
import FeatureBanner from '../components/FeatureBanner'
import DevicesSection from '../components/DevicesSectio'
import CompanyClients from '../components/CompanyClients'

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Ticker strip */}
      <div className="bg-gray-100 border-b border-gray-200 py-2.5 px-6 text-center text-sm text-gray-600">
        Повышаем эффективность вашего бизнеса.{" "}
        <a href="#" className="text-[#4E8F89] hover:underline font-medium">
          Узнать больше
        </a>
      </div>

      <UnifiedAccounnt />
      <OperationsSection />
      <ClientFeedback />
      <CompanyClients />
      <DevicesSection />
      <RequestSection />
      <FeatureBanner />
      <ResourcesSection />
      <NewsSection />
    </div>
  )
}
