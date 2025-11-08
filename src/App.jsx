import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const data = {
  name: 'Amardeep Singh',
  title: 'MSc Eng. Chemical Engineering & Applied Chemistry — ML / Product / R&D',
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
        'First Place, Hatchery Startup Program — CAD 20,000',
        'First place at RBC SA&I Case Comp — CAD 6,000',
        'Best Design at Innovation Showcase Student Hackathon, NPX Innovation'
      ]
    },
    {
      degree: 'BSc. Eng.',
      institution: 'Birla Institute of Technology & Science, Pilani — Dubai Campus',
      highlights: []
    }
  ],
  experience: [
    {
      role: 'Technical Project Manager',
      company: 'Binoloop',
      period: '01/2025 – Present',
      bullets: [
        'Improved execution of releases by 38% week to week across Full Stack, AI/ML and DevOps',
        'Executed product-level modifications and set feedback channels',
        'Achieved user satisfaction by developing AI solutions for multimodal data modelling (RAGs & LLMs)'
      ],
      url: 'https://www.binoloop.com/'
    },
    {
      role: 'Research & Development Engineer',
      company: 'BioSyft',
      period: '11/2024 – Present',
      bullets: [
        'Designed and developed innovative products',
        'Analyzed test data using statistical methods and visualization widgets'
      ],
      url: 'https://biosyft.io/'
    },
    {
      role: 'ML/AI/Bioinformatics Researcher',
      company: 'Ultraceuticals',
      period: '06/2022 – Present',
      bullets: [
        'Researching methods for drug discovery, docking, and chemical species',
        'Developing protein language models using diffusion techniques and NLP'
      ],
      url: 'https://www.ultraceuticals.in/about-us'
    },
    {
      role: 'Data Engineer',
      company: 'RBC',
      period: '01/2022 – 11/2024',
      bullets: [
        'Automated DAG creation using Airflow, saving execution time by 35%'
      ],
      url: 'https://www.rbc.com/about-rbc.html'
    },
    {
      role: 'Head of Engineering',
      company: 'nurtur',
      period: '01/2024 – 12/2024',
      bullets: [
        'Led engineering tasks: cloud deployments, backend, frontend, and web development',
        'Built NLP-enhanced RAG chatbots for postpartum depression support across AWS/Azure/GCP'
      ],
      url: 'https://nurturcare.com/'
    }
  ],
  projects: [
    {
      title: 'Persona & RAG-based LLMs (Flask demo)',
      timeframe: '01/2025 - Present',
      desc: 'Personal and business persona generation using RAG LLMs, integrated with a Flask demo site.',
      link: '#'
    },
    {
      title: 'Medical Trials Chatbot',
      timeframe: '01/2025 - Present',
      desc: 'Chatbot combining RAG, LLM, and API endpoints for a medical startup.',
      link: '#'
    },
    {
      title: 'Drug-response prediction (ML)',
      timeframe: '11/2020 – 02/2021',
      desc: 'A machine-learning solution for predicting pharmaco-chemical activity.',
      link: '#'
    }
  ],
  skills: [
    'Python', 'C++', 'Shell', 'Jupyter', 'React', 'Node.js', 'Docker', 'AWS', 'Azure', 'GCP', 'ML/AI', 'R&D', 'Process Engineering', 'Data Engineering'
  ],
  certifications: [
    'Udacity AI Product Manager', 'Microsoft Azure AI Nanodegree', 'AWS Machine Learning Nanodegree', 'LLMs, Chatbots, RAG, NLP (various)'
  ]
};

function IconLink({ href, children, label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100">
      {children}
      <span className="text-sm">{label}</span>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
      <header className="max-w-5xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-semibold">AS</div>
          <div>
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="text-sm text-slate-600 mt-1">{data.title}</p>
            <div className="mt-3 flex gap-3 items-center flex-wrap">
              <IconLink href={data.links.linkedin} label="LinkedIn"><Linkedin size={16} /></IconLink>
              <IconLink href={data.links.github} label="GitHub"><Github size={16} /></IconLink>
              <IconLink href={data.links.arxiv} label="ArXiv"><FileText size={16} /></IconLink>
              <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100"><Mail size={16} /> <span className="text-sm">{data.email}</span></a>
            </div>
          </div>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
          <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-xl font-semibold mb-4">Experience</motion.h2>
          <div className="space-y-6">
            {data.experience.map((e, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="border-l-2 border-slate-200 pl-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{e.role} <span className="text-slate-500 font-normal">— {e.company}</span></h3>
                    <p className="text-xs text-slate-500">{e.period}</p>
                  </div>
                  <div className="text-sm"><a href={e.url} target="_blank" rel="noreferrer" className="underline">Website</a></div>
                </div>
                <ul className="mt-3 list-disc list-inside text-sm text-slate-700">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-xl font-semibold my-6">Projects</motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.projects.map((p, i) => (
              <motion.a key={i} whileHover={{ y: -6 }} className="block bg-slate-50 p-4 rounded-lg shadow-sm hover:shadow-md" href={p.link} target="_blank" rel="noreferrer">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="text-xs text-slate-500">{p.timeframe}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
              </motion.a>
            ))}
          </div>
        </section>

        <aside className="bg-white p-6 rounded-2xl shadow space-y-6">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
            <h3 className="font-semibold">Education</h3>
            <div className="mt-3 space-y-3">
              {data.education.map((ed, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded">
                  <div className="text-sm font-medium">{ed.degree}</div>
                  <div className="text-xs text-slate-500">{ed.institution}</div>
                  {ed.highlights.length > 0 && (
                    <ul className="mt-2 text-xs list-disc list-inside text-slate-700">
                      {ed.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
            <h3 className="font-semibold">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-slate-100 rounded-full">{s}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
            <h3 className="font-semibold">Certifications</h3>
            <ul className="mt-3 text-sm list-disc list-inside text-slate-700">
              {data.certifications.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm text-slate-600 mt-2">{data.phone}</p>
            <p className="text-sm text-slate-600">{data.email}</p>
            <div className="mt-3 flex gap-2">
              <a href={data.links.github} target="_blank" rel="noreferrer" className="px-3 py-2 bg-black text-white rounded inline-flex items-center gap-2"><Github size={14}/> GitHub</a>
              <a href={data.links.linkedin} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded inline-flex items-center gap-2"><Linkedin size={14}/> LinkedIn</a>
            </div>
          </motion.div>
        </aside>
      </main>

      <footer className="mt-12 py-8 bg-white border-t">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-500">Built with React, TailwindCSS & Framer Motion • © {new Date().getFullYear()} Amardeep Singh</div>
      </footer>
    </div>
  );
}
