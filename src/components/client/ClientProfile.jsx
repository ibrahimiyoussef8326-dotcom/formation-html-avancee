import React from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { 
  Building2, 
  ShieldCheck, 
  Mail, 
  Globe, 
  MapPin, 
  FolderKanban, 
  Calendar, 
  CreditCard, 
  CheckCircle2, 
  FileText, 
  ExternalLink,
  PlusCircle
} from 'lucide-react';

export default function ClientProfile() {
  const { projects, appointments, setClientTab } = usePlatform();

  const clientProjects = projects.filter(
    (p) => p.clientName.includes('Client') || p.clientName.includes('Alex') || p.isNew
  );

  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in">
      
      {/* Header Profile Card */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-blue-600 text-white font-black text-3xl flex items-center justify-center shadow-lg shadow-indigo-600/25 shrink-0">
          CL
        </div>
        <div className="space-y-2 text-center md:text-left flex-1">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <h2 className="text-2xl font-black text-slate-900">Alex Vance</h2>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Client Account
            </span>
          </div>
          <p className="text-slate-600 text-sm font-medium">
            VP of Product & Technology at <strong className="text-slate-800">TechCorp Innovations Inc.</strong>
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              alex.vance@techcorp.io
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              San Francisco, CA / Remote
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              techcorp.io
            </span>
          </div>
        </div>

        <button
          onClick={() => setClientTab('request-service')}
          className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2 shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>New Project Request</span>
        </button>
      </div>

      {/* Account Highlights & Security */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Active Projects</span>
            <FolderKanban className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">{clientProjects.length}</div>
          <p className="text-xs text-slate-500">Visible to vetted freelancers</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Scheduled Meetings</span>
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">{appointments.length}</div>
          <p className="text-xs text-slate-500">Discovery & strategy sessions</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Escrow Protection</span>
            <CreditCard className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-xl font-bold text-emerald-600 flex items-center gap-1.5">
            <CheckCircle2 className="w-5 h-5" />
            <span>Active & Funded</span>
          </div>
          <p className="text-xs text-slate-500">100% Milestone-based release</p>
        </div>
      </div>

      {/* Verification & Compliance */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-600" />
          <span>Security, Compliance & Contracting</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-800">Master Services Agreement (MSA)</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Signed and verified for intellectual property protection.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-800">Mutual NDA Active</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">All shared project briefs remain strictly confidential.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-800">Verified Corporate Billing</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Automated VAT invoices and SEPA / Stripe payment support.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-800">Dedicated Account Manager</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">Direct technical advisory and developer vetting assistance.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
