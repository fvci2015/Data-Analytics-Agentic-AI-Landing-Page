import React, { useState } from "react";
import { Compass, ChevronRight, Download, Sparkles, Terminal, FileCode, Sliders, Bot, ShieldCheck } from "lucide-react";

interface Stage {
  id: string;
  stageNumber: string;
  phaseLabel: string;
  title: string;
  duration: string;
  description: string;
  badgeAccent: string;
  courseId: number; // Course ID to activate & scroll to
}

const ROADMAP_STAGES: Stage[] = [
  {
    id: "stage-1",
    stageNumber: "01",
    phaseLabel: "FOUNDATION",
    title: "Core Python Mastery: Week 1–8",
    duration: "Week 1–8",
    description: "Build an absolute procedural foundation. Master variables, loops, control flow, functions, collection data structures (lists, tuples, sets, dicts), and custom packages without relying on AI copy-paste.",
    badgeAccent: "text-blue-750 bg-blue-50 border-blue-200/60",
    courseId: 6 // Course 6: Core Python Programming
  },
  {
    id: "stage-2",
    stageNumber: "02",
    phaseLabel: "DATA & STORAGE",
    title: "Resilient Data Systems: Week 9–14",
    duration: "Week 9–14",
    description: "Master file I/O operations (CSV & JSON serialization), script modularity, and write bulletproof exception handling blocks that survive complex production environments.",
    badgeAccent: "text-indigo-750 bg-indigo-50 border-indigo-200/60",
    courseId: 8 // Course 8: Data Analysis with Pandas
  },
  {
    id: "stage-3",
    stageNumber: "03",
    phaseLabel: "UI & PROTOTYPING",
    title: "Prototyping & Streamlit: Week 15–18",
    duration: "Week 15–18",
    description: "Build dynamic, responsive web interfaces using Streamlit. Master page layouts, data displays, interactive charts, and secure AI API prompt configurations.",
    badgeAccent: "text-cyan-750 bg-cyan-50 border-cyan-200/60",
    courseId: 4 // Course 4: Business Intelligence using Power BI
  },
  {
    id: "stage-4",
    stageNumber: "04",
    phaseLabel: "AGENTIC ENGINEERING",
    title: "Autonomous AI Agents: Week 19–22",
    duration: "Week 19–22",
    description: "Architect multi-agent structures using CrewAI, LangGraph, and LangChain. Deploy production-grade autonomous agent systems with stateful loop tracking.",
    badgeAccent: "text-emerald-750 bg-emerald-50 border-[#bbf7d0]",
    courseId: 5 // Course 5: Agentic AI & Advanced AI Analytics
  }
];

