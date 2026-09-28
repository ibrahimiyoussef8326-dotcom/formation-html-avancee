import React, { useState } from 'react';
import { usePlatform } from '../../context/PlatformContext';
import { MEETING_TYPES, TIME_SLOTS, TEAM_MEMBERS } from '../../data/initialData';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Building,
  CheckCircle2, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Mail, 
  FileText, 
  ShieldCheck, 
  Sparkles,
  CalendarCheck,
  MapPin
} from 'lucide-react';

export default function AppointmentBooking() {
  const { bookAppointment, setClientTab, appointments, t, language } = usePlatform();

  // Wizard state: Meeting type options required: "Online Meeting" or "In-person Meeting"
  const [meetingType, setMeetingType] = useState('Online Meeting'); // 'Online Meeting' | 'In-person Meeting'

  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[1]);
  const [clientInfo, setClientInfo] = useState({
    name: 'Alex Vance',
    email: 'alex.vance@techcorp.io',
    notes: 'Project scoping session to align on tech stack, budget estimation, and milestones.'
  });

  // Calendar month state
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date());

  // Confirmation screen state
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Generate calendar days for the current month
  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 is Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handlePrevMonth = () => {
    setCurrentMonthDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthDate(new Date(year, month + 1, 1));
  };

  const handleConfirmAppointment = (e) => {
    e.preventDefault();

    const bookingPayload = {
      typeId: meetingType === 'In-person Meeting' ? 'in-person-meeting' : 'online-meeting',
      typeTitle: meetingType,
      meetingType: meetingType,
      duration: meetingType === 'In-person Meeting' ? '45 min' : '30 min',
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      clientName: clientInfo.name,
      clientEmail: clientInfo.email,
      notes: clientInfo.notes,
      assignedLead: TEAM_MEMBERS[0]
    };

    const result = bookAppointment(bookingPayload);
    setConfirmedBooking(result);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ----------------------------------------------------
  // CONFIRMATION SCREEN (Requirement 4: "Your appointment has been confirmed.")
  // ----------------------------------------------------
  if (confirmedBooking) {
    return (
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in">
        
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CalendarCheck className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300">
              {t('appointment.confirmedTag')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {t('appointment.confirmedTitle')}
            </h2>
            <p className="text-slate-600 max-w-md mx-auto text-sm">
              {t('appointment.confirmedSubtitle')}{' '}
              <span className="font-bold text-slate-900">{confirmedBooking.clientEmail}</span>.
            </p>
          </div>

          {/* Appointment Ticket Details */}
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50/40 rounded-2xl p-6 border border-slate-200 text-left space-y-4 max-w-xl mx-auto">
            
            <div className="flex items-start justify-between border-b border-slate-200/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase text-indigo-600 tracking-wider">
                  {t('appointment.sessionType')}
                </span>
                <h4 className="font-extrabold text-slate-900 text-base">
                  {confirmedBooking.meetingType}
                </h4>
                <span className="text-xs text-slate-500 font-medium">
                  {t('appointment.estimatedDuration')}: {confirmedBooking.duration || '30 min'}
                </span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                {t('appointment.confirmedBadge')}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-b border-slate-200/80 text-sm">
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-5 h-5 text-indigo-600 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">{t('appointment.dateLabel')}</span>
                  <span className="font-bold text-slate-800">
                    {new Date(confirmedBooking.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">{t('appointment.timeSlotLabel')}</span>
                  <span className="font-bold text-slate-800">{confirmedBooking.timeSlot}</span>
                </div>
              </div>
            </div>

            {/* Meet link or Location box */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  {confirmedBooking.meetingType === 'In-person Meeting' ? (
                    <Building className="w-4 h-4" />
                  ) : (
                    <Video className="w-4 h-4" />
                  )}
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] text-slate-400 block font-medium">{t('appointment.meetLinkLabel')}</span>
                  <span className="text-xs font-mono font-bold text-indigo-600 truncate block">
                    {confirmedBooking.meetUrl}
                  </span>
                </div>
              </div>
              {confirmedBooking.meetingType === 'Online Meeting' && (
                <a
                  href={confirmedBooking.meetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-colors shrink-0"
                >
                  {t('appointment.joinBtn')}
                </a>
              )}
            </div>

            {/* Team Host */}
            <div className="flex items-center gap-3 pt-2">
              <img
                src={TEAM_MEMBERS[0].avatar}
                alt={TEAM_MEMBERS[0].name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div>
                <span className="text-xs font-bold text-slate-800 block">
                  {t('appointment.hostedBy')} {TEAM_MEMBERS[0].name}
                </span>
                <span className="text-[11px] text-slate-500">
                  {TEAM_MEMBERS[0].role}
                </span>
              </div>
            </div>

          </div>

          {/* Action buttons on confirmation screen */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => {
                const title = encodeURIComponent(`${confirmedBooking.meetingType} with DevPulse`);
                const details = encodeURIComponent(`Meeting with DevPulse engineering team.\nDetails: ${confirmedBooking.meetUrl}`);
                const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${encodeURIComponent(confirmedBooking.meetUrl)}`;
                window.open(googleCalUrl, '_blank');
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <CalendarIcon className="w-4 h-4" />
              <span>{t('appointment.addToGoogleCalendar')}</span>
            </button>
            <button
              onClick={() => setClientTab('overview')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition-colors"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => {
                setConfirmedBooking(null);
              }}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-medium"
            >
              {t('appointment.bookAnother')}
            </button>
          </div>

        </div>

      </div>
    );
  }

  // ----------------------------------------------------
  // CALENDAR BOOKING INTERFACE (Interactive Selection)
  // ----------------------------------------------------
  return (
    <div className="max-w-5xl mx-auto animate-in fade-in">
      
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
        <div>
          <button
            onClick={() => setClientTab('overview')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t('appointment.backDashboard')}
          </button>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <CalendarIcon className="w-8 h-8 text-indigo-600" />
            <span>{t('appointment.title')}</span>
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            {t('appointment.subtitle')}
          </p>
        </div>
      </div>

      <form onSubmit={handleConfirmAppointment} className="space-y-8">
        
        {/* STEP 1: MEETING TYPE (Online Meeting, In-person Meeting) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">1</span>
              <h3 className="text-base font-bold text-slate-900">{t('appointment.step1')}</h3>
            </div>
            <span className="text-xs text-slate-400 font-medium">{t('appointment.freeSession')}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Option 1: Online Meeting */}
            <div
              onClick={() => setMeetingType('Online Meeting')}
              className={`cursor-pointer p-5 rounded-2xl border transition-all relative flex flex-col justify-between ${
                meetingType === 'Online Meeting'
                  ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-600/20 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    meetingType === 'Online Meeting' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                    30 min
                  </span>
                </div>

                <h4 className="text-base font-black text-slate-900 mb-1">
                  Online Meeting
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Video conference via Google Meet. Perfect for rapid scoping, requirement discovery, and reviewing technical architecture.
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 text-xs">
                <span className="text-[11px] font-bold text-indigo-600">
                  Google Meet / Remote
                </span>
                {meetingType === 'Online Meeting' ? (
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-slate-300"></span>
                )}
              </div>
            </div>

            {/* Option 2: In-person Meeting */}
            <div
              onClick={() => setMeetingType('In-person Meeting')}
              className={`cursor-pointer p-5 rounded-2xl border transition-all relative flex flex-col justify-between ${
                meetingType === 'In-person Meeting'
                  ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-600/20 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    meetingType === 'In-person Meeting' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Building className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                    45 min
                  </span>
                </div>

                <h4 className="text-base font-black text-slate-900 mb-1">
                  In-person Meeting
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Face-to-face workshop at our DevPulse Tech Studio or your corporate offices for comprehensive milestone and contract planning.
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 text-xs">
                <span className="text-[11px] font-bold text-indigo-600">
                  On-site / Tech Studio
                </span>
                {meetingType === 'In-person Meeting' ? (
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-slate-300"></span>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* STEP 2: CALENDAR DATE & AVAILABLE TIME SLOTS */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">2</span>
              <h3 className="text-base font-bold text-slate-900">{t('appointment.step2')}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Monthly Calendar View (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50/70 p-6 rounded-2xl border border-slate-200">
              
              {/* Calendar Month Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-extrabold text-base text-slate-900">
                  {monthNames[month]} {year}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-600"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-600"
                    aria-label="Next month"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400 mb-2">
                {dayHeaders.map((dh, i) => (
                  <span key={i}>{dh}</span>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {Array.from({ length: firstDayIndex }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-10"></div>
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const dayNum = i + 1;
                  const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
                  const dayDate = new Date(year, month, dayNum);
                  const isWeekend = dayDate.getDay() === 0 || dayDate.getDay() === 6;
                  const isSelected = selectedDate === dateString;
                  const isToday = new Date().toISOString().split('T')[0] === dateString;

                  return (
                    <button
                      type="button"
                      key={dateString}
                      disabled={isWeekend}
                      onClick={() => setSelectedDate(dateString)}
                      className={`h-10 rounded-xl font-bold flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-extrabold'
                          : isWeekend
                          ? 'text-slate-300 cursor-not-allowed'
                          : 'hover:bg-indigo-100/70 hover:text-indigo-900 text-slate-700 bg-white border border-slate-200/60'
                      }`}
                    >
                      <span>{dayNum}</span>
                      {isToday && !isSelected && (
                        <span className="w-1 h-1 bg-indigo-600 rounded-full absolute bottom-1.5"></span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                  {t('appointment.selectedDateLabel')}: <strong className="text-slate-800">{new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</strong>
                </span>
                <span className="text-slate-400">{t('appointment.weekdaysOnly')}</span>
              </div>
            </div>

            {/* Time Slot Picker (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                {t('appointment.availableSlotsOn')} {new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {TIME_SLOTS.map((slot) => {
                  const isSlotSelected = selectedTimeSlot === slot;
                  return (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`p-3 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                        isSlotSelected
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-indigo-600" />
                        <span>{slot}</span>
                      </div>
                      {isSlotSelected && <CheckCircle2 className="w-4 h-4 text-indigo-600" />}
                    </button>
                  );
                })}
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  {meetingType === 'In-person Meeting' ? (
                    <Building className="w-4 h-4 text-blue-700" />
                  ) : (
                    <Video className="w-4 h-4 text-blue-700" />
                  )}
                  <span>Format: {meetingType}</span>
                </div>
                <p className="text-[11px] text-blue-700">
                  {meetingType === 'In-person Meeting'
                    ? 'Session conducted at DevPulse Tech Studio (450 Innovation Blvd) with engineering leads.'
                    : 'Interactive video call link generated automatically with Google Calendar sync.'}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* STEP 3: CLIENT CONTACT INFO */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">3</span>
              <h3 className="text-base font-bold text-slate-900">{t('appointment.step3')}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {t('appointment.fullName')} *
              </label>
              <input
                type="text"
                required
                value={clientInfo.name}
                onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {t('appointment.workEmail')} *
              </label>
              <input
                type="email"
                required
                value={clientInfo.email}
                onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {t('appointment.notesLabel')}
            </label>
            <textarea
              rows={2}
              value={clientInfo.notes}
              onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none resize-none"
            ></textarea>
          </div>
        </div>

        {/* SUBMISSION BAR WITH EXACT BUTTON: "Confirm Appointment" */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={() => setClientTab('overview')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
          >
            {t('appointment.cancel')}
          </button>

          {/* REQUIRED BUTTON: "Confirm Appointment" */}
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-extrabold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>{t('appointment.confirmBtn')}</span>
          </button>
        </div>

      </form>

    </div>
  );
}
