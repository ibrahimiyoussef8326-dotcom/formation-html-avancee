import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { Clock, Calendar, Video, Building, PlusCircle, CheckCircle2, User, ExternalLink } from 'lucide-react';

export default function ClientAppointmentsList() {
  const { appointments, setClientTab } = usePlatform();

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
            <Clock className="w-7 h-7 text-indigo-600" />
            <span>My Appointments</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
            View and manage your scheduled discovery meetings with our development team.
          </p>
        </div>

        <button
          onClick={() => setClientTab('appointments')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Book an Appointment</span>
        </button>
      </div>

      {appointments.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No appointments scheduled</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Schedule a 30-minute discovery session with our engineering team to review feasibility and timelines.
          </p>
          <button
            onClick={() => setClientTab('appointments')}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow"
          >
            Book an Appointment
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {appointments.map((apt) => (
            <div
              key={apt.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Confirmed Session
                  </span>
                  <span className="text-xs text-slate-400">
                    Created on {new Date(apt.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {apt.typeTitle || apt.meetingType}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
                    <Calendar className="w-4 h-4 text-indigo-600" />
                    <span>
                      {new Date(apt.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <span>{apt.timeSlot}</span>
                  </div>
                </div>

                {apt.notes && (
                  <p className="text-xs text-slate-500 italic max-w-xl">
                    Agenda: "{apt.notes}"
                  </p>
                )}
              </div>

              <div className="flex sm:flex-col md:flex-row items-center gap-3 shrink-0">
                {apt.meetingType === 'Online Meeting' ? (
                  <a
                    href={apt.meetUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all"
                  >
                    <Video className="w-4 h-4" />
                    <span>Join Video Meeting</span>
                    <ExternalLink className="w-3 h-3 text-indigo-200" />
                  </a>
                ) : (
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-4 py-2.5 rounded-xl flex items-center gap-2 border border-slate-200">
                    <Building className="w-4 h-4 text-indigo-600" />
                    <span>On-site Tech Studio</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
