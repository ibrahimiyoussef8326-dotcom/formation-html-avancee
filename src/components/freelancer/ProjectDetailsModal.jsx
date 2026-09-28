import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { 
  X, 
  Send, 
  Clock, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  Building, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Share2, 
  CheckSquare, 
  ArrowLeft 
} from 'lucide-react';

export default function ProjectDetailsModal({ project, onClose, onApplyClick }) {
  const { hasApplied, applications, t, language } = usePlatform();

  if (!project) return null;

  const applied = hasApplied(project.id);
  const myApplication = applications.find((a) => a.projectId === project.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8">
        
        {/* Modal Top Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {project.serviceType}
            </span>
            {project.isNew && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
                New Project
              </span>
            )}
            <span className="text-xs text-slate-400">
              Posted on {new Date(project.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight pr-8">
            {project.title}
          </h2>

          {/* Client Info in Header */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-3">
            <img
              src={project.clientAvatar}
              alt={project.clientName}
              className="w-10 h-10 rounded-full object-cover border border-slate-700"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-200">{project.clientName}</span>
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <span className="text-[11px] text-slate-400">{project.clientCompany}</span>
            </div>
          </div>
        </div>

        {/* Modal Body: Complete Project Information */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          
          {/* Key Metrics Bar: Budget, Deadline, Proposals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">
                Budget
              </span>
              <span className="text-lg font-black text-indigo-700">{project.budget}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">
                Deadline
              </span>
              <span className="text-sm font-bold text-slate-800 flex items-center gap-1">
                <Clock className="w-4 h-4 text-indigo-600" />
                {project.deadlineDisplay || project.deadline}
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">
                Applications
              </span>
              <span className="text-sm font-bold text-slate-800">
                {project.proposalsCount || 0} received
              </span>
            </div>
          </div>

          {/* Already applied banner */}
          {applied && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1">
              <div className="flex items-center gap-2 font-bold text-xs text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  You have already applied to this project!
                </span>
              </div>
              <p className="text-[11px] text-emerald-700">
                Your application is currently under review by {project.clientName}.
              </p>
            </div>
          )}

          {/* Full project description */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Full Project Description
            </h3>
            <div className="text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line">
              {project.fullDesc || project.shortDesc}
            </div>
          </div>

          {/* Required Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Required Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.requiredSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Expected Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Expected Deliverables
              </h3>
              <div className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                    <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Required Button "Apply to Project" */}
        <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-white transition-colors"
          >
            {t('projectDetails.backToList')}
          </button>

          {/* REQUIRED BUTTON: "Apply to Project" */}
          {applied ? (
            <button
              disabled
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 text-white font-extrabold text-sm opacity-90 cursor-not-allowed flex items-center justify-center gap-2 shadow"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{t('projectDetails.appliedBtn')}</span>
            </button>
          ) : (
            <button
              onClick={() => onApplyClick(project)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Apply to Project</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
