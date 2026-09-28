import React, { useState } from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { X, Send, Sparkles, User, Briefcase, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ApplicationModal({ project, isOpen, onClose }) {
  const { submitApplication, setFreelancerTab, t, language } = usePlatform();

  const [formData, setFormData] = useState({
    name: 'Alexandre Lefebvre',
    skills: project ? project.requiredSkills.join(', ') : 'React, TypeScript, Node.js',
    experience: '8+ years of Fullstack & Cloud Engineering experience',
    applicationMessage: 'Hello! I reviewed your project requirements and have built similar production solutions. I can deliver this with high code quality and clear milestone communication.'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !project) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      submitApplication(project.id, formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  // ----------------------------------------------------
  // CONFIRMATION SCREEN (Requirement 7: "Application submitted successfully.")
  // ----------------------------------------------------
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
        <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
              Confirmed
            </span>
            <h3 className="text-2xl font-black text-slate-900">
              Application submitted successfully.
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
              Your proposal for <strong className="text-slate-900">"{project.title}"</strong> has been sent to the client.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-left space-y-2 text-xs">
            <div className="flex justify-between items-center text-slate-500">
              <span>Applicant Name:</span>
              <strong className="text-slate-800">{formData.name}</strong>
            </div>
            <div className="flex justify-between items-center text-slate-500">
              <span>Skills:</span>
              <span className="text-slate-800 truncate max-w-[200px]">{formData.skills}</span>
            </div>
            <div className="flex justify-between items-center text-slate-500">
              <span>Experience:</span>
              <span className="text-slate-800 truncate max-w-[200px]">{formData.experience}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                setFreelancerTab('my-applications');
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-1.5"
            >
              <span>View My Applications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition-colors"
            >
              Back to Available Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // APPLICATION FORM (Fields: Name, Skills, Experience, Application message)
  // ----------------------------------------------------
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-1">
            Application Form
          </span>
          <h3 className="text-2xl font-black text-white">
            Apply to Project
          </h3>
          <p className="text-sm text-slate-300 mt-1 truncate">
            {project.title}
          </p>
        </div>

        {/* Form Body with exact requested fields: Name, Skills, Experience, Application message */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          
          {/* Field 1: Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Alexandre Lefebvre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none font-medium"
            />
          </div>

          {/* Field 2: Skills */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Skills <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g., React, Node.js, TypeScript, PostgreSQL, Tailwind CSS"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none font-medium"
            />
          </div>

          {/* Field 3: Experience */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Experience <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g., 8+ years Senior Fullstack Engineer, built 5+ SaaS web apps"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none font-medium"
            />
          </div>

          {/* Field 4: Application message */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Application message <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Describe why you are the ideal developer for this project, your approach, and timeline..."
              value={formData.applicationMessage}
              onChange={(e) => setFormData({ ...formData, applicationMessage: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none resize-none leading-relaxed"
            ></textarea>
          </div>

          {/* Action buttons with exact Button "Send Application" */}
          <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>

            {/* REQUIRED BUTTON: "Send Application" */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow-md shadow-indigo-600/25 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending...' : 'Send Application'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
