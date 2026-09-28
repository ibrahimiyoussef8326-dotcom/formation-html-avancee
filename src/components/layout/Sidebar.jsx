import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Calendar, 
  FolderKanban, 
  Briefcase, 
  FileCheck, 
  UserCheck, 
  ArrowLeft, 
  Repeat, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function Sidebar({ role }) {
  const { 
    clientTab, 
    setClientTab, 
    freelancerTab, 
    setFreelancerTab, 
    navigateTo, 
    projects, 
    appointments, 
    applications,
    t,
    language 
  } = usePlatform();

  const isClient = role === 'client';

  // Client Sidebar items requested: Dashboard, My Projects, Request a Service, Appointments, Profile
  const clientNavItems = [
    {
      id: 'overview',
      label: t('sidebar.navDashboard'),
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'my-projects',
      label: t('sidebar.navMyProjects'),
      icon: FolderKanban,
      badge: projects.filter(p => p.clientName.includes('Client') || p.clientName.includes('Alex') || p.clientName.includes('Moi') || p.isNew).length || projects.length,
    },
    {
      id: 'request-service',
      label: t('sidebar.navRequestService'),
      icon: PlusCircle,
      badge: language === 'en' ? 'New' : 'Nouveau',
      highlight: true
    },
    {
      id: 'appointments',
      label: t('sidebar.navAppointments'),
      icon: Calendar,
      badge: appointments.length,
    },
    {
      id: 'profile',
      label: t('sidebar.navProfile'),
      icon: UserCheck,
      badge: language === 'en' ? 'Verified' : 'Vérifié',
    }
  ];

  // Freelancer Sidebar items requested: Dashboard, Projects, My Applications, Profile
  const freelancerNavItems = [
    {
      id: 'overview',
      label: t('sidebar.navDashboard'),
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'projects',
      label: t('sidebar.navProjects'),
      icon: Briefcase,
      badge: projects.length,
      highlight: true
    },
    {
      id: 'my-applications',
      label: t('sidebar.navMyApplications'),
      icon: FileCheck,
      badge: applications.length,
    },
    {
      id: 'profile',
      label: t('sidebar.navProfile'),
      icon: UserCheck,
      badge: language === 'en' ? 'Top Rated' : 'Top Talent',
    },
  ];

  const navItems = isClient ? clientNavItems : freelancerNavItems;
  const currentTab = isClient ? clientTab : freelancerTab;
  const setTab = isClient ? setClientTab : setFreelancerTab;

  return (
    <aside className="w-full lg:w-72 bg-white border-r border-slate-200/80 p-5 flex flex-col justify-between shrink-0 shadow-sm">
      <div className="space-y-6">
        
        {/* User Role Card */}
        <div className={`p-4 rounded-2xl border transition-all ${
          isClient 
            ? 'bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/50 border-indigo-200/80 shadow-sm'
            : 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white border-slate-800 shadow-md'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${
              isClient 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                : 'bg-indigo-500 text-white shadow-md shadow-indigo-500/30'
            }`}>
              {isClient ? 'CL' : 'FL'}
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center gap-1.5">
                <span className={`text-[11px] font-bold uppercase tracking-wider ${isClient ? 'text-indigo-600' : 'text-indigo-400'}`}>
                  {isClient ? t('sidebar.clientSpace') : t('sidebar.freelancerSpace')}
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <h3 className={`text-sm font-extrabold truncate ${isClient ? 'text-slate-900' : 'text-white'}`}>
                {isClient ? t('sidebar.clientSubtitle') : t('sidebar.freelancerSubtitle')}
              </h3>
              <p className={`text-[11px] truncate ${isClient ? 'text-slate-500' : 'text-slate-400'}`}>
                {isClient ? t('sidebar.verifiedClient') : t('sidebar.freelancerAvail')}
              </p>
            </div>
          </div>

          {/* Quick toggle to the other role */}
          <button
            onClick={() => navigateTo(isClient ? 'freelancer' : 'client', isClient ? 'projects' : 'overview')}
            className={`mt-3 w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all border ${
              isClient
                ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm'
                : 'bg-white/10 hover:bg-white/15 text-white border-white/10'
            }`}
          >
            <Repeat className="w-3.5 h-3.5 text-indigo-400" />
            <span>{isClient ? t('sidebar.switchToFreelance') : t('sidebar.switchToClient')}</span>
          </button>
        </div>

        {/* Navigation items list */}
        <div className="space-y-1.5">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 pb-1">
            {t('sidebar.menu')}
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all text-left ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : item.highlight ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== null && item.badge !== undefined && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : item.highlight
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Quick highlight banner */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>{isClient ? t('sidebar.guaranteeTitleClient') : t('sidebar.guaranteeTitleFreelance')}</span>
          </div>
          <p className="text-slate-500 leading-relaxed text-[11px]">
            {isClient ? t('sidebar.guaranteeTextClient') : t('sidebar.guaranteeTextFreelance')}
          </p>
        </div>

      </div>

      {/* Sidebar Footer */}
      <div className="pt-6 border-t border-slate-200 space-y-2">
        <button
          onClick={() => navigateTo('home')}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-slate-400" />
          <span>{t('sidebar.backHome')}</span>
        </button>
      </div>
    </aside>
  );
}
