import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Sparkles, 
  Palette, 
  Cpu, 
  ArrowRight, 
  Check, 
  Layers 
} from 'lucide-react';

const ICON_MAP = {
  Globe: Globe,
  Smartphone: Smartphone,
  Cloud: Cloud,
  Sparkles: Sparkles,
  Palette: Palette,
  Cpu: Cpu
};

export default function ServicesSection() {
  const { services, navigateTo, t, language } = usePlatform();

  const handleRequestService = (serviceTitle) => {
    navigateTo('client', 'request-service');
  };

  return (
    <section id="services-section" className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase">
            <Layers className="w-3.5 h-3.5" />
            {t('servicesSection.tag')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('servicesSection.title')}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t('servicesSection.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = ICON_MAP[service.icon] || Globe;

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Price tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-indigo-50 text-indigo-600 p-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {t('servicesSection.startingFrom')} {service.startingPrice}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Features Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-slate-100">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleRequestService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-indigo-600 hover:text-white text-slate-700 font-semibold text-xs border border-slate-200 hover:border-indigo-600 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>{t('servicesSection.orderService')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-850 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">{t('servicesSection.customBannerTitle')}</h3>
            <p className="text-indigo-200 text-sm max-w-xl">
              {t('servicesSection.customBannerSubtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => navigateTo('client', 'request-service')}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all text-center"
            >
              {t('servicesSection.customQuoteBtn')}
            </button>
            <button
              onClick={() => navigateTo('client', 'schedule-meeting')}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all text-center"
            >
              {t('servicesSection.customCallBtn')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
