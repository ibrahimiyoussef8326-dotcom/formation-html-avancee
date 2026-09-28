import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { Calendar, DollarSign, Eye, CheckCircle2, User, Clock, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onOpenDetails }) {
  const { hasApplied, t, language } = usePlatform();
  const applied = hasApplied(project.id);

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group ${
      applied 
        ? 'border-emerald-200 bg-emerald-50/10 shadow-sm'
        : project.isNew
        ? 'border-indigo-300 shadow-md ring-1 ring-indigo-500/20'
        : 'border-slate-200 hover:border-indigo-400 hover:shadow-xl'
    }`}>
      <div className="space-y-4">
        
        {/* Top bar: Client Info & Status Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <img
              src={project.clientAvatar}
              alt={project.clientName}
              className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0"
            />
            <div className="overflow-hidden">
              <h4 className="text-xs font-bold text-slate-900 truncate">
                {project.clientName}
              </h4>
              <p className="text-[11px] text-slate-500 truncate">
                {project.clientCompany}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-1.5">
            {applied ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 border border-emerald-300">
                <CheckCircle2 className="w-3 h-3" />
                {t('freelancer.applicationSent')}
              </span>
            ) : project.isNew ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-100 text-indigo-700 animate-pulse">
                <Sparkles className="w-3 h-3 text-indigo-600" />
                {t('freelancer.newBadge')}
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">
                {project.serviceType}
              </span>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3
          onClick={() => onOpenDetails(project.id)}
          className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer leading-snug line-clamp-2"
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
          {project.shortDesc || project.fullDesc}
        </p>

        {/* Required Skills Badges */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
            {t('freelancer.skillsRequired')}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.requiredSkills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium text-[11px] border border-slate-200/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Card Footer with Budget, Deadline, and "Voir le projet" Button */}
      <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
        
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400 block">
              {t('freelancer.budget')}
            </span>
            <span className="text-sm font-extrabold text-indigo-700">
              {project.budget}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase text-slate-400 block">
              {t('freelancer.deadline')}
            </span>
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{project.deadlineDisplay || project.deadline}</span>
            </span>
          </div>
        </div>

        {/* REQUIRED BUTTON: "Voir le projet" / "View project" */}
        <button
          type="button"
          onClick={() => onOpenDetails(project.id)}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs shadow transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
        >
          <Eye className="w-4 h-4" />
          <span>{t('freelancer.viewProject')}</span>
        </button>

      </div>
    </div>
  );
}