export default function CourseRoadmap() {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleScrollToCourse = (courseId: number) => {
    // 1. Dispatch custom event to expand the correct module accordion
    const event = new CustomEvent("open-curriculum-course", { detail: { courseId } });
    window.dispatchEvent(event);

    // 2. Smoothly scroll into view with slight delay to allow accordion expansion animations
    setTimeout(() => {
      const el = document.getElementById(`curriculum-course-${courseId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-4", "ring-[#123B73]/30", "scale-[1.015]");
        setTimeout(() => {
          el.classList.remove("ring-4", "ring-[#123B73]/30", "scale-[1.015]");
        }, 2200);
      } else {
        const fall = document.getElementById("curriculum-breakdown");
        if (fall) {
          fall.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 150);
  };

  const generateAndDownloadSyllabus = () => {
    setDownloading(true);
    
    setTimeout(() => {
      const markdownSyllabus = `# Curriculum Syllabus: Data Analytics & Agentic AI Certification
Generated for candidate on: ${new Date().toLocaleDateString()}

========================================================================
GO FROM PYTHON CORE TO AGENTIC AI DEPLOYMENT IN 22 WEEKS
========================================================================

An absolute 4-stage engineering flight path that takes you from lines of basic syntax 
to production-ready, autonomous multi-agent pipelines. Includes hands-on projects,
one-on-one mentorship sessions, and offline capstone presentations.

------------------------------------------------------------------------
STAGE 01: FOUNDATION | Core Python Mastery (Week 1-8)
------------------------------------------------------------------------
* Focus: Establish clean, procedural logic. Understand parameters, loops, and operations.
* Covered Topics:
  - Variables, fundamental operators, deep conditional logical flows.
  - Collection structures: Lists, Tuples, Sets, and multi-level nested Dictionaries.
  - Functional paradigms: defining clean modules, parameters passing, Scope boundaries.
* Key Milestones: Avoid copy-paste coding templates. Write raw terminal algorithms.

------------------------------------------------------------------------
STAGE 02: DATA & STORAGE | Resilient Data Systems (Week 9-14)
------------------------------------------------------------------------
* Focus: Dynamic processing of files, tables, database queries, and exception recovery.
* Covered Topics:
  - Reading, parsing, and writing structured CSV, Excel spreadsheets, and raw JSON configurations.
  - Object modeling, modular workspace script structuring, importing packages.
  - Safeguarding pipelines: try-except-finally blocks, custom Exception throwers.
* Core Databases: MySQL, SQL Server, and relational schema designs.

------------------------------------------------------------------------
STAGE 03: UI & PROTOTYPING | Prototyping & Streamlit (Week 15-18)
------------------------------------------------------------------------
* Focus: Turn terminal scripts into beautiful interactive graphical web dashboards.
* Covered Topics:
  - Streamlit layout blocks, interactive inputs, select boxes, and state management.
  - Real-time live chart bindings using Recharts/D3 and standard visual controls.
  - Injecting secure LLM APIs and prompt configurations for real-time exploratory AI.
* Key Applications: Financial summaries, real-time demand predictors.

------------------------------------------------------------------------
STAGE 04: AGENTIC ENGINEERING | Autonomous AI Agents (Week 19-22)
------------------------------------------------------------------------
* Focus: Deploying stateful, multi-agent frameworks capable of planning and self-healing.
* Covered Topics:
  - Multi-agent topologies using CrewAI, LangGraph, and LangChain constructs.
  - Custom skills implementation, secure tool usage, API connectors.
  - Model Context Protocol (MCP) to bridge Claude LLMs with relational databases.
  - Stateful loops, memory checkpoints, and analytical human-in-the-loop triggers.

========================================================================
FULL COURSE STRUCTURE OUTLINE
========================================================================
Course 1: Introduction to Data Analytics & Screener.in
Course 2: Advanced Business Excel Masterclass
Course 3: Relational SQL Master queries & CTE loops
Course 4: Business Intelligence using Tableau / Power BI Workspace
Course 5: Agentic AI & Advanced AI Analytics (Model Context Protocol, Claude system logs)
Course 6: Foundational Core Python Programming
Course 7: High-speed Scientific NumPy Arrays
Course 8: Professional Analytics & Manipulation with Pandas
Course 9: Industrial Visual graphs with Matplotlib & Seaborn
Course 10: Statistical R Programming Essentials
Course 11: Quantitative Hypothesis & A/B testing methods
Course 12: Advanced Capstone Real-world Repositories

========================================================================
Let's launch your analytics career! Book your seats now.
========================================================================
`;
      const blob = new Blob([markdownSyllabus], { type: "text/markdown;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "Data_Analytics_and_Agentic_AI_Syllabus.md");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section id="course-roadmap" className="relative py-20 bg-slate-50/50 overflow-hidden border-t border-slate-200/55 scroll-mt-24">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block exactly matching user image style */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#123B73] bg-[#eff6ff] border border-[#e0f1fe] uppercase">
            <Compass className="w-3.5 h-3.5" />
            Learning Journey
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight text-center max-w-4xl mx-auto uppercase leading-[1.1]">
          Go From <span className="text-[#123B73]">Python Core</span> To <span className="text-indigo-600">Agentic AI Deployment</span> In 22 Weeks
        </h2>
        
        <p className="text-slate-500 text-sm md:text-base mt-4 max-w-2xl mx-auto text-center font-medium leading-relaxed">
          An absolute 4-stage engineering flight path that takes you from lines of basic syntax to production ready, autonomous multi-agent pipelines.
        </p>

        {/* Vertical Timeline container */}
        <div className="relative mt-20 max-w-5xl mx-auto">
          
          {/* Central Vertical Line (hidden on tiny screens, left-aligned standard) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200/80 -translate-x-1/2 pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-16">
            
            {ROADMAP_STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div 
                  key={stage.id} 
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outer spacing block on desktop for symmetry */}
                  <div className="w-full md:w-1/2 pr-0 md:pr-12 md:pl-0" />

                  {/* Node Dot on Timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-350 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#123B73]" />
                    </div>
                  </div>

                  {/* Actual Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? "md:pr-12 md:pl-0 text-left" : "md:pl-12 text-left"
                  }`}>
                    <div 
                      className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-8 hover:shadow-[0_20px_45px_-12px_rgba(18,59,115,0.08)] hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group relative"
                      onClick={() => handleScrollToCourse(stage.courseId)}
                    >
                      {/* Top Capsule Row */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-extrabold tracking-wider border ${stage.badgeAccent} uppercase`}>
                          {stage.phaseLabel}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          STAGE {stage.stageNumber}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 tracking-tight flex items-center gap-2">
                        <span className="text-slate-400 font-extrabold">{stage.stageNumber}</span>
                        {stage.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-500 leading-relaxed font-normal mb-6">
                        {stage.description}
                      </p>

                      {/* Horizontal Separator */}
                      <div className="border-t border-slate-100 my-4" />

                      {/* Interactive Trigger row */}
                      <div className="flex items-center justify-between text-[#123B73] group-hover:text-brand-accent transition-colors font-bold text-xs">
                        <span className="tracking-tight italic">
                          Interactive curriculum exercises included
                        </span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Download Button with pristine CTA styling */}
        <div className="flex flex-col items-center justify-center mt-16 md:mt-20">
          <button
            id="download-syll-btn"
            onClick={generateAndDownloadSyllabus}
            disabled={downloading}
            className={`px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-sm hover:shadow transition-all flex items-center gap-2 group border ${
              downloadSuccess 
                ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                : "bg-[#123B73] border-transparent text-white hover:bg-[#1a4b8f]"
            }`}
          >
            {downloading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Compiling Detailed Syllabus...
              </>
            ) : downloadSuccess ? (
              <>
                <ShieldCheck className="w-4 h-4 text-emerald-650 animate-bounce" />
                Syllabus Downloaded! (.md)
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" />
                DOWNLOAD DETAILED SYLLABUS
              </>
            )}
          </button>
          <p className="text-[11px] text-slate-400 mt-2 font-mono">
            Structured Markdown with all 12 modules, Capstone files & case projects.
          </p>
        </div>

      </div>
    </section>
  );
}
