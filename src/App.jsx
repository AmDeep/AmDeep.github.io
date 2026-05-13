import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Mail, FileText, ExternalLink, Calendar,
  Award, Code, Link as LinkIcon, BookOpen, Users, Globe
} from 'lucide-react';

const data = {
  name: 'Amardeep Singh',
  title: 'MSc Eng. Chemical Engineering & Applied Chemistry — ML / AI / Product / R&D',
  email: 'amardeeps5201@gmail.com',
  phone: '+1 6475549475',
  links: {
    linkedin: 'https://www.linkedin.com/in/amardeep-s-70a471a3/',
    github: 'https://github.com/AmDeep',
    certificates: 'https://github.com/AmDeep/Certificates',
    devpost: 'https://devpost.com/AmDeep',
    arxiv: 'https://arxiv.org/abs/2308.00717',
    scholar: 'https://scholar.google.ca/citations?user=GgK_hZEAAAAJ&hl=en'
  },
  education: [
    {
      degree: 'MSc. Eng. Chemical Engineering & Applied Chemistry',
      institution: 'University of Toronto, Toronto, Canada',
      highlights: [
        'First Place, Hatchery Startup Program — CAD 20,000 for automating legal drafting',
        'First Place, RBC SA&I Case Competition — CAD 6,000 for greener shopping alternatives',
        'Best Design, Innovation Showcase Hackathon — NPX Innovation'
      ]
    },
    {
      degree: 'BSc. Eng.',
      institution: 'Birla Institute of Technology & Science, Pilani — Dubai Campus, UAE',
      highlights: []
    }
  ],
  experience: [
    {
      role: 'Technical Project Manager',
      company: 'Binoloop',
      location: 'Toronto',
      period: '01/2025 – Present',
      bullets: [
        'Improved release execution by 38% weekly across Full Stack, AI/ML, and DevOps',
        'Executed product-level modifications with structured user feedback channels',
        'Enhanced component interpretation via user flows, documentation, and code',
        'Delivered AI solutions for multimodal data modeling using RAGs and LLMs'
      ],
      url: 'https://www.binoloop.com/'
    },
    {
      role: 'Research & Development Engineer',
      company: 'BioSyft',
      location: 'Virtual',
      period: '11/2024 – Present',
      bullets: [
        'Designed innovative products using advanced engineering and AI techniques',
        'Improved sample analysis with ML, data visualization, and statistical methods',
        'Implemented rigorous testing and quality assurance protocols',
        'Authored technical reports, design specs, and user manuals'
      ],
      url: 'https://biosyft.io/'
    },
    {
      role: 'ML/AI/Bioinformatics Researcher',
      company: 'Ultraceuticals',
      location: 'Virtual',
      period: '06/2022 – Present',
      bullets: [
        'Researched drug discovery, molecular docking, and chemical species modeling',
        'Streamlined simulation code in Python, C++, Shell, and Jupyter',
        'Built protein language models using diffusion, NLP, and REST APIs'
      ],
      url: 'https://www.ultraceuticals.in/about-us'
    },
    {
      role: 'Senior Data Engineer',
      company: 'RBC',
      location: 'Virtual',
      period: '01/2022 – 11/2024',
      bullets: [
        'Automated DAG creation in Airflow, reducing execution time by 35%',
        'Developed automated debugging and operational run strategies',
        'Documented code and procedures for cross-team collaboration'
      ],
      url: 'https://www.rbc.com/about-rbc.html'
    },
    {
      role: 'Head of Engineering',
      company: 'nurtur',
      location: 'Virtual',
      period: '01/2024 – 12/2024',
      bullets: [
        'Led full-stack development: cloud, backend, frontend, and web apps',
        'Built RAG-powered NLP chatbots for postpartum depression support',
        'Deployed Llama-based LLMs on AWS, Azure, GCP with user flow integration'
      ],
      url: 'https://nurturcare.com/'
    },
    {
      role: 'Product Owner/Manager',
      company: 'CIRCA',
      location: 'Virtual',
      period: '11/2021 – 10/2023',
      bullets: [
        'Led product development from stakeholder requirements',
        'Conducted LCA, energy, and carbon emissions analysis',
        'Applied chemical & process engineering to platform design'
      ],
      url: null
    },
    {
      role: 'Machine Learning Engineer',
      company: 'Lambda Function',
      location: 'Virtual',
      period: '01/2021 – 08/2022',
      bullets: [
        'Processed sensor data via S3 and Jupyter notebooks',
        'Built anomaly detection & predictive maintenance models (Python, Streamlit, AWS)',
        'Enabled real-time root cause analysis and failure prediction'
      ],
      url: null
    },
    {
      role: 'AI Consultant',
      company: 'Deepgram',
      location: 'Virtual',
      period: '11/2020 – 08/2022',
      bullets: [
        'Built ASR models for Hindi & Devanagari scripts in Linux/Python',
        'Improved accuracy beyond Google models via custom data pipelines',
        'Conducted audio analysis and NLP for multilingual datasets'
      ],
      url: 'https://deepgram.com/'
    }
  ],
  projects: [
    // New Hackathon Projects
    {
      title: 'Themis - Legal Document Parser',
      timeframe: '2020',
      desc: 'Startup that assists legal teams with automated document parsing and drafting. Won 1st Place at UofT Hatchery.',
      amount: 'CAD 20,000',
      link: null, // Add link if available
      tags: ['Hackathon', 'LegalTech', 'Startup']
    },
    {
      title: 'Altereco',
      timeframe: '2020',
      desc: 'Sustainable finance application focused on greener shopping alternatives. Won 1st Place at RBC Hackathon.',
      amount: 'CAD 6,000',
      link: null,
      tags: ['Hackathon', 'FinTech', 'Sustainability']
    },
    {
      title: 'Snowbirds Travel Assistant',
      timeframe: '2025',
      desc: 'Travellers application designed for Snowbirds. Won CAD 20,000 at Fintech Cadence.',
      amount: 'CAD 20,000',
      link: null,
      tags: ['Hackathon', 'FinTech', 'Travel']
    },
    // Existing Projects
    {
      title: 'Persona & RAG-based LLMs (Flask Demo)',
      timeframe: '01/2025 – Present',
      desc: 'Personal/business persona generation via RAG LLMs, Flask web interface.',
      link: 'https://github.com/AmDeep/persona-rag-llm-flask',
      tags: ['AI', 'RAG', 'LLM']
    },
    {
      title: 'Medical Trials Chatbot',
      timeframe: '01/2025 – Present',
      desc: 'RAG + LLM + REST API chatbot for patient interaction in clinical trials.',
      link: 'https://github.com/AmDeep/medical-trials-chatbot',
      tags: ['AI', 'Healthcare']
    },
    {
      title: 'R42 Fellowship: LLM Chatbots',
      timeframe: '04/2024 – 10/2024',
      desc: 'Built persona generation & RAG chatbots with backend NLP components.',
      link: 'https://github.com/AmDeep/r42-llm-chatbots',
      tags: ['AI', 'LLM']
    },
    {
      title: 'Drug Response Prediction (ML)',
      timeframe: '11/2020 – 02/2021',
      desc: 'ML model for pharmaco-chemical activity prediction.',
      link: 'https://github.com/AmDeep/drug-response-ml',
      tags: ['ML']
    },
    {
      title: 'Predictive Maintenance (Time Series)',
      timeframe: '08/2020 – 10/2020',
      desc: 'Machine health monitoring using failure metrics and time-series modeling.',
      link: 'https://github.com/AmDeep/predictive-maintenance',
      tags: ['ML']
    },
    {
      title: 'Bank Marketing Campaign Analysis',
      timeframe: '01/2018 – 04/2018',
      desc: 'Analyzed term deposit uptake using direct marketing data.',
      link: 'https://rpubs.com/AmDeep/bank-marketing',
      tags: ['Data Analysis']
    },
    {
      title: 'Omdena Startup Projects',
      timeframe: 'Ongoing',
      desc: 'Multiple AI/ML collaborations with global startups.',
      link: 'https://www.omdena.com/@amdeep',
      tags: ['AI', 'Collaboration']
    }
  ],
  publications: [
    {
      title: 'Simulation Of Coffee Stain Effects Using ANSYS Fluent',
      journal: 'Journal of Physics: Conference Series',
      year: '2019',
      doi: '10.1088/1742-6596/1276/1/012004',
      link: 'https://iopscience.iop.org/article/10.1088/1742-6596/1276/1/012004',
      arxiv: null
    },
    {
      title: 'The Study and Optimization Of Production/Fermentation Processes In Biofuel Production',
      journal: 'arXiv preprint',
      year: '2023',
      doi: null,
      link: 'https://arxiv.org/abs/2308.00717',
      arxiv: '2308.00717'
    },
    {
      title: 'Implementing Edge Based Object Detection For Microplastic Debris',
      journal: 'arXiv preprint',
      year: '2023',
      doi: null,
      link: 'https://arxiv.org/abs/2307.16289',
      arxiv: '2307.16289'
    }
  ],
  organizations: [
    { name: 'Amazon', role: 'AWS Community Builder', location: 'Virtual', period: '2020 – Present', url: 'https://aws.amazon.com/developer/community/community-builders/' },
    { name: 'Omdena AI', role: 'ML Engineer & Project Manager', location: 'Virtual', period: '2020 – Present', url: 'https://www.omdena.com/@amdeep' },
    { name: 'Nucleate', role: 'Researcher', location: 'Global', period: '2023 – Present', url: 'https://www.nucleate.org/' },
    { name: 'Womanium Quantum Computing', role: 'Community Member', location: 'Virtual', period: '2022 – Present', url: 'https://womanium.org/' },
    { name: 'University Consulting Group', role: 'Talent Vertical Lead', location: 'Toronto', period: '2021 – Present', url: null },
    { name: 'MZZ Asia', role: 'Consultant', location: 'Virtual', period: '2021 – 2022', url: null },
    { name: 'UTESCA', role: 'Student Consultant', location: 'Toronto', period: '2021 – 2022', url: null },
    { name: 'University of Toronto Consulting Association', role: 'Pro-Bono Consultant', location: 'Toronto', period: '2021 – 2023', url: null },
    { name: 'Student Energy Leaders Fellowship', role: 'Cohort Member', location: 'Toronto, Canada', period: '2021 – 2023', url: 'https://studentenergy.org/' },
    { name: 'IBM', role: 'ZAmbassador', location: 'Toronto, Canada', period: '2020 – 2021', url: 'https://www.ibm.com/z/zambassadors/' }
  ],
  skills: [
    'Chemical Engineering', 'Process Engineering', 'PLC/SCADA', 'Product Management',
    'Project Management', 'Data Science', 'Machine Learning', 'AI', 'R&D',
    'ASPEN', 'ANSYS', 'CAD', 'Pharmaceuticals', 'Sustainable Energy',
    'Biotechnology', 'Power BI', 'SQL', 'Python', 'C++', 'Shell', 'Jupyter',
    'Docker', 'AWS', 'Azure', 'GCP', 'React', 'Node.js', 'JavaScript',
    'HTML', 'MATLAB', 'WEKA', 'R', 'SPSS', 'VBA', 'Java Netbeans'
  ],
  certifications: [
    'Udacity AI Product Manager (2021)',
    'Microsoft Azure AI Nanodegree (2020–2021)',
    'AWS Machine Learning Nanodegree (2020)',
    'LLMs, RAG, NLP, Chatbots, REST API (Multiple)'
  ]
};

