import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { Code2, Heart, Shield, Sparkles, Github, Twitter, Linkedin, Mail, ArrowUpRight, Globe } from 'lucide-react';

export default function Footer() {
  const { navigateTo, setIsContactModalOpen, language, setLanguage, toggleLanguage, t } = usePlatform();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">DevPulse</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {language === 'en'
                ? 'The leading platform connecting ambitious companies with vetted independent developers and tech specialists to build outstanding digital products.'
                : 'La plateforme de référence qui connecte les entreprises aux meilleurs développeurs indépendants et experts tech pour transformer vos idées en produits numériques d\'exception.'}
            </p>

            {/* Language Switcher in Footer */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                {language === 'en' ? 'Language:' : 'Langue :'}
              </span>
              <div className="inline-flex rounded-lg border border-slate-800 bg-slate-900 p-0.5 text-xs">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                    language === 'fr'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🇫🇷 Français
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                    language === 'en'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🇬🇧 English
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-400 pt-2">
              <a href="#twitter" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#linkedin" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#github" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <button onClick={() => setIsContactModalOpen(true)} className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Client links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {language === 'en' ? 'For Clients' : 'Pour les Clients'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => navigateTo('client', 'request-service')} className="hover:text-indigo-400 transition-colors">
                  {t('client.action1Title')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('client', 'schedule-meeting')} className="hover:text-indigo-400 transition-colors">
                  {t('client.action2Title')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('client', 'overview')} className="hover:text-indigo-400 transition-colors">
                  {language === 'en' ? 'Client Dashboard' : 'Tableau de bord client'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('client', 'my-projects')} className="hover:text-indigo-400 transition-colors">
                  {language === 'en' ? 'Project Tracking' : 'Suivi des projets'}
                </button>
              </li>
            </ul>
          </div>

          {/* Freelancer links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {language === 'en' ? 'For Freelancers' : 'Pour les Freelancers'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => navigateTo('freelancer', 'browse-projects')} className="hover:text-indigo-400 transition-colors">
                  {t('freelancer.bannerTitle')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('freelancer', 'my-applications')} className="hover:text-indigo-400 transition-colors">
                  {t('sidebar.navMyApplications')}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('freelancer', 'profile')} className="hover:text-indigo-400 transition-colors">
                  {t('sidebar.navProfile')}
                </button>
              </li>
              <li>
                <a href="#tarifs" onClick={(e) => { e.preventDefault(); navigateTo('freelancer', 'browse-projects'); }} className="hover:text-indigo-400 transition-colors">
                  {language === 'en' ? 'Average Daily Rate Index' : 'Barème des tarifs moyens'}
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Expertise */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t('servicesSection.tag')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-1 hover:text-white cursor-pointer" onClick={() => navigateTo('home', 'services-section')}>
                <span>Web Fullstack (React/Node)</span>
              </li>
              <li className="flex items-center gap-1 hover:text-white cursor-pointer" onClick={() => navigateTo('home', 'services-section')}>
                <span>Applications Mobiles</span>
              </li>
              <li className="flex items-center gap-1 hover:text-white cursor-pointer" onClick={() => navigateTo('home', 'services-section')}>
                <span>IA générative & LLM</span>
              </li>
              <li className="flex items-center gap-1 hover:text-white cursor-pointer" onClick={() => navigateTo('home', 'services-section')}>
                <span>Cloud & DevOps (AWS)</span>
              </li>
              <li className="flex items-center gap-1 hover:text-white cursor-pointer" onClick={() => navigateTo('home', 'services-section')}>
                <span>UI/UX Design Systems</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} DevPulse Technologies Inc. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {language === 'en' ? 'Platform 100% operational' : 'Plateforme 100% opérationnelle'}
            </span>
            <button onClick={() => setIsContactModalOpen(true)} className="hover:text-slate-300 transition-colors">
              {language === 'en' ? 'Technical Support' : 'Support technique'}
            </button>
            <span className="hover:text-slate-300 cursor-pointer">
              {language === 'en' ? 'Privacy & Security' : 'Confidentialité & Sécurité'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
