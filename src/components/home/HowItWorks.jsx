import React, { useState } from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { 
  FileEdit, 
  Calendar, 
  Rocket, 
  CheckCircle2, 
  Search, 
  Send, 
  Code, 
  CreditCard,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('client'); // 'client' or 'freelancer'
  const { navigateTo, t } = usePlatform();

  const clientSteps = [
    {
      step: '01',
      title: t('howItWorks.clientStep1Title'),
      desc: t('howItWorks.clientStep1Desc'),
      icon: FileEdit,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      step: '02',
      title: t('howItWorks.clientStep2Title'),
      desc: t('howItWorks.clientStep2Desc'),
      icon: Calendar,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      step: '03',
      title: t('howItWorks.clientStep3Title'),
      desc: t('howItWorks.clientStep3Desc'),
      icon: CheckCircle2,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      step: '04',
      title: t('howItWorks.clientStep4Title'),
      desc: t('howItWorks.clientStep4Desc'),
      icon: Rocket,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    }
  ];

  const freelancerSteps = [
    {
      step: '01',
      title: t('howItWorks.freelanceStep1Title'),
      desc: t('howItWorks.freelanceStep1Desc'),
      icon: Search,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      step: '02',
      title: t('howItWorks.freelanceStep2Title'),
      desc: t('howItWorks.freelanceStep2Desc'),
      icon: Send,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      step: '03',
      title: t('howItWorks.freelanceStep3Title'),
      desc: t('howItWorks.freelanceStep3Desc'),
      icon: Code,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      step: '04',
      title: t('howItWorks.freelanceStep4Title'),
      desc: t('howItWorks.freelanceStep4Desc'),
      icon: CreditCard,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    }
  ];

  const currentSteps = activeTab === 'client' ? clientSteps : freelancerSteps;

  return (
    <section id="about-section" className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            {t('howItWorks.tag')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('howItWorks.title')}
          </h2>
          <p className="text-slate-600 text-base">
            {t('howItWorks.subtitle')}
          </p>

          {/* Toggle pills */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm mt-4">
            <button
              onClick={() => setActiveTab('client')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'client'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('howItWorks.tabClient')}
            </button>
            <button
              onClick={() => setActiveTab('freelancer')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'freelancer'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('howItWorks.tabFreelance')}
            </button>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center font-bold ${s.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 select-none">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600">
                  <span>{t('howItWorks.stepIndicator')} {idx + 1} {t('howItWorks.of')} 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action button based on active tab */}
        <div className="mt-14 text-center">
          {activeTab === 'client' ? (
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => navigateTo('client', 'request-service')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/25 transition-all hover:scale-105"
              >
                <span>{t('howItWorks.btnPostService')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateTo('client', 'schedule-meeting')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm transition-all"
              >
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span>{t('howItWorks.btnScheduleCall')}</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigateTo('freelancer', 'browse-projects')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-lg shadow-slate-900/25 transition-all hover:scale-105"
            >
              <span>{t('howItWorks.btnBrowseOpen')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
