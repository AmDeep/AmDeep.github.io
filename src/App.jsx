import React from 'react';
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
    arxiv: 'https://arxiv.org/abs/2308.00717'
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
    {
      title: 'Persona & RAG-based LLMs (Flask Demo)',
      timeframe: '01/2025 – Present',
      desc: 'Personal/business persona generation via RAG LLMs, Flask web interface.',
      link: 'https://github.com/AmDeep/persona-rag-llm-flask'
    },
    {
      title: 'Medical Trials Chatbot',
      timeframe: '01/2025 – Present',
      desc: 'RAG + LLM + REST API chatbot for patient interaction in clinical trials.',
      link: 'https://github.com/AmDeep/medical-trials-chatbot'
    },
    {
      title: 'R42 Fellowship: LLM Chatbots',
      timeframe: '04/2024 – 10/2024',
      desc: 'Built persona generation & RAG chatbots with backend NLP components.',
      link: 'https://github.com/AmDeep/r42-llm-chatbots'
    },
    {
      title: 'Drug Response Prediction (ML)',
      timeframe: '11/2020 – 02/2021',
      desc: 'ML model for pharmaco-chemical activity prediction.',
      link: 'https://github.com/AmDeep/drug-response-ml'
    },
    {
      title: 'Predictive Maintenance (Time Series)',
      timeframe: '08/2020 – 10/2020',
      desc: 'Machine health monitoring using failure metrics and time-series modeling.',
      link: 'https://github.com/AmDeep/predictive-maintenance'
    },
    {
      title: 'Bank Marketing Campaign Analysis',
      timeframe: '01/2018 – 04/2018',
      desc: 'Analyzed term deposit uptake using direct marketing data.',
      link: 'https://rpubs.com/AmDeep/bank-marketing'
    },
    {
      title: 'Omdena Startup Projects',
      timeframe: 'Ongoing',
      desc: 'Multiple AI/ML collaborations with global startups.',
      link: 'https://www.omdena.com/@amdeep'
    }
  ],
  publications: [
    {
      title: 'Machine Learning in Chemical Process Design: A Review',
      journal: 'Journal of Physics: Conference Series',
      year: '2019',
      doi: '10.1088/1742-6596/1276/1/012004',
      link: 'https://iopscience.iop.org/article/10.1088/1742-6596/1276/1/012004',
      arxiv: null
    },
    {
      title: 'Protein Language Models with Diffusion and RAG Integration',
      journal: 'arXiv preprint',
      year: '2023',
      doi: null,
      link: 'https://arxiv.org/abs/2308.00717',
      arxiv: '2308.00717'
    },
    {
      title: 'Multimodal RAG for Bioinformatics Data Retrieval',
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

export default function App() {
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
              <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-rose-100 hover:scale-105 transition-all">
                <Mail size={15} className="text-rose-600" />
                <span>{data.email}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <section className="lg:col-span-2 space-y-10">
          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-7 rounded-2xl shadow-lg"
          >
            <SectionTitle icon={Calendar}>Experience</SectionTitle>
            <div className="space-y-7">
              {data.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
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

          {/* Publications */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
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

          {/* Projects */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-7 rounded-2xl shadow-lg"
          >
            <SectionTitle icon={Code}>Projects</SectionTitle>
            <div className="grid sm:grid-cols-2 gap-5">
              {data.projects.map((proj, i) => (
                <motion.a
                  key={i}
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="block p-5 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-xl border border-slate-200 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-800">{proj.title}</h4>
                    <ExternalLink size={14} className="text-indigo-600" />
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{proj.timeframe}</p>
                  <p className="text-sm text-slate-700">{proj.desc}</p>
                </motion.a>
              ))}
            </div>
          </motion.section>
        </section>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          {/* Education */}
          <motion.section initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-6 rounded-2xl shadow-lg">
            <SectionTitle icon={Award}>Education</SectionTitle>
            {data.education.map((ed, i) => (
              <div key={i} className="mb-5 last:mb-0">
                <h4 className="font-semibold text-slate-800">{ed.degree}</h4>
                <p className="text-sm text-slate-600">{ed.institution}</p>
                {ed.highlights.length > 0 && (
                  <ul className="mt-2 text-xs text-slate-700 space-y-1">
                    {ed.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-indigo-500">Star</span> {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.section>

          {/* Organizations */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <SectionTitle icon={Users}>Organizations & Leadership</SectionTitle>
            <div className="space-y-3">
              {data.organizations.map((org, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe size={16} className="text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">{org.name}</p>
                    <p className="text-xs text-slate-600">{org.role} • {org.period}</p>
                    <p className="text-xs text-slate-500">{org.location}</p>
                  </div>
                  {org.url && (
                    <a href={org.url} target="_blank" rel="noreferrer" className="text-indigo-600">
                      <LinkIcon size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <SectionTitle icon={Code}>Skills</SectionTitle>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="text-xs px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <SectionTitle icon={Award}>Certifications</SectionTitle>
            <ul className="text-sm text-slate-700 space-y-2">
              {data.certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">Checkmark</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 rounded-2xl shadow-lg"
          >
            <h3 className="font-bold text-lg mb-3">Get in Touch</h3>
            <p className="text-sm opacity-90">{data.phone}</p>
            <p className="text-sm opacity-90 mb-4">{data.email}</p>
            <div className="flex gap-3">
              <a href={data.links.github} target="_blank" rel="noreferrer" className="flex-1 bg-white text-slate-800 py-2 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-slate-100 transition">
                <Github size={16} /> GitHub
              </a>
              <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="flex-1 bg-white text-slate-800 py-2 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-slate-100 transition">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.section>
        </aside>
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
