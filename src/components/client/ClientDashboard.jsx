import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import ServiceRequestForm from './ServiceRequestForm';
import AppointmentBooking from './AppointmentBooking';
import ClientProjectsList from './ClientProjectsList';
import ClientAppointmentsList from './ClientAppointmentsList';
import ClientProfile from './ClientProfile';
import { 
  PlusCircle, 
  Calendar, 
  FolderKanban, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Users, 
  TrendingUp, 
  Layers,
  Video,
  ShieldCheck,
  Building
} from 'lucide-react';

export default function ClientDashboard() {
  const { clientTab, setClientTab, projects, appointments, navigateTo, t, language } = usePlatform();

  // If on a dedicated sub-view, render that specific component
  if (clientTab === 'request-service') {
    return <ServiceRequestForm />;
  }
  if (clientTab === 'appointments' || clientTab === 'schedule-meeting') {
    return <AppointmentBooking />;
  }
  if (clientTab === 'my-projects') {
    return <ClientProjectsList />;
  }
  if (clientTab === 'my-appointments') {
    return <ClientAppointmentsList />;
  }
  if (clientTab === 'profile') {
    return <ClientProfile />;
  }

  // Otherwise, render the main Overview dashboard
  const clientProjects = projects.filter(
    (p) => p.clientName.includes('Client') || p.clientName.includes('Alex') || p.clientName.includes('Moi') || p.isNew
  );
  const totalProposals = projects.reduce((acc, p) => acc + (p.proposalsCount || 0), 0);

  return (
    <div className="space-y-10 animate-in fade-in">
      
      {/* Top Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-850 to-slate-900 text-white p-8 sm:p-10 shadow-xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{t('client.bannerTag')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('client.bannerTitle')}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('client.bannerSubtitle')}
          </p>
        </div>
      </div>

      {/* THE TWO MAIN CARDS REQUESTED IN PROMPT */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>{t('client.mainActions')}</span>
          </h2>
          <span className="text-xs text-slate-400">{t('client.selectStep')}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Request a Service */}
          <div
            onClick={() => setClientTab('request-service')}
            className="group cursor-pointer bg-white rounded-3xl p-7 border-2 border-indigo-100 hover:border-indigo-600 hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-50 rounded-full -mr-12 -mt-12 group-hover:scale-125 transition-transform"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/25 group-hover:scale-105 transition-transform">
                  <PlusCircle className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Step 1
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                Request a Service
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Describe your project and tell us what you need.
              </p>

              <div className="space-y-1.5 text-xs text-slate-500 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t('client.action1Bullet1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t('client.action1Bullet2')}</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Request a Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Book an Appointment */}
          <div
            onClick={() => setClientTab('appointments')}
            className="group cursor-pointer bg-white rounded-3xl p-7 border-2 border-blue-100 hover:border-blue-600 hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-50 rounded-full -mr-12 -mt-12 group-hover:scale-125 transition-transform"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/25 group-hover:scale-105 transition-transform">
                  <Calendar className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  Step 2
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Book an Appointment
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Schedule a meeting with our development team.
              </p>

              <div className="space-y-1.5 text-xs text-slate-500 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t('client.action2Bullet1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t('client.action2Bullet2')}</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">{t('client.metricPublished')}</span>
            <FolderKanban className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">{clientProjects.length}</div>
          <p className="text-[11px] text-slate-500">Live in Available Projects</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">{t('client.metricAppointments')}</span>
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">{appointments.length}</div>
          <p className="text-[11px] text-slate-500">Confirmed sessions</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">{t('client.metricProposals')}</span>
            <Users className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">{totalProposals}</div>
          <p className="text-[11px] text-slate-500">Interested developers</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">{t('client.metricStatus')}</span>
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-xl font-bold text-emerald-600">{t('client.statusVerified')}</div>
          <p className="text-[11px] text-slate-500">Escrow payments active</p>
        </div>
      </div>

      {/* Two Columns: Recent Projects & Upcoming Appointments as Visual Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Recent Client Projects Visual Cards */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <FolderKanban className="w-5 h-5 text-indigo-600" />
              <span>{t('client.recentPublished')}</span>
            </h3>
            <button
              onClick={() => setClientTab('my-projects')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
            >
              {t('client.seeAll')}
            </button>
          </div>

          <div className="space-y-3">
            {clientProjects.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/70 transition-all flex items-center justify-between gap-4"
              >
                <div className="overflow-hidden space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">
                      {proj.serviceType}
                    </span>
                    {proj.isNew && (
                      <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 truncate">{proj.title}</h4>
                  <span className="text-[11px] text-slate-500 block">
                    Budget: {proj.budget} • {proj.proposalsCount || 0} applications
                  </span>
                </div>

                <button
                  onClick={() => setClientTab('my-projects')}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 shrink-0"
                >
                  {t('client.details')}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments Visual Cards */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span>{t('client.upcomingApts')}</span>
            </h3>
            <button
              onClick={() => setClientTab('appointments')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
            >
              {t('client.seeAll')}
            </button>
          </div>

          <div className="space-y-3">
            {appointments.slice(0, 3).map((apt) => (
              <div
                key={apt.id}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/70 transition-all flex items-center justify-between gap-4"
              >
                <div className="overflow-hidden space-y-1">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                    Confirmed
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 truncate">{apt.typeTitle || apt.meetingType}</h4>
                  <span className="text-[11px] text-slate-600 block">
                    {new Date(apt.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {apt.timeSlot}
                  </span>
                </div>

                <button
                  onClick={() => setClientTab('appointments')}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 shrink-0 flex items-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Details</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
