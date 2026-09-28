import React, { useState } from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { 
  Code2, 
  Menu, 
  X, 
  UserCheck, 
  Briefcase, 
  Home, 
  Calendar, 
  PlusCircle, 
  Sparkles,
  ArrowRight,
  Layers,
  Globe
} from 'lucide-react';

export default function Navbar() {
  const { 
    currentView, 
    navigateTo, 
    setIsContactModalOpen,
    projects,
    language,
    toggleLanguage,
    t
  } = usePlatform();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view, sectionId = null) => {
    setMobileMenuOpen(false);
    if (view === 'home') {
      if (currentView !== 'home') {
        navigateTo('home');
        if (sectionId) {
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigateTo(view);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900">
                  DevPulse
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-700 tracking-wide">
                  PRO
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium -mt-0.5">
                {t('nav.tagline')}
              </span>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentView === 'home'
                  ? 'text-indigo-600 bg-indigo-50/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => handleNavClick('home', 'services-section')}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => handleNavClick('home', 'projects-section')}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors flex items-center gap-1.5"
            >
              {t('nav.projects')}
              <span className="px-1.5 py-0.2 bg-slate-200 text-slate-700 text-xs font-bold rounded-full">
                {projects.length}
              </span>
            </button>
            <button
              onClick={() => handleNavClick('home', 'about-section')}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Role switcher, Language switcher & CTA buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span>{language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}</span>
            </button>

            {/* Mode Switcher Pills */}
            <div className="bg-slate-100 p-1 rounded-xl border border-slate-200/80 flex items-center gap-1">
              <button
                onClick={() => navigateTo('client', 'overview')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  currentView === 'client'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
                {t('nav.iAmClient')}
              </button>
              <button
                onClick={() => navigateTo('freelancer', 'browse-projects')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  currentView === 'freelancer'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                {t('nav.iAmFreelancer')}
              </button>
            </div>

            {/* Quick Action Button based on context */}
            {currentView === 'client' ? (
              <button
                onClick={() => navigateTo('client', 'request-service')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <PlusCircle className="w-4 h-4" />
                {t('nav.requestService')}
              </button>
            ) : currentView === 'freelancer' ? (
              <button
                onClick={() => navigateTo('freelancer', 'browse-projects')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 shadow-md shadow-slate-900/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Layers className="w-4 h-4 text-indigo-400" />
                {t('nav.browseMissions')}
              </button>
            ) : (
              <button
                onClick={() => navigateTo('client', 'request-service')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold text-sm hover:from-indigo-700 hover:to-blue-700 shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>{t('nav.startProject')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1"
            >
              <span>{language === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase">Langue / Language</span>
            <div className="flex gap-2">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5 text-indigo-600" />
                <span>{language === 'fr' ? 'Passer en English 🇬🇧' : 'Switch to Français 🇫🇷'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => { setMobileMenuOpen(false); navigateTo('client', 'overview'); }}
              className={`p-3 rounded-xl border text-center font-bold text-xs flex flex-col items-center gap-1 ${
                currentView === 'client' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-700'
              }`}
            >
              <UserCheck className="w-5 h-5 text-indigo-600" />
              {t('nav.iAmClient')}
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigateTo('freelancer', 'browse-projects'); }}
              className={`p-3 rounded-xl border text-center font-bold text-xs flex flex-col items-center gap-1 ${
                currentView === 'freelancer' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-700'
              }`}
            >
              <Briefcase className="w-5 h-5 text-blue-600" />
              {t('nav.iAmFreelancer')}
            </button>
          </div>

          <div className="space-y-1 pt-1">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 flex items-center gap-2"
            >
              <Home className="w-4 h-4 text-slate-400" />
              {t('nav.home')}
            </button>
            <button
              onClick={() => handleNavClick('home', 'services-section')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => handleNavClick('home', 'projects-section')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {t('nav.projects')} ({projects.length})
            </button>
            <button
              onClick={() => handleNavClick('home', 'about-section')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); setIsContactModalOpen(true); }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {t('nav.contact')}
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); navigateTo('client', 'request-service'); }}
              className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 text-white font-semibold text-sm text-center shadow-md shadow-indigo-600/20"
            >
              {t('nav.requestService')}
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); navigateTo('client', 'schedule-meeting'); }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-indigo-600" />
              {t('client.action2Title')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
