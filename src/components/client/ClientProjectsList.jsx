import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { FolderKanban, PlusCircle, ArrowRight, Eye, Users, Calendar, DollarSign, Sparkles } from 'lucide-react';

export default function ClientProjectsList() {
  const { projects, setClientTab, setSelectedProjectId, navigateTo, language } = usePlatform();

  // All client projects or fallback to all projects for realistic demo
  const clientProjects = projects.filter(
    (p) => p.clientName.includes('Client') || p.clientName.includes('Alex') || p.clientName.includes('Sarah') || p.isNew
  );

  const displayList = clientProjects.length > 0 ? clientProjects : projects;

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
            <FolderKanban className="w-7 h-7 text-indigo-600" />
            <span>My Projects</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
            Manage your submitted development requests and track developer applications.
          </p>
        </div>

        <button
          onClick={() => setClientTab('request-service')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Request a Service</span>
        </button>
      </div>

      {displayList.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
            <FolderKanban className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No projects requested yet</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Describe your project requirements now to start receiving applications from qualified developers.
          </p>
          <button
            onClick={() => setClientTab('request-service')}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow"
          >
            Request a Service
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {displayList.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {proj.serviceType}
                  </span>
                  {proj.isNew && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-700 animate-pulse">
                      Recently Published
                    </span>
                  )}
                  <span className="text-xs text-slate-400">
                    Posted on {new Date(proj.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 hover:text-indigo-600 cursor-pointer">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 max-w-2xl leading-relaxed">
                  {proj.shortDesc || proj.fullDesc}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="font-extrabold text-indigo-700 bg-indigo-50/60 px-2.5 py-1 rounded-lg">
                    Budget: {proj.budget}
                  </span>
                  <span>
                    Deadline: <strong>{proj.deadlineDisplay || proj.deadline}</strong>
                  </span>
                  <span className="flex items-center gap-1 text-slate-700 font-semibold">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    {proj.proposalsCount || 0} application(s) received
                  </span>
                </div>
              </div>

              <div className="flex sm:flex-col md:flex-row items-center gap-2 shrink-0">
                <button
                  onClick={() => {
                    setSelectedProjectId(proj.id);
                    navigateTo('freelancer', 'projects');
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
