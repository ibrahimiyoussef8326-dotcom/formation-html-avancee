import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PROJECTS, INITIAL_SERVICES } from '../data/initialData';
import { translations } from '../i18n/translations';

const PlatformContext = createContext();

const STORAGE_KEYS = {
  PROJECTS: 'devpulse_projects_v2',
  APPOINTMENTS: 'devpulse_appointments_v2',
  APPLICATIONS: 'devpulse_applications_v2',
  LANGUAGE: 'devpulse_language_v2',
};

export function PlatformProvider({ children }) {
  // Language State: defaults to 'en'
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
      if (saved === 'fr' || saved === 'en') return saved;
    } catch (e) {
      console.error(e);
    }
    return 'en';
  });

  // Navigation & Role State: 'home' | 'client' | 'freelancer'
  const [currentView, setCurrentView] = useState('home');
  const [clientTab, setClientTab] = useState('overview'); // overview, my-projects, request-service, appointments, profile
  const [freelancerTab, setFreelancerTab] = useState('projects'); // projects, my-applications, profile

  // Modal / Selected states
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Notifications Toast state
  const [toasts, setToasts] = useState([]);

  // Projects state
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error reading localStorage projects:', e);
    }
    return INITIAL_PROJECTS;
  });

  // Client Appointments state
  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error reading localStorage appointments:', e);
    }
    return [
      {
        id: 'apt-sample-1',
        typeId: 'online-meeting',
        typeTitle: 'Online Meeting',
        meetingType: 'Online Meeting',
        duration: '30 min',
        date: '2026-10-06',
        timeSlot: '10:00 AM - 10:30 AM',
        clientName: 'Alex Vance (Client)',
        clientEmail: 'alex.vance@techcorp.io',
        notes: 'Discussion on architecture and budget for our upcoming web platform.',
        meetUrl: 'https://meet.google.com/dev-pulse-meet',
        createdAt: '2026-09-24',
        status: 'confirmed'
      }
    ];
  });

  // Freelancer Applications state
  const [applications, setApplications] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error reading localStorage applications:', e);
    }
    return [
      {
        id: 'app-sample-1',
        projectId: 'proj-1',
        projectTitle: 'B2B Logistics Analytics SaaS Platform',
        clientName: 'Sarah Jenkins',
        applicantName: 'Alexandre Lefebvre',
        skills: 'React, TypeScript, Node.js, Mapbox, Tailwind CSS',
        experience: '9+ years as Senior Fullstack Engineer',
        applicationMessage: 'Hello Sarah, I have engineered 3 similar fleet-tracking platforms with WebSockets and Mapbox. Excited to assist with this build!',
        submittedAt: '2026-09-22',
        status: 'under_review' // under_review, accepted, declined
      }
    ];
  });

  // Persist language to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    } catch (e) {
      console.error(e);
    }
  }, [language]);

  // Persist projects to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
    } catch (e) {
      console.error(e);
    }
  }, [appointments]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(applications));
    } catch (e) {
      console.error(e);
    }
  }, [applications]);

  // Translation helper function
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language] || translations['en'];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to en
        let fallback = translations['en'];
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'fr' : 'en';
    setLanguage(nextLang);
    addToast(
      nextLang === 'fr' ? 'Langue modifiée : Français 🇫🇷' : 'Language changed: English 🇬🇧',
      'info'
    );
  };

  // Toast dispatch
  const addToast = (message, type = 'success') => {
    const id = Date.now().toString() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Add a new project (Client action)
  const addProject = (projectData) => {
    const newId = `proj-${Date.now()}`;
    const newProject = {
      id: newId,
      title: projectData.title,
      clientName: projectData.clientName || 'My Company (Client)',
      clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      clientCompany: projectData.company || 'Innovative Client Corp',
      serviceType: projectData.serviceType || 'Web Development',
      category: projectData.category || 'web-dev',
      budget: projectData.budget || '$5,000',
      budgetMin: parseInt(projectData.budgetMin) || 3000,
      budgetMax: parseInt(projectData.budgetMax) || 6000,
      deadline: projectData.deadline || '2026-11-30',
      deadlineDisplay: projectData.deadline ? `Before ${new Date(projectData.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : 'Flexible',
      shortDesc: projectData.shortDesc || (projectData.description ? projectData.description.slice(0, 160) + '...' : 'New development request'),
      fullDesc: projectData.description || 'Full specifications provided by client.',
      requiredSkills: projectData.skills && projectData.skills.length > 0 ? projectData.skills : ['Web Development', 'Fullstack'],
      deliverables: projectData.deliverables && projectData.deliverables.length > 0
        ? projectData.deliverables
        : ['Approved project specifications', 'Documented source code & repository', 'Staging deployment & QA tests'],
      publishedAt: new Date().toISOString().split('T')[0],
      status: 'open',
      proposalsCount: 0,
      isNew: true
    };

    setProjects((prev) => [newProject, ...prev]);
    const successMsg = language === 'en'
      ? `Your project "${newProject.title}" has been submitted successfully.`
      : `Votre demande pour "${newProject.title}" a été soumise avec succès.`;
    addToast(successMsg, 'success');
    return newProject;
  };

  // Book an appointment (Client action)
  const bookAppointment = (appointmentData) => {
    const newAppointment = {
      id: `apt-${Date.now()}`,
      ...appointmentData,
      createdAt: new Date().toISOString().split('T')[0],
      meetUrl: appointmentData.meetingType === 'In-person Meeting' 
        ? 'DevPulse Tech Studio, 450 Innovation Blvd, Suite 400' 
        : 'https://meet.google.com/dev-' + Math.random().toString(36).substring(2, 7),
      status: 'confirmed'
    };

    setAppointments((prev) => [newAppointment, ...prev]);
    const successMsg = language === 'en'
      ? `Your appointment has been confirmed.`
      : `Votre rendez-vous a été confirmé.`;
    addToast(successMsg, 'success');
    return newAppointment;
  };

  // Submit application (Freelancer action)
  const submitApplication = (projectId, applicationData) => {
    const targetProject = projects.find((p) => p.id === projectId);
    const newApplication = {
      id: `app-${Date.now()}`,
      projectId,
      projectTitle: targetProject ? targetProject.title : 'Project',
      clientName: targetProject ? targetProject.clientName : 'Client',
      applicantName: applicationData.name || 'Alexandre Lefebvre',
      skills: applicationData.skills || 'Fullstack Development',
      experience: applicationData.experience || 'Senior Developer',
      applicationMessage: applicationData.applicationMessage || applicationData.message || '',
      submittedAt: new Date().toISOString().split('T')[0],
      status: 'under_review'
    };

    setApplications((prev) => [newApplication, ...prev]);

    // increment proposals count on project
    setProjects((prev) =>
      prev.map((p) =>
        p.id === projectId ? { ...p, proposalsCount: (p.proposalsCount || 0) + 1 } : p
      )
    );

    const successMsg = language === 'en'
      ? `Application submitted successfully.`
      : `Candidature soumise avec succès.`;
    addToast(successMsg, 'success');
    return newApplication;
  };

  // Helper check if freelance applied
  const hasApplied = (projectId) => {
    return applications.some((app) => app.projectId === projectId);
  };

  // View navigation helper
  const navigateTo = (view, tab = null) => {
    setCurrentView(view);
    if (view === 'client' && tab) setClientTab(tab);
    if (view === 'freelancer' && tab) setFreelancerTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  return (
    <PlatformContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        currentView,
        setCurrentView,
        clientTab,
        setClientTab,
        freelancerTab,
        setFreelancerTab,
        projects,
        services: INITIAL_SERVICES,
        appointments,
        applications,
        selectedProject,
        setSelectedProjectId,
        isApplicationModalOpen,
        setIsApplicationModalOpen,
        isContactModalOpen,
        setIsContactModalOpen,
        toasts,
        addToast,
        removeToast,
        addProject,
        bookAppointment,
        submitApplication,
        hasApplied,
        navigateTo,
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
}

export function usePlatform() {
  const context = useContext(PlatformContext);
  if (!context) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
}
