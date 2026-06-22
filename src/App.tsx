import React, { useState } from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  CheckCircle, 
  Terminal, 
  MapPin, 
  Star, 
  Briefcase, 
  Database, 
  Zap, 
  GraduationCap, 
  CheckCircle2, 
  HelpCircle, 
  Building2, 
  ExternalLink,
  Braces,
  Sliders,
  Bot,
  FileCode,
  Github,
  Cpu,
  BookOpen,
  Globe,
  LayoutGrid,
  Layers
} from "lucide-react";
import AIAssistantSpecialist from "./components/AIAssistantSpecialist";
import CurriculumViewer from "./components/CurriculumViewer";
import MentorsGrid from "./components/MentorsGrid";
import PastStudents from "./components/PastStudents";
import CourseRoadmap from "./components/CourseRoadmap";
import FeeSchedule from "./components/FeeSchedule";
import WhatsAppCustomizer from "./components/WhatsAppCustomizer";

const learningMilestones = [
  {
    icon: Terminal,
    title: "Core Python Mastery",
    description: "Build an absolute procedural footing. Master variables, operators, deep conditional flows, nested control loops, and custom function definitions."
  },
  {
    icon: Braces,
    title: "Complex Data Structures",
    description: "Undergo rigorous training on collection types. Harness Lists, tuples, sets, nested dictionaries, and advanced data manipulation methodologies."
  },
  {
    icon: FileCode,
    title: "File Systems & Resiliency",
    description: "Read, write, compile, and parse structured CSV and JSON datasets. Build bulletproof exception systems using try-except-finally blocks."
  },
  {
    icon: Sliders,
    title: "Interactive Web Interfaces",
    description: "Convert raw analytical code scripts into full-scale, responsive streamable data dashboards using Streamlit layout widgets and session state cache keys."
  },
  {
    icon: Database,
    title: "Full-Stack Web Backends",
    description: "Construct scalable web application portals using Flask servers, managing template render hierarchies, system routes, and custom API requests."
  },
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    description: "Deploy advanced cognitive architectures using CrewAI, LangGraph, and LangChain. Master tools customisations, graph loops, and task delegation."
  }
];

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [logoError, setLogoError] = useState<boolean>(false);

  const WHATSAPP_NUMBER = "9825771641";
  
  // Custom enrollment pre-filled text
  const getWhatsAppURL = (sourceContext: string) => {
    const text = `Hey Future Vision! I am lands on your page for the Data Analytics + Agentic Coding Certificate course. I want to secure my admission slot and get details about the upcoming batch! Context: [${sourceContext}]`;
    return `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const locations = [
    { 
      name: "Adajan - Pal", 
      address: "115, raj victoria complex, pal gam circle, pal, surat", 
      phone: "+91 9825771641", 
      mapUrl: "https://maps.app.goo.gl/eYfmABMew3HgrVZk8"
    },
    { 
      name: "Citylight", 
      address: "G-40, Navmangalam complex, opp. agrsen bhavan, Surat", 
      phone: "+91 9825771641", 
      mapUrl: "https://maps.app.goo.gl/XPJDB6YkFR8Wpk4EA"
    },
    { 
      name: "Vesu", 
      address: "G-48, J9 high street, canal road, vesu, surat", 
      phone: "+91 9825771641", 
      mapUrl: "https://maps.app.goo.gl/L6rizX8Yk6Hi7yfBA"
    }
  ];

  const careerRoles = [
    { title: "Data Analyst", demand: "Extremely High 🔥", typicalWork: "Query SQL databases, format Excel indicators, run linear forecasting models." },
    { title: "Business Analyst", demand: "Lucrative 💰", typicalWork: "Create real-time KPI metrics in Power BI, model financial growth strategies." },
    { title: "Risk Analyst", demand: "High Integrity 🛡️", typicalWork: "Filter fraud transaction variables, run outlier Z-score anomalies." },
    { title: "Product Analyst", demand: "Strategic 🚀", typicalWork: "Uncover user retention trends, group customer segments automatically." },
    { title: "Healthcare Analyst", demand: "Growing 🏥", typicalWork: "Organize patient metrics, map clinical correlation heatmaps." }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-brand-accent selection:text-white overflow-x-hidden relative">
      
      {/* Decorative Blur Ambient Lights adapted for beautiful light canvas */}
      <div className="absolute top-[-5%] left-[-5%] w-[450px] h-[450px] bg-blue-100/60 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[550px] h-[550px] bg-cyan-100/50 rounded-full blur-[160px] -z-10 pointer-events-none" />
      <div className="absolute top-[35%] right-[12%] w-[350px] h-[350px] bg-indigo-50/60 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Dynamic Header */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 px-4 md:px-8 py-5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {!logoError ? (
              <img 
                src="https://futurevisioncomputers.com/wp-content/uploads/2019/07/Untitled-1-1.png"
                alt="Future Vision Computer Institute Logo"
                className="h-10 w-auto object-contain"
                onError={() => setLogoError(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="px-3 py-1.5 bg-gradient-to-r from-[#123B73] to-[#1e5297] rounded-xl flex items-center justify-center font-black text-white relative shadow-lg shadow-brand-accent/15 border border-white/15">
                <span className="text-xs tracking-tight font-black uppercase font-mono">FUTURE</span>
                <span className="text-[10px] ml-1 bg-white text-[#123B73] px-1 py-0.2 rounded font-black">VISION</span>
              </div>
            )}
            <div>
              <span className="text-[10px] text-slate-500 tracking-widest block uppercase font-mono leading-none font-bold">COMPUTER INSTITUTE</span>
              <span className="text-[9px] text-[#123B73] tracking-wider font-bold">ESTD 2006 • SURAT</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider font-bold">
            <a href="#agentic-coding-sandbox" className="text-slate-600 hover:text-brand-accent transition-colors">Playground</a>
            <a href="#curriculum-breakdown" className="text-slate-600 hover:text-brand-accent transition-colors">Syllabus</a>
            <a href="#program-fee-schedule" className="text-slate-600 hover:text-brand-accent transition-colors">Fees</a>
            <a href="#success-placement" className="text-slate-600 hover:text-brand-accent transition-colors">Placed</a>
            <a href="#locations-sector" className="text-slate-600 hover:text-brand-accent transition-colors">Centers</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              id="nav-wa-cta"
              href={getWhatsAppURL("Floating Nav Button")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent hover:bg-brand-accent/80 text-white font-black text-xs px-5 py-2.5 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(29,155,240,0.4)] flex items-center gap-2 group cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5" />
              Apply Now 📲
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Scaffold */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-24 py-12">
        
        {/* Section 1: Hero Section */}
        <section id="hero-max" className="text-center relative pt-8 pb-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="inline-block px-3.5 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded text-[10px] uppercase font-bold tracking-[0.2em] mb-2 animate-fade-in">
              ⚡ SURAT'S PREMIER PRACTICAL DATA ANALYTICS ACADEMY IS LIVE
            </div>

            <h1 className="text-4xl md:text-7xl font-black leading-[0.95] tracking-tighter text-slate-950 animate-fade-in">
              STOP GUESSING.<br />
              <span className="text-brand-blue">BECOME A PRO DATA ANALYST.</span>
            </h1>

            <p className="mt-6 text-slate-600 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
              No dry academic lectures. <span className="text-slate-900 font-bold">100% practical project oriented</span>. Master Advanced Excel workbooks, write clean SQL database queries, configure live Power BI boards, and lock in the groundbreaking new wave of Agentic Coding.
            </p>

            {/* Micro-Highlight Badges built with premium white cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 text-left">
              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl flex flex-col justify-between shadow-sm hover:border-brand-accent/30 hover:shadow-md transition-all duration-300">
                <span className="text-[10px] text-brand-accent font-bold uppercase tracking-wider block font-mono">100% Practical</span>
                <h4 className="text-base font-extrabold text-slate-800 mt-2">S.M.A.R.T Method</h4>
                <p className="text-[10px] text-slate-500 mt-1">100% Practical Live Labs</p>
              </div>
              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl flex flex-col justify-between shadow-sm hover:border-brand-accent/30 hover:shadow-md transition-all duration-300">
                <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider block font-mono">Industrial Scope</span>
                <h4 className="text-base font-extrabold text-slate-800 mt-2">15+ Capstones</h4>
                <p className="text-[10px] text-slate-500 mt-1">Walmart, OLA, Blinkit</p>
              </div>
              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl flex flex-col justify-between shadow-sm hover:border-brand-accent/30 hover:shadow-md transition-all duration-300">
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider block font-mono">Expert Guidance</span>
                <h4 className="text-base font-extrabold text-slate-800 mt-2">20+ Years Experience</h4>
                <p className="text-[10px] text-slate-500 mt-1">Founder Led & Direct Mentorship</p>
              </div>
              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl flex flex-col justify-between shadow-sm hover:border-brand-accent/30 hover:shadow-md transition-all duration-300">
                <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider block font-mono">ESTD 2006</span>
                <h4 className="text-base font-extrabold text-slate-800 mt-2">4.9 Rated</h4>
                <p className="text-[10px] text-slate-500 mt-1">Two Decades of Excellence</p>
              </div>
            </div>

            {/* Major call to action trigger block matching design spec */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                id="hero-primary-wa-cta"
                href={getWhatsAppURL("Hero Primary Button")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-[#123B73] to-[#123B73] hover:from-[#1b4b8f] hover:to-[#123B73] border border-white/15 text-white font-black px-10 py-5 rounded-2xl text-lg uppercase tracking-wider shadow-[0_0_40px_-5px_rgba(18,59,115,0.4)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Apply via WhatsApp
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-secondary-scroll"
                href="#agentic-coding-sandbox"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold px-10 py-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Terminal className="w-4 h-4 text-brand-accent" />
                Try Interactive Sandbox
              </a>
            </div>

          </div>
        </section>

        {/* Section: What You'll Learn - Milestones Grid */}
        <section id="program-learning-highlights" className="scroll-mt-24 py-6">
          <div className="text-left mb-12">
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#123B73] uppercase block mb-2">
              WHY CHOOSE THIS PROGRAM?
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              What you'll learn-From Prompts to Prototypes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningMilestones.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200/60 rounded-3xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(18,59,115,0.06)] hover:border-slate-300 transition-all duration-300 flex flex-col items-start text-left group"
                >
                  <div className="bg-[#eff6ff] border border-[#e0f1fe] p-3.5 rounded-2xl mb-6 text-[#123B73] group-hover:scale-105 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Course Journey Roadmap (22 Weeks) */}
        <CourseRoadmap />

        {/* Section 2: Detailed Syllabus Curriculum */}
        <section id="curriculum-breakdown" className="scroll-mt-24">
          <CurriculumViewer />
        </section>

        {/* Section 3: Agentic Coding Sandbox Component */}
        <section id="agentic-coding-sandbox" className="scroll-mt-24">
          <AIAssistantSpecialist />
        </section>

        {/* Section 5: Official Course Tool Stack */}
        <section id="tools-showcase" className="py-16 bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-sm relative overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase italic font-black">
              OFFICIAL COURSE TOOL STACK
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2.5 max-w-xl mx-auto font-medium">
              Hands-on training strictly focused on industry-standard platforms, APIs, and databases.
            </p>
          </div>

          {/* Tools Flow layout */}
          <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center">
            {/* Row 1 / First Batch of tools */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
              {[
                { name: "Python", icon: Terminal, textColor: "text-blue-600/90", bgColor: "bg-blue-50/60", borderColor: "border-blue-100" },
                { name: "GitHub", icon: Github, textColor: "text-slate-800/90", bgColor: "bg-slate-50/60", borderColor: "border-slate-200/70" },
                { name: "Google Colab", icon: Layers, textColor: "text-amber-600/90", bgColor: "bg-amber-50/60", borderColor: "border-amber-100" },
                { name: "Streamlit", icon: LayoutGrid, textColor: "text-rose-500/90", bgColor: "bg-rose-50/60", borderColor: "border-rose-100" },
                { name: "Flask", icon: Globe, textColor: "text-slate-600/90", bgColor: "bg-slate-50/60", borderColor: "border-slate-100" },
                { name: "MySQL", icon: Database, textColor: "text-sky-600/90", bgColor: "bg-sky-50/60", borderColor: "border-sky-100" },
                { name: "OpenAI", icon: Sparkles, textColor: "text-emerald-600/90", bgColor: "bg-emerald-50/60", borderColor: "border-emerald-100" }
              ].map((tool, idx) => {
                const IconComponent = tool.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-xl px-5 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)] inline-flex items-center gap-3 text-slate-800 font-bold text-sm tracking-tight hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-default"
                  >
                    <div className={`${tool.bgColor} ${tool.textColor} ${tool.borderColor} border p-1.5 rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{tool.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Row 2 / Second Batch of tools */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
              {[
                { name: "Anthropic / Claude", icon: Bot, textColor: "text-orange-600/90", bgColor: "bg-orange-50/60", borderColor: "border-orange-100" },
                { name: "Google AI Studio", icon: Cpu, textColor: "text-indigo-600/90", bgColor: "bg-indigo-50/60", borderColor: "border-indigo-100" },
                { name: "Google NotebookLM", icon: BookOpen, textColor: "text-violet-600/90", bgColor: "bg-violet-50/60", borderColor: "border-violet-100" }
              ].map((tool, idx) => {
                const IconComponent = tool.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-xl px-5 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)] inline-flex items-center gap-3 text-slate-800 font-bold text-sm tracking-tight hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-default"
                  >
                    <div className={`${tool.bgColor} ${tool.textColor} ${tool.borderColor} border p-1.5 rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Career Pathways */}
        <section id="career-paths">
          <div className="mb-10 max-w-xl">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-accent uppercase flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5" />
              TARGET PLACEMENT METRICS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Unlock High-Paying Placement Roles 📈
            </h2>
            <p className="text-slate-600 text-xs md:text-sm mt-2 leading-relaxed">
              Enterprises are currently generating quintillions of records weekly. They are desperate for modern analysts who can write quick insights and automated helpers rather than manual code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {careerRoles.map((role, idx) => (
              <div 
                id={`career-role-${idx}`}
                key={idx} 
                className="bg-white border border-slate-200/80 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-accent/35 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <span className="text-[9px] font-mono tracking-wider text-[#123B73] uppercase bg-[#123B73]/10 border border-[#123B73]/20 px-2 py-0.5 rounded-full font-bold">
                    {role.demand}
                  </span>
                  <h4 className="text-base font-black text-slate-800 mt-4">{role.title}</h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {role.typicalWork}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Placed Alumni Showcase */}
        <section id="success-placement" className="scroll-mt-24">
          <PastStudents />
        </section>

        {/* Section 8: Group Experts Grid */}
        <section id="expert-mentorship-grid" className="scroll-mt-24">
          <MentorsGrid />
        </section>

        {/* Section: Program Fee Schedule */}
        <FeeSchedule />

        {/* Section: WhatsApp Interactive Prompt customizer */}
        <WhatsAppCustomizer />

        {/* Section 9: Estd 2006 & Surat locations section */}
        <section id="locations-sector" className="scroll-mt-24 py-16 bg-white rounded-3xl border border-slate-200 p-6 md:p-10 relative overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-accent uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                PHYSICAL ACCESSIBILITY IN SURAT
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Three High-Tech Hubs. One vision. 🗺️
              </h3>
              <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-sans">
                Future Vision was established in 2006 as Surat's premier hardware & software coaching hub. Our three local facilities feature state-of-the-art interactive labs, expert hardware support desks, and fast private networks.
              </p>

              {/* Dynamic Locations filtering */}
              <div className="space-y-3.5 pt-3">
                {locations.map((loc, idx) => (
                  <div 
                    id={`loc-item-${idx}`}
                    key={idx}
                    className="p-4.5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand-accent/35 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-extrabold text-slate-800">{loc.name}</h4>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{loc.address}</p>
                    <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-200/50">
                      <p className="text-[10px] text-brand-accent font-mono font-bold">{loc.phone}</p>
                      <a 
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-blue-650 hover:text-blue-800 font-mono flex items-center gap-1 transition-all cursor-pointer font-bold"
                      >
                        <MapPin className="w-3 h-3 text-blue-600 animate-pulse" />
                        View Map
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Why Future Vision details column */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-brand-accent/15 hover:bg-slate-100/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
                    <Star className="w-4.5 h-4.5 text-indigo-600 fill-indigo-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">4.9/5 Google Business Certified</h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-normal">
                    Check our local notice review profiles. Parents and graduates rate our coaching, curriculum density, and mentor approach.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-brand-accent/15 hover:bg-slate-100/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                    <Building2 className="w-4.5 h-4.5 text-cyan-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">12+ Active Hiring Partners</h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-normal">
                    We host student pitch sessions with recruiters from Vasundhara, Surat Jugaad, Erasoft, and LogixBuilt to fast track career alignments.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-brand-accent/15 hover:bg-slate-100/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                    <Zap className="w-4.5 h-4.5 text-emerald-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">Personal Branding Coaching</h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-normal">
                    We curate candidate resumes, optimize individual LinkedIn search visibility indices, and polish client public speaking.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-brand-accent/15 hover:bg-slate-100/30 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-3">
                    <GraduationCap className="w-4.5 h-4.5 text-brand-accent" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">1-on-1 Doubt Sessions</h4>
                  <p className="text-xs text-slate-500 mt-1.5 leading-normal">
                    Stuck on an Excel lookup nested loop, or a SQL cross-join? Pull our mentors for personal session clearances anytime.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 10: Epic final Frosted Call-To-Action */}
        <section id="last-epic-cta" className="text-center bg-gradient-to-br from-white to-blue-50/40 border border-slate-200 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-sm">
          
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
              QUIT DOOMSCROLLING.<br />START SKILLMAXING. 📈
            </h2>
            <p className="text-slate-650 text-xs md:text-sm leading-relaxed max-w-md mx-auto font-light font-normal text-slate-600">
              Get certified in 6 Months or join our 12-week intensive track. Connect now for a direct portfolio demo and claim special student pricing slots.
            </p>

            <div className="pt-6">
              <a
                id="footer-wa-cta"
                href={getWhatsAppURL("Epic Footer CTA Banner")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-[#123B73] to-[#123B73] hover:from-[#1b4b8f] hover:to-[#123B73] border border-white/10 text-white font-black px-12 py-5 rounded-2xl text-lg uppercase tracking-wider shadow-[0_0_40px_-5px_rgba(18,59,115,0.4)] transition-all inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                Book your seats now
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Styled Footnote */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 md:px-8 text-center text-xs text-slate-500 font-mono shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Future Vision Computer Institute (FVCI). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#curriculum-breakdown" className="hover:text-brand-accent">Syllabus</a>
            <a href="#locations-sector" className="hover:text-brand-accent">Centers</a>
            <a href="https://futurevisioncomputers.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent flex items-center gap-1">
              futurevisioncomputers.com
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
