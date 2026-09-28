import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { FileCheck, Clock, CheckCircle2, ArrowRight, Eye, Briefcase, DollarSign, User, Award } from 'lucide-react';

export default function MyApplications({ onOpenProject }) {
  const { applications, projects, setFreelancerTab } = usePlatform();

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
            <FileCheck className="w-7 h-7 text-indigo-600" />
            <span>My Applications</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
            Track your submitted proposals and review client engagement status.
          </p>
        </div>

        <button
          onClick={() => setFreelancerTab('projects')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition-all self-start sm:self-auto"
        >
          <Briefcase className="w-4 h-4" />
          <span>Explore Available Projects</span>
        </button>
      </div>

      {applications.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No applications submitted yet</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Browse open projects from clients and submit your proposal in one click.
          </p>
          <button
            onClick={() => setFreelancerTab('projects')}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow"
          >
            Browse Available Projects
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {applications.map((app) => {
            const project = projects.find((p) => p.id === app.projectId);

            return (
              <div
                key={app.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Under Client Review
                    </span>
                    <span className="text-xs text-slate-400">
                      Applied on {new Date(app.submittedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {app.projectTitle}
                  </h3>

                  {(app.applicationMessage || app.coverNote) && (
                    <p className="text-xs text-slate-600 line-clamp-2 max-w-xl italic">
                      "{app.applicationMessage || app.coverNote}"
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                    {app.skills && (
                      <span className="bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded-md">
                        Skills: {app.skills}
                      </span>
                    )}
                    {app.experience && (
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                        {app.experience}
                      </span>
                    )}
                    <span className="text-slate-500">
                      Client: <strong>{app.clientName}</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project && (
                    <button
                      onClick={() => onOpenProject(project.id)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project Details</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
