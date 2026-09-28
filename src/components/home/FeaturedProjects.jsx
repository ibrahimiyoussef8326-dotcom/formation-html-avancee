import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { Briefcase, ArrowRight, Calendar, DollarSign, Sparkles, Building, ChevronRight } from 'lucide-react';

export default function FeaturedProjects() {
  const { projects, navigateTo, setSelectedProjectId, t } = usePlatform();

  // Show first 3 projects for the teaser
  const featured = projects.slice(0, 3);

  const handleOpenProject = (id) => {
    setSelectedProjectId(id);
    navigateTo('freelancer', 'browse-projects');
  };

  return (
    <section id="projects-section" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase">
              <Briefcase className="w-3.5 h-3.5" />
              {t('featured.tag')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t('featured.title')}
            </h2>
            <p className="text-slate-600 text-base">
              {t('featured.subtitle')}
            </p>
          </div>

          <button
            onClick={() => navigateTo('freelancer', 'browse-projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm hover:scale-[1.02] shrink-0 self-start md:self-auto"
          >
            <span>{t('featured.seeAll')} ({projects.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-indigo-400/60 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Client header & badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={proj.clientAvatar}
                      alt={proj.clientName}
                      className="w-8 h-8 rounded-full object-cover border border-white shadow-sm"
                    />
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-slate-800 truncate">{proj.clientName}</p>
                      <p className="text-[10px] text-slate-500 truncate">{proj.clientCompany}</p>
                    </div>
                  </div>
                  {proj.isNew ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-700 animate-pulse">
                      {t('featured.newBadge')}
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">
                      {t('featured.verifiedBadge')}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {proj.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-600 mb-5 line-clamp-3 leading-relaxed">
                  {proj.shortDesc}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.requiredSkills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[10px] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {proj.requiredSkills.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-200 text-slate-600 text-[10px] font-semibold">
                      +{proj.requiredSkills.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer with Budget & CTA */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('featured.budgetAllocated')}</span>
                  <span className="text-sm font-extrabold text-indigo-700">{proj.budget}</span>
                </div>
                <button
                  onClick={() => handleOpenProject(proj.id)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 group-hover:text-indigo-600 transition-colors"
                >
                  <span>{t('featured.viewProject')}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick prompt to post a project */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            {t('featured.haveSimilar')}{' '}
            <button
              onClick={() => navigateTo('client', 'request-service')}
              className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1 ml-1"
            >
              {t('featured.postFree')}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
