import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { 
  UserCheck, 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Clock, 
  CheckCircle2, 
  Code,
  Zap,
  Cpu
} from 'lucide-react';

export default function HeroSection() {
  const { navigateTo, projects, t } = usePlatform();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white pt-20 pb-28">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-indigo-200 hover:bg-white/15 transition-all">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white font-bold">DevPulse v2.5</span>
            <span className="text-slate-400">•</span>
            <span>{t('hero.pillNew')}</span>
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            {t('hero.title1')} <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-blue-200 to-indigo-400">
              {t('hero.title2')}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {t('hero.subtitle')}
          </p>

          {/* THE TWO MAIN CTAS (Requested explicitly by user) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-lg mx-auto">
            
            {/* CTA 1: Je suis Client */}
            <button
              onClick={() => navigateTo('client', 'overview')}
              className="w-full sm:w-auto flex-1 group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 border border-indigo-400/30"
            >
              <UserCheck className="w-5 h-5 text-indigo-200 group-hover:scale-110 transition-transform" />
              <span>{t('hero.ctaClient')}</span>
              <ArrowRight className="w-4 h-4 text-indigo-200 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* CTA 2: Je suis Freelancer */}
            <button
              onClick={() => navigateTo('freelancer', 'browse-projects')}
              className="w-full sm:w-auto flex-1 group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-800 text-white font-bold text-base border border-slate-700 hover:border-slate-600 shadow-xl transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              <Briefcase className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>{t('hero.ctaFreelancer')}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t('hero.badgeNoCommit')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t('hero.badgeQuote24h')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t('hero.badgeVetted')}</span>
            </div>
          </div>

        </div>

        {/* Interactive Floating Preview Card Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Demander un service */}
          <div 
            onClick={() => navigateTo('client', 'request-service')}
            className="group cursor-pointer p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
              <span>{t('hero.card1Title')}</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('hero.card1Desc')}
            </p>
          </div>

          {/* Card 2: Prendre rendez-vous */}
          <div 
            onClick={() => navigateTo('client', 'schedule-meeting')}
            className="group cursor-pointer p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
              <span>{t('hero.card2Title')}</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('hero.card2Desc')}
            </p>
          </div>

          {/* Card 3: Espace Freelancer */}
          <div 
            onClick={() => navigateTo('freelancer', 'browse-projects')}
            className="group cursor-pointer p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
              <span>{t('hero.card3Title')}</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('hero.card3Desc')}
            </p>
          </div>

        </div>

        {/* Social Proof Stats Bar */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-extrabold text-white">98%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">{t('hero.statSatisfaction')}</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-indigo-400">+350</div>
            <div className="text-xs text-slate-400 font-medium mt-1">{t('hero.statDelivered')}</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-blue-400">&lt; 2h</div>
            <div className="text-xs text-slate-400 font-medium mt-1">{t('hero.statResponse')}</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-emerald-400">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-1">{t('hero.statEscrow')}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
