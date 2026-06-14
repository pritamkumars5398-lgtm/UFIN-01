import React, {useEffect, useState} from 'react'
import Hero from '../components/Hero'
import OperationsSection from '../components/OperationsSection'
import ClientFeedback from '../components/ClientFeedback'
import UnifiedAccounnt from '../components/UnifiedAccounnt'
import RequestSection from '../components/RequestSection'
import ResourcesSection from '../components/ResourcesSection'
import UpdateLog from '../components/UpdateLog'
import NewsSection from '../components/NewsSection'
import FeatureBanner from '../components/FeatureBanner'
import DevicesSection from '../components/DevicesSectio'
import CompanyClients from '../components/CompanyClients'

export default function Home(){
  const [ping, setPing] = useState('...')
  useEffect(()=>{
    fetch('/api/ping').then(r=>r.json()).then(d=>setPing(d.msg)).catch(()=>setPing('error'))
  },[])

  return (
    <div>
      <Hero />
      <OperationsSection/>
      <UnifiedAccounnt/>
      <ClientFeedback/>
      <RequestSection/>
      <ResourcesSection/>
      <UpdateLog/>
      <NewsSection/>
      <FeatureBanner/>
      <DevicesSection/>
      <CompanyClients/>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-4">Welcome</h3>
        <p className="mb-4 text-gray-700">This is the Home page. Backend ping: <strong>{ping}</strong></p>
      </div>
    </div>
  )
}