// Reusable Components
function IconLink({ href, icon: Icon, label, color = 'slate' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:bg-${color}-100 hover:scale-105`}
    >
      <Icon size={15} />
      <span>{label}</span>
    </a>
  );
}

function SectionTitle({ children, icon: Icon }) {
  return (
    <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-5">
      {Icon && <Icon size={20} className="text-indigo-600" />}
      {children}
    </h2>
  );
}

const tabs = [
  { id: 'overview', label: 'Overview', icon: Globe },
  { id: 'experience', label: 'Experience', icon: Calendar },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'publications', label: 'Publications', icon: BookOpen },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            AS
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              {data.name}
            </h1>
            <p className="text-lg text-slate-600 mt-2">{data.title}</p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              <IconLink href={data.links.linkedin} icon={Linkedin} label="LinkedIn" color="blue" />
              <IconLink href={data.links.github} icon={Github} label="GitHub" />
              <IconLink href={data.links.certificates} icon={FileText} label="Certificates" />
              <IconLink href={data.links.devpost} icon={Code} label="Devpost" />
              <IconLink href={data.links.arxiv} icon={FileText} label="ArXiv" color="green" />
              <IconLink href={data.links.scholar} icon={BookOpen} label="Google Scholar" color="blue" />
              <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-rose-100 hover:scale-105 transition-all">
                <Mail size={15} className="text-rose-600" />
                <span>{data.email}</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="mt-10 border-b border-slate-200">
          <nav className="flex gap-2 flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-t-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-indigo-700 border border-b-0 border-slate-200 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <section className="lg:col-span-2 space-y-10">
              {/* Experience Summary */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-7 rounded-2xl shadow-lg"
              >
                <SectionTitle icon={Calendar}>Experience</SectionTitle>
                <div className="space-y-7">
                  {data.experience.slice(0, 3).map((exp, idx) => ( // Show first 3 in overview
                    <motion.div key={idx} className="relative pl-6 border-l-2 border-indigo-200">
                      <div className="absolute -left-2 top-1 w-4 h-4 bg-indigo-500 rounded-full"></div>
                      <h3 className="font-semibold">{exp.role} @ {exp.company}</h3>
                      <p className="text-sm text-slate-500">{exp.period}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Featured Projects */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-7 rounded-2xl shadow-lg"
              >
                <div className="flex justify-between items-center mb-5">
                  <SectionTitle icon={Code}>Featured Projects</SectionTitle>
                  <button
                    onClick={() => setActiveTab('projects')}
                    className="text-indigo-600 hover:underline text-sm flex items-center gap-1"
                  >
                    View All Projects <ExternalLink size={14} />
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {data.projects.slice(0, 4).map((proj, i) => (
                    <motion.a
                      key={i}
                      href={proj.link || '#'}
                      target={proj.link ? "_blank" : undefined}
                      rel="noreferrer"
                      whileHover={{ y: -4 }}
                      className="block p-5 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border border-slate-200 hover:shadow-xl transition-all"
                    >
                      <h4 className="font-semibold text-slate-800">{proj.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{proj.timeframe}</p>
                      <p className="text-sm text-slate-700 mt-2 line-clamp-3">{proj.desc}</p>
                      {proj.amount && <p className="text-emerald-600 text-xs mt-2 font-medium">{proj.amount}</p>}
                    </motion.a>
                  ))}
                </div>
              </motion.section>
            </section>

            {/* Right Sidebar - Overview */}
            <aside className="space-y-6">
              <motion.section initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-6 rounded-2xl shadow-lg">
                <SectionTitle icon={Award}>Education</SectionTitle>
                {data.education.map((ed, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <h4 className="font-semibold text-slate-800">{ed.degree}</h4>
                    <p className="text-sm text-slate-600">{ed.institution}</p>
                  </div>
                ))}
              </motion.section>

              <motion.section className="bg-white p-6 rounded-2xl shadow-lg">
                <SectionTitle icon={Users}>Organizations</SectionTitle>
                <div className="space-y-3 text-sm">
                  {data.organizations.slice(0, 5).map((org, i) => (
                    <div key={i}>{org.name} — {org.role}</div>
                  ))}
                </div>
              </motion.section>
            </aside>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-7 rounded-2xl shadow-lg"
          >
            <SectionTitle icon={Calendar}>Experience</SectionTitle>
            <div className="space-y-8">
              {data.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative pl-6 border-l-2 border-indigo-200 hover:border-indigo-500 transition-colors"
                >
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-indigo-500 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">
                        {exp.role}
                        <span className="text-indigo-600 font-medium"> @ {exp.company}</span>
                      </h3>
                      <p className="text-sm text-slate-500 flex items-center gap-1">
                        <Calendar size={12} /> {exp.period} • {exp.location}
                      </p>
                    </div>
                    {exp.url && (
                      <a href={exp.url} target="_blank" rel="noreferrer" className="text-xs text-indigo-600 hover:underline flex items-center gap-1">
                        Website <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Projects Tab - Detailed View */}
        {activeTab === 'projects' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <SectionTitle icon={Code}>Projects</SectionTitle>
            <p className="text-slate-600 mb-8">Click on any project to visit its repository or demo. More projects can be added easily in the data object.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {data.projects.map((proj, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="border border-slate-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-xl transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-xl text-slate-800 group-hover:text-indigo-700 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">{proj.timeframe}</p>
                    </div>
                    {proj.amount && (
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                        {proj.amount}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-slate-700 leading-relaxed">{proj.desc}</p>

                  {proj.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {proj.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Publications Tab */}
        {activeTab === 'publications' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-7 rounded-2xl shadow-lg"
          >
            <SectionTitle icon={BookOpen}>Publications</SectionTitle>
            <div className="space-y-5">
              {data.publications.map((pub, i) => (
                <motion.a
                  key={i}
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className="block p-4 border border-slate-200 rounded-lg hover:border-indigo-400 hover:shadow-md transition-all"
                >
                  <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                    {pub.title}
                    <ExternalLink size={14} className="text-indigo-600" />
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    {pub.journal} • {pub.year}
                    {pub.doi && <> | <span className="text-indigo-600">DOI: {pub.doi}</span></>}
                    {pub.arxiv && <> | <span className="text-green-600">arXiv:{pub.arxiv}</span></>}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
          Built with <span className="font-semibold">React</span>, <span className="font-semibold">TailwindCSS</span> & <span className="font-semibold">Framer Motion</span> • © {new Date().getFullYear()} Amardeep Singh
        </div>
      </footer>
    </div>
  );
}
