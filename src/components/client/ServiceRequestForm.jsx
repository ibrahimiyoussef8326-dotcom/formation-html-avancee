import React, { useState } from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { 
  PlusCircle, 
  Send, 
  Sparkles, 
  DollarSign, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  ArrowLeft, 
  Info,
  Tag,
  Code2,
  FileText
} from 'lucide-react';

export default function ServiceRequestForm() {
  const { addProject, setClientTab, navigateTo, t, language } = usePlatform();

  const [formData, setFormData] = useState({
    title: '',
    serviceType: 'Web Development',
    category: 'web-dev',
    description: '',
    budget: '$5,000',
    deadline: '',
    skillsInput: 'React, Node.js, Tailwind CSS',
    deliverablesInput: 'Responsive web platform, Authenticated dashboard, Deployment'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [createdProject, setCreatedProject] = useState(null);

  // Exact Service Type options required: Web Development, Mobile Development, E-commerce, UI/UX Design, Other
  const serviceTypeOptions = [
    { label: 'Web Development', cat: 'web-dev' },
    { label: 'Mobile Development', cat: 'mobile-dev' },
    { label: 'E-commerce', cat: 'ecommerce' },
    { label: 'UI/UX Design', cat: 'ui-ux' },
    { label: 'Other', cat: 'other' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const skillsArray = formData.skillsInput
      ? formData.skillsInput.split(',').map((s) => s.trim()).filter(Boolean)
      : ['Web Development', 'Fullstack'];

    const deliverablesArray = formData.deliverablesInput
      ? formData.deliverablesInput.split(',').map((d) => d.trim()).filter(Boolean)
      : ['Approved specifications', 'Documented source code'];

    const projectPayload = {
      title: formData.title,
      serviceType: formData.serviceType,
      category: formData.category,
      description: formData.description,
      budget: formData.budget,
      deadline: formData.deadline,
      skills: skillsArray,
      deliverables: deliverablesArray,
    };

    setTimeout(() => {
      const newProj = addProject(projectPayload);
      setIsSubmitting(false);
      setCreatedProject(newProj);
      setShowSuccessBanner(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  // -----------------------------------------------------------
  // CONFIRMATION SCREEN (Requirement 3: "Your project request has been submitted successfully.")
  // -----------------------------------------------------------
  if (showSuccessBanner && createdProject) {
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-xl text-center space-y-6 animate-in fade-in">
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            {t('requestForm.successTag')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {t('requestForm.successTitle')}
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm leading-relaxed">
            Project <strong className="text-slate-900 font-bold">"{createdProject.title}"</strong> {t('requestForm.successText')}
          </p>
        </div>

        {/* Project Summary Card */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left space-y-3 max-w-xl mx-auto">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className="text-xs font-bold text-indigo-600">{createdProject.serviceType}</span>
              <h4 className="font-bold text-slate-900 text-base">{createdProject.title}</h4>
            </div>
            <span className="text-sm font-extrabold text-indigo-700 bg-white px-3 py-1 rounded-xl border border-indigo-100 shadow-sm shrink-0">
              {createdProject.budget}
            </span>
          </div>
          <p className="text-xs text-slate-600 line-clamp-2">{createdProject.shortDesc}</p>
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
            <span>
              Deadline: <strong>{createdProject.deadlineDisplay || createdProject.deadline}</strong>
            </span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              Live in Available Projects
            </span>
          </div>
        </div>

        {/* Action Buttons to navigate according to flows */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={() => navigateTo('freelancer', 'projects')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>{t('requestForm.checkVisibilityBtn')}</span>
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
          
          <button
            onClick={() => setClientTab('overview')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition-all"
          >
            {t('requestForm.manageRequestsBtn')}
          </button>

          <button
            onClick={() => {
              setShowSuccessBanner(false);
              setCreatedProject(null);
              setFormData({
                title: '',
                serviceType: 'Web Development',
                category: 'web-dev',
                description: '',
                budget: '$5,000',
                deadline: '',
                skillsInput: 'React, Node.js, Tailwind CSS',
                deliverablesInput: 'Responsive web platform, Authenticated dashboard, Deployment'
              });
            }}
            className="text-xs text-slate-500 hover:text-slate-800 font-medium py-2"
          >
            {t('requestForm.postAnotherBtn')}
          </button>
        </div>
      </div>
    );
  }

  // -----------------------------------------------------------
  // REQUEST A SERVICE FORM
  // -----------------------------------------------------------
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in">
      
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
        <div>
          <button
            onClick={() => setClientTab('overview')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t('requestForm.backDashboard')}
          </button>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <PlusCircle className="w-8 h-8 text-indigo-600" />
            <span>{t('requestForm.title')}</span>
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            {t('requestForm.subtitle')}
          </p>
        </div>
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        
        {/* Step 1: Project Name & Service Type */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">1</span>
            <h3 className="text-base font-bold text-slate-900">{t('requestForm.step1')}</h3>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {t('requestForm.projectName')} <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder={t('requestForm.projectPlaceholder')}
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 text-slate-900 font-medium text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {t('requestForm.serviceType')} <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {serviceTypeOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.cat}
                  onClick={() => setFormData({ ...formData, serviceType: opt.label, category: opt.cat })}
                  className={`p-3 rounded-xl text-xs font-semibold text-center border transition-all flex flex-col items-center justify-center gap-1.5 ${
                    formData.serviceType === opt.label
                      ? 'border-indigo-600 bg-indigo-50/90 text-indigo-700 shadow-sm font-bold ring-2 ring-indigo-500/20'
                      : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span>{opt.label}</span>
                  {formData.serviceType === opt.label && (
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step 2: Project Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">2</span>
            <h3 className="text-base font-bold text-slate-900">{t('requestForm.step2')}</h3>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {t('requestForm.projectDesc')} <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              placeholder={t('requestForm.descPlaceholder')}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 text-slate-900 text-sm outline-none transition-all resize-y"
            ></textarea>
            <p className="text-[11px] text-slate-400 mt-1">
              {t('requestForm.descTip')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {t('requestForm.skillsLabel')}
              </label>
              <input
                type="text"
                placeholder="e.g., React, Node.js, TypeScript, Tailwind"
                value={formData.skillsInput}
                onChange={(e) => setFormData({ ...formData, skillsInput: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {t('requestForm.deliverablesLabel')}
              </label>
              <input
                type="text"
                placeholder="e.g., GitHub repository, Technical docs, Staging deployment"
                value={formData.deliverablesInput}
                onChange={(e) => setFormData({ ...formData, deliverablesInput: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Budget & Deadline */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">3</span>
            <h3 className="text-base font-bold text-slate-900">{t('requestForm.step3')}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {t('requestForm.budgetLabel')} <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder={t('requestForm.budgetPlaceholder')}
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 text-slate-900 font-bold text-sm outline-none"
                />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['$2,000 - $4,000', '$4,000 - $7,000', '$7,000 - $12,000', '$12,000+'].map((preset) => (
                  <button
                    type="button"
                    key={preset}
                    onClick={() => setFormData({ ...formData, budget: preset })}
                    className="text-[10px] px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {t('requestForm.deadlineLabel')} <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                required
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 text-slate-900 font-medium text-sm outline-none"
              />
              <p className="text-[11px] text-slate-400 mt-2">
                {t('requestForm.deadlineTip')}
              </p>
            </div>
          </div>
        </div>

        {/* Informational banner */}
        <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
          <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <div className="text-xs text-indigo-950 leading-relaxed">
            {t('requestForm.infoBanner')}
          </div>
        </div>

        {/* Submission Actions with exact Button "Publish Request" */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setClientTab('overview')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
          >
            {t('requestForm.cancel')}
          </button>

          {/* REQUIRED MAIN BUTTON: "Publish Request" */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? t('requestForm.submitting') : t('requestForm.submitBtn')}</span>
          </button>
        </div>

      </form>

    </div>
  );
}
