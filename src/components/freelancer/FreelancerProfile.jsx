import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { UserCheck, Star, ShieldCheck, Award, Code, CheckCircle2, GitBranch, Terminal } from 'lucide-react';

export default function FreelancerProfile() {
  const { applications } = usePlatform();

  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in">
      {/* Profile Card Header */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white font-extrabold text-3xl flex items-center justify-center shadow-lg shadow-indigo-600/30 shrink-0">
          FL
        </div>
        <div className="space-y-2 text-center md:text-left flex-1">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <h2 className="text-2xl font-black text-slate-900">Alexandre Lefebvre</h2>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Top Rated Developer
            </span>
          </div>
          <p className="text-slate-600 text-sm font-medium">
            Senior Fullstack Engineer & Cloud Architect (9+ years experience)
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              4.98 / 5.0 (38 completed client projects)
            </span>
            <span>•</span>
            <span className="font-bold text-slate-800">Rate: $650 / day or fixed milestone</span>
            <span>•</span>
            <span className="text-emerald-600 font-bold">Available immediately</span>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
            <Code className="w-5 h-5 text-indigo-600" />
            <span>Verified Technical Skills</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'React.js / Next.js',
              'TypeScript',
              'Node.js / Express',
              'Python / FastAPI',
              'PostgreSQL & Supabase',
              'Tailwind CSS',
              'Docker & AWS',
              'GraphQL & REST APIs',
              'Stripe Payments & LLMs'
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            <span>Platform Track Record</span>
          </h3>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl font-black text-slate-900">100%</div>
              <span className="text-[11px] text-slate-500">Job Success Score</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl font-black text-indigo-600">{applications.length}</div>
              <span className="text-[11px] text-slate-500">Active Applications</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl font-black text-blue-600">&lt; 1 hour</div>
              <span className="text-[11px] text-slate-500">Avg. Response Time</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-2xl font-black text-emerald-600">38</div>
              <span className="text-[11px] text-slate-500">Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
