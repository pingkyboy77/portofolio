import React from 'react'

export const metadata = {
  title: 'About | Krisna Yuda Nugraha',
  description: 'Work experience, background, and career journey of Krisna Yuda Nugraha.',
}

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Lembaga Sertifikasi Profesi Pasar Modal (LSPPM)',
    logo: '/lsppm.png',
    location: 'Jakarta, Indonesia',
    period: 'Jul 2025 – Present',
    type: 'Full-Time',
    summary: 'Developing and maintaining web-based company profile and digital assessment platforms using Laravel and PostgreSQL.',
    highlights: [
      'Engineered responsive business workflows for digital capital market certification exams.',
      'Managed PostgreSQL database architecture and integrated automated reporting features using Jaspersoft Studio (JRXML).',
      'Leveraged GitHub for version control and cross-functional team collaboration.',
    ],
    stack: ['Laravel', 'PostgreSQL', 'JRXML', 'GitHub'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'PT Malindo Feedmill Tbk',
    logo: '/malindo.png',
    location: 'Jakarta, Indonesia',
    period: 'Sep 2024 – Apr 2025',
    type: 'Full-Time',
    summary: 'Built enterprise web applications supporting breeder sales, procurement, and broiler sales operations.',
    highlights: [
      'Integrated PostgreSQL and Informix databases for large-scale industrial transactions.',
      'Designed intuitive admin dashboards using Laravel Filament to streamline internal team workflows.',
      'Performed routine system maintenance, debugging, and query optimization to ensure high system stability.',
    ],
    stack: ['Laravel', 'Filament', 'PostgreSQL', 'Informix', 'GitLab'],
  },
  {
    role: 'Full-Stack Developer (Technical Specialist)',
    company: 'Kementerian Perhubungan – PT Kalanara Group Indonesia',
    logo: '/kemenhub.png',
    location: 'Jakarta, Indonesia',
    period: 'Sep 2023 – Sep 2024',
    type: 'Contract',
    summary: 'Developed public platforms and internal information systems for the Ministry of Transportation of Indonesia.',
    highlights: [
      'Built and maintained public web applications utilizing Laravel and ReactJS.',
      'Collaborated closely with system analysts, UI/UX designers, and Ministry stakeholders to tailor custom features.',
      'Optimized PostgreSQL and MySQL database structures to comfortably handle high user traffic.',
    ],
    stack: ['Laravel', 'ReactJS', 'PostgreSQL', 'MySQL', 'GitLab'],
  },
  {
    role: 'Full-Stack Developer (Part-Time Specialist)',
    company: 'PT Angkasa Pura II – PT Kamiko Cipta Solusi',
    logo: '/angkasapura.png',
    location: 'Jakarta, Indonesia',
    period: 'Jan 2023 – Aug 2023',
    type: 'Part-Time',
    summary: 'Developed the AP2-CMMS web-based airport facility management system.',
    highlights: [
      'Constructed full-stack modules for asset and facility management at Soekarno-Hatta International Airport.',
      'Consolidated multiple isolated modules into a single unified platform dashboard.',
    ],
    stack: ['Laravel', 'PostgreSQL', 'JavaScript', 'Trello'],
  },
  {
    role: 'Barista',
    company: 'Yumaju Coffee',
    logo: '/yumaju.png',
    location: 'Bandung, Indonesia',
    period: 'Oct 2020 – Mar 2023',
    type: 'Part-Time',
    summary: 'Professional experience in hospitality that sharpened soft skills, active communication, and teamwork.',
    highlights: [
      'Crafted specialty coffee beverages to high standards while operating POS cash register systems.',
      'Refined customer relation skills, high-pressure team coordination, and strong attention to detail.',
    ],
    stack: ['Customer Relations', 'POS Systems', 'Team Dynamics'],
  },
]

const certifications = [
  { title: 'Software Development', issuer: 'BNSP (LSP BSI)', date: 'March 2023' },
  { title: 'Database Programming with SQL', issuer: 'Oracle Academy', date: 'December 2021' },
  { title: 'HTML, CSS, JavaScript Basic', issuer: 'Udemy', date: 'March 2024' },
  { title: 'Introduction to Packet Tracer', issuer: 'Cisco Academy', date: 'May 2022' },
]

