import React from 'react'

export const metadata = {
  title: 'Projects',
  description: 'Featured project experience and web developments by Krisna Yuda Nugraha.',
}

const projects = [
  // HIGHLIGHTED PROJECTS
  {
    image: '/lsppm-ajj.png',
    title: 'LSPPM ASSESSMENT APP',
    description: 'A national-standard professional competency certification platform designed to securely manage and facilitate remote assessments for capital market professionals across Indonesia.',
    tech: ['PHP', 'Laravel', 'JavaScript', 'Jaspersoft Studio', 'PostgreSQL', 'Docker', 'GitHub'],
    featured: true,
    url: 'ajj.lsppm.com',
  },
  {
    image: '/breeder.jpg',
    title: 'BREEDER SALES APPLICATION',
    description: 'An enterprise web application developed to manage the end-to-end breeder sales business process. It streamlines operations from Day-Old Chicks (DOC) management, feed, and egg production to distribution, ensuring optimal data synchronization across the supply chain.',
    tech: ['Laravel Filament', 'PostgreSQL', 'GitLab', 'OpenProject', 'Jaspersoft Studio'],
    featured: true,
    url: 'internal.malindo.com',
  },
  {
    image: '/ikn.png',
    title: 'NUSANTARA HUB',
    description: 'An integrated system designed for the Ministry of Transportation to monitor and visualize inter-island connectivity data across Indonesia in real-time, focusing heavily on mobility access to the new capital city, Nusantara (IKN).',
    tech: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'MySQL'],
    featured: true,
    url: 'kemenhub.go.id/nusantara',
  },
  {
    image: '/hubnet.png',
    title: 'HUBNET SDU',
    description: 'A centralized big data system for the Ministry of Transportation. This platform consolidates, analyzes, and monitors all internal departmental data within a highly secure and confidential executive dashboard.',
    tech: ['PHP', 'Laravel', 'JavaScript', 'TailwindCSS', 'MySQL'],
    featured: true,
    url: 'hubnet.kemenhub.go.id',
  },
  {
    image: '/mentalhub.png',
    title: 'MENTAL HUB',
    description: 'An enterprise-grade Talent Management Platform for the Ministry of Transportation. Designed to centrally manage, map, and evaluate the performance of thousands of human resources using precise matrix assessments.',
    tech: ['PHP', 'Laravel', 'Livewire', 'Bootstrap', 'MySQL'],
    featured: true,
    url: 'mentalhub.kemenhub.go.id',
  },
  {
    image: '/portal.png',
    title: 'MUDIK CERIA',
    description: 'The official state portal for the 2024 Eid Exodus (Mudik) Monitoring and Guide. This highly-available system was built to withstand massive traffic spikes from millions of travelers seeking crucial route and traffic information.',
    tech: ['PHP', 'Laravel', 'JavaScript', 'Bootstrap', 'MySQL'],
    featured: true,
    url: 'mudik.kemenhub.go.id',
  },
  
  // OTHER PROJECTS
  {
    image: '/ap2.png',
    title: 'Angkasa Pura II Maintenance',
    description: 'An operational platform for Angkasa Pura II used to systematically monitor and manage facility maintenance data across various airports.',
    tech: ['PHP', 'Laravel', 'JavaScript', 'MySQL'],
    featured: false,
  },
  {
    image: '/desa.png',
    title: 'Desa Ekspor Indonesia',
    description: 'An interactive profile website and introduction platform for export-village empowerment programs across Indonesia.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    featured: false,
  },
  {
    image: '/dolopo.png',
    title: 'CMS Desa Dolopo',
    description: 'A fully integrated Content Management System (CMS) built to streamline the digitalization of citizen administration in Dolopo Village.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    featured: false,
  },
  {
    image: '/bimbingan.png',
    title: 'Bimbingan UPNVJ',
    description: 'An academic mentoring system to manage competition schedules and track student progress at the National Development University Veteran Jakarta (UPNVJ).',
    tech: ['PHP', 'Laravel', 'MySQL'],
    featured: false,
  },
  {
    image: '/dewata.png',
    title: 'Dewata Waterproofing',
    description: 'A lightweight web-based ERP for operational management, client data, and inventory tracking for Dewata Waterproofing Indonesia.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    featured: false,
  },
]

export default function Page() {
  const highlighted = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <div className="pt-8 pb-12 px-5 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden bg-[#0d1117]">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto pt-2 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Featured Portfolio
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          National Scale <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Masterpieces.
          </span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-medium mt-4 max-w-2xl">
          A collection of large-scale enterprise systems and public portals, specifically designed for the Indonesian Ministry of Transportation and state-owned enterprises.
        </p>
      </div>

      {/* HIGHLIGHTED PROJECTS (ALTERNATING ROWS) */}
      <div className="space-y-24 mb-24">
        {highlighted.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Image Side (Mockup Window) */}
              <div className="w-full lg:w-1/2 relative group perspective-1000">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl z-0"></div>
                
                {/* Browser Mockup Container */}
                <div className="relative z-10 rounded-2xl overflow-hidden bg-[#161b22] border border-neutral-700 shadow-xl transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  
                  {/* macOS Style Browser Header */}
                  <div className="bg-[#1d232c] border-b border-neutral-700/50 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    </div>
                    <div className="mx-auto bg-neutral-900/50 border border-neutral-700 rounded-md px-3 py-1 text-[10px] text-neutral-400 truncate max-w-[200px]">
                      {project.url || 'kemenhub.go.id'}
                    </div>
                  </div>

                  {/* Image Content - Using object-contain to prevent cropping */}
                  <div className="relative w-full bg-neutral-900/30 p-2 sm:p-4 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-h-[400px] object-contain rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>
              
              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-5 relative z-20">
                <div className="text-blue-400 font-bold tracking-widest text-xs uppercase flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-blue-500/50"></span>
                  Project {index + 1}
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-[#161b22] border border-neutral-700/50 text-neutral-300 text-xs font-semibold shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <button className="px-6 py-2.5 rounded-lg bg-white text-black font-bold text-sm hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                    Explore Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* OTHER PROJECTS */}
      <div className="pt-16 border-t border-neutral-800/80">
        <div className="flex flex-col items-center text-center space-y-3 mb-10">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Other Notable Works
          </h3>
          <p className="text-neutral-500 text-sm max-w-2xl">
            Information systems, content management platforms, and operational websites built for various agencies and enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-[#11161d] border border-neutral-800/60 overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative w-full bg-neutral-900 border-b border-neutral-800/60 p-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[180px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h4 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/50">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-[10px] font-bold bg-white/5 text-neutral-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
