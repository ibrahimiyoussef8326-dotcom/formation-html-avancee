import React from 'react';
import { PlatformProvider, usePlatform } from './context/PlatformContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import HeroSection from './components/home/HeroSection';
import ServicesSection from './components/home/ServicesSection';
import FeaturedProjects from './components/home/FeaturedProjects';
import HowItWorks from './components/home/HowItWorks';
import ContactModal from './components/home/ContactModal';
import ClientDashboard from './components/client/ClientDashboard';
import FreelancerDashboard from './components/freelancer/FreelancerDashboard';
import Toast from './components/common/Toast';

function MainContent() {
  const { currentView } = usePlatform();

  if (currentView === 'client') {
    return (
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
        <Sidebar role="client" />
        <main className="flex-1 p-6 sm:p-8 lg:p-10 min-w-0 bg-slate-50/50">
          <ClientDashboard />
        </main>
      </div>
    );
  }

  if (currentView === 'freelancer') {
    return (
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
        <Sidebar role="freelancer" />
        <main className="flex-1 p-6 sm:p-8 lg:p-10 min-w-0 bg-slate-50/50">
          <FreelancerDashboard />
        </main>
      </div>
    );
  }

  // Default: Landing Page ('home')
  return (
    <main className="flex-1">
      <HeroSection />
      <ServicesSection />
      <FeaturedProjects />
      <HowItWorks />
    </main>
  );
}

export default function App() {
  return (
    <PlatformProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <MainContent />
        <Footer />
        <ContactModal />
        <Toast />
      </div>
    </PlatformProvider>
  );
}
