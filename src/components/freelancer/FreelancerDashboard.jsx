import React, { useState } from 'react';
import { usePlatform } from '../../context/PlatformContext';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';
import ApplicationModal from './ApplicationModal';
import MyApplications from './MyApplications';
import FreelancerProfile from './FreelancerProfile';
import { 
  Briefcase, 
  Search, 
  Filter, 
  Sparkles, 
  DollarSign, 
  SlidersHorizontal, 
  CheckCircle2, 
  FolderKanban, 
  Layers,
  ArrowUpDown
} from 'lucide-react';

export default function FreelancerDashboard() {
  const { 
    projects, 
    freelancerTab, 
    setFreelancerTab, 
    selectedProject, 
    setSelectedProjectId,
    isApplicationModalOpen,
    setIsApplicationModalOpen,
    t,
    language
  } = usePlatform();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [projectToApply, setProjectToApply] = useState(null);

  // If viewing my applications or profile tab
  if (freelancerTab === 'my-applications') {
    return (
      <>
        <MyApplications onOpenProject={(id) => setSelectedProjectId(id)} />
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProjectId(null)}
            onApplyClick={(proj) => {
              setProjectToApply(proj);
              setIsApplicationModalOpen(true);
            }}
          />
        )}
      </>
    );
  }

  if (freelancerTab === 'profile') {
    return <FreelancerProfile />;
  }

  // Filter projects based on search and category
  const filteredProjects = projects.filter((proj) => {
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.requiredSkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || proj.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'mobile-dev', label: 'Mobile Development' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'other', label: 'Other (AI & Cloud)' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in">
      
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-10 shadow-xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Freelancer Dashboard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Available Projects
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Browse verified client projects looking for development services. View complete briefs and submit your applications.
          </p>
        </div>
      </div>

      {/* Search & Filters Bar */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
        
        {/* Search input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects by keyword, technology (React, Node, Mobile, Stripe), or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 text-sm outline-none transition-all font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>
            Showing <strong>{filteredProjects.length}</strong> available projects
          </span>
          <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Real-time client updates
          </span>
        </div>
      </div>

      {/* Main Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
          <Briefcase className="w-6 h-6 text-indigo-600" />
          <span>Available Projects</span>
        </h2>
        <span className="text-xs text-slate-500 font-medium">
          Select a project to review specifications and apply
        </span>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No projects match your search</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or select another service category.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold shadow"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(id) => setSelectedProjectId(id)}
            />
          ))}
        </div>
      )}

      {/* Modal 1: Project Details (Requirement 6) */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
          onApplyClick={(proj) => {
            setProjectToApply(proj);
            setIsApplicationModalOpen(true);
          }}
        />
      )}

      {/* Modal 2: Application Form (Requirement 7) */}
      {isApplicationModalOpen && projectToApply && (
        <ApplicationModal
          project={projectToApply}
          isOpen={isApplicationModalOpen}
          onClose={() => {
            setIsApplicationModalOpen(false);
            setProjectToApply(null);
          }}
        />
      )}

    </div>
  );
}
