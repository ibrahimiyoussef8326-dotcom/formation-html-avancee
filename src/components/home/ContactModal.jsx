import React, { useState } from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { X, Send, Mail, CheckCircle2, Phone, MapPin } from 'lucide-react';

export default function ContactModal() {
  const { isContactModalOpen, setIsContactModalOpen, addToast, t, language } = usePlatform();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isContactModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsContactModalOpen(false);
      const msg = language === 'en'
        ? 'Your message has been sent successfully! Our team will respond within 2 hours.'
        : 'Votre message a bien été envoyé ! Notre équipe vous répondra sous 2h.';
      addToast(msg, 'success');
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={() => setIsContactModalOpen(false)}
            className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-1">
            {t('contactModal.tag')}
          </span>
          <h3 className="text-2xl font-black text-white">{t('contactModal.title')}</h3>
          <p className="text-sm text-slate-300 mt-1">
            {t('contactModal.subtitle')}
          </p>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('contactModal.fullName')}
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Claire Valéry"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('contactModal.email')}
              </label>
              <input
                type="email"
                required
                placeholder="claire@entreprise.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              {t('contactModal.subject')}
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none bg-white transition-all"
            >
              <option value="general">{t('contactModal.subjectGeneral')}</option>
              <option value="project">{t('contactModal.subjectProject')}</option>
              <option value="freelance">{t('contactModal.subjectFreelance')}</option>
              <option value="billing">{t('contactModal.subjectBilling')}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              {t('contactModal.messageLabel')}
            </label>
            <textarea
              required
              rows={4}
              placeholder={t('contactModal.messagePlaceholder')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              {t('contactModal.guarantee')}
            </span>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                {t('contactModal.cancel')}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-md shadow-indigo-600/20 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? t('contactModal.sending') : t('contactModal.sendBtn')}</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}