export default function Page() {
  return (
    <div className="py-8 px-5 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto space-y-16 overflow-hidden">
      {/* Editorial Header */}
      <div className="space-y-6 w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide">
          <span>👋</span> Get to know me
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Building Scalable <br className="hidden sm:inline" />
          <span className="text-blue-500">Web Applications</span> &amp; Enterprise Systems.
        </h1>

        <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal w-full">
          <p>
            Hello! I'm <strong>Krisna Yuda Nugraha</strong>, a Full-Stack Developer holding a Bachelor's degree in <strong>Informatics Engineering from Universitas Mercu Buana (GPA 3.76/4.00)</strong>. I focus on crafting web applications that are robust on the backend and intuitive for everyday users.
          </p>
          <p className="text-neutral-400">
            My journey is uniquely versatile—starting in hospitality as a Barista at Yumaju Coffee Bandung, where I built strong communication and adaptability, to being trusted with enterprise platforms for Kementerian Perhubungan, PT Angkasa Pura II, and major corporations (PT Malindo Feedmill Tbk &amp; LSPPM).
          </p>
        </div>

        {/* Quick Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 w-full">
          <div className="p-4 rounded-xl bg-[#161b22] border border-neutral-800/80">
            <div className="text-xs text-neutral-500 uppercase tracking-wider">Education</div>
            <div className="text-sm font-bold text-white mt-1">B.S. Computer Science (3.76)</div>
          </div>
          <div className="p-4 rounded-xl bg-[#161b22] border border-neutral-800/80">
            <div className="text-xs text-neutral-500 uppercase tracking-wider">Core Focus</div>
            <div className="text-sm font-bold text-blue-400 mt-1">Web Development</div>
          </div>
          <div className="p-4 rounded-xl bg-[#161b22] border border-neutral-800/80">
            <div className="text-xs text-neutral-500 uppercase tracking-wider">Location</div>
            <div className="text-sm font-bold text-white mt-1">Jakarta, Indonesia</div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[2px] bg-blue-500"></span>
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-widest uppercase">
            Career Journey
          </h2>
        </div>

        <div className="relative border-l border-neutral-800/60 ml-3 sm:ml-4 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Dot */}
              <span className="absolute flex items-center justify-center w-8 h-8 bg-[#0d1117] rounded-full -left-[16.5px] top-5 transition-transform duration-300 group-hover:scale-110">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
              </span>

              <div className="p-6 sm:p-7 rounded-2xl bg-[#161b22] border border-neutral-800/80 group-hover:border-neutral-700 transition-all duration-300 space-y-4 shadow-sm group-hover:shadow-xl group-hover:shadow-black/20">
                {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-4">
                <div className="flex items-center gap-4">
                  {exp.logo && (
                    <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 flex items-center justify-center border-2 border-neutral-700 overflow-hidden">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} Logo`} 
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <div className="text-xs text-blue-400 font-semibold mt-1">
                      {exp.company} <span className="text-neutral-500 font-normal">&bull; {exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto mt-2 sm:mt-0">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Summary & Highlights */}
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                  {exp.summary}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="text-xs sm:text-sm text-neutral-400 flex items-start gap-2.5">
                      <span className="text-blue-500 font-bold mt-0.5">&rarr;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Used */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#0d1117] text-neutral-300 border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 pb-8">
        
        {/* Education */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-500"></span>
            <h2 className="text-lg font-bold text-white tracking-widest uppercase">
              Education
            </h2>
          </div>

          <div className="flex-1 p-6 rounded-2xl bg-[#161b22] border border-neutral-800 space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-blue-400 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                GPA 3.76 / 4.00
              </span>
              <span className="text-xs text-neutral-500 font-medium">Sep 2020 – Jun 2024</span>
            </div>

            <div className="flex items-center gap-4 pt-1">
              <div className="w-14 h-14 rounded-full bg-white flex-shrink-0 flex items-center justify-center border-2 border-neutral-700 overflow-hidden">
                <img 
                  src="/logo-mercu.png" 
                  alt="Universitas Mercu Buana Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-sm text-blue-400 font-semibold mt-1">
                  Universitas Mercu Buana, Jakarta
                </p>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed pt-2 border-t border-neutral-800">
              Focused on software engineering, database management systems, network computing, and web architecture.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-blue-500"></span>
            <h2 className="text-lg font-bold text-white tracking-widest uppercase">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-xl bg-[#161b22] border border-neutral-800 space-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">{cert.issuer}</div>
                  <div className="text-xs font-bold text-white mt-1 leading-snug">{cert.title}</div>
                </div>
                <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-800/80">
                  {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}
