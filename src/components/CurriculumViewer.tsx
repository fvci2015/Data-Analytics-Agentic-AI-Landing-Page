import React, { useState } from "react";
import { BookOpen, Calendar, HelpCircle, Laptop, Settings, Sparkles, Cpu, Code, Folder, Search, FileCode, Terminal } from "lucide-react";
import { Course } from "../types";

export const EDA_CAPSTONE_PROJECTS = [
  {
    id: "5",
    fileName: "income-statement",
    title: "Corporate Income Statement Analysis",
    type: "Financial Performance Analysis",
    description: "Multi-year corporate income statement formatting, expense distributions, growth trends, and visual profit margin mapping.",
    isMain: false,
    color: "border-l-blue-500 text-blue-600 bg-blue-50/40"
  },
  {
    id: "6",
    fileName: "Udemy-courses",
    title: "Udemy Course Distribution & Rating EDA",
    type: "Content & Pricing Optimization",
    description: "Statistical analysis of course review scores, content duration, subject classification, and subscriber density correlations.",
    isMain: false,
    color: "border-l-indigo-500 text-indigo-600 bg-indigo-50/40"
  },
  {
    id: "7",
    fileName: "Youtube-channels",
    title: "YouTube Channel Engagement & Subscriber Growth",
    type: "Entertainment Analytics",
    description: "Scraping and visualizing subscriber counts, view statistics, and category classifications for top global video publishers.",
    isMain: false,
    color: "border-l-red-500 text-red-650 bg-red-50/40"
  },
  {
    id: "8a",
    fileName: "Forest-fire-brazil",
    title: "Brazil Forest Fire Anomalies & Frequency Mapping",
    type: "Environmental Data Science",
    description: "Spatial and temporal mapping of Brazilian forest hot-spots to isolate seasonality, rainfall covariance, and wind patterns.",
    isMain: false,
    color: "border-l-amber-500 text-amber-600 bg-amber-50/40"
  },
  {
    id: "8b",
    fileName: "IMDB-movie-analysis",
    title: "IMDB Movie Ratings, Budgets & ROI Exploration",
    type: "Entertainment Valuation",
    description: "Identifying correlations between film production budgets, public review scores, genre mixtures, and worldwide box office returns.",
    isMain: false,
    color: "border-l-violet-500 text-violet-600 bg-violet-50/40"
  },
  {
    id: "9",
    fileName: "Sales-Analysis-main",
    title: "Global Multi-Channel Sales Performance",
    type: "E-Commerce Metrics",
    description: "Analyzing sales lifecycle, shipping bottlenecks, revenue leakages, and discount elasticity across dynamic regions.",
    isMain: false,
    color: "border-l-emerald-500 text-emerald-600 bg-emerald-50/40"
  },
  {
    id: "10",
    fileName: "churn-analysis-eda-project",
    title: "Subscription Churn Driver Identification",
    type: "Customer Success & Retention",
    description: "Deep customer attrition diagnostic, identifying lifetime value drops, contract-renewal resistance, and usage velocity triggers.",
    isMain: true,
    color: "border-l-pink-500 text-pink-600 bg-pink-50/40"
  },
  {
    id: "11",
    fileName: "Analysis of movie industry",
    title: "Movie Industry Box Office Trends",
    type: "Market Domain Exploration",
    description: "A comprehensive evaluation of the movie domain, mapping modern production trends right down to runtime distribution shifts.",
    isMain: true,
    color: "border-l-purple-500 text-purple-600 bg-purple-50/40"
  },
  {
    id: "12",
    fileName: "credit-card-fraud-detection-main",
    title: "Credit Card Fraud & Outlier Detection",
    type: "Fraud & Underwriting Protection",
    description: "Isolating anomalous credit card queries, high-frequency transaction patterns, and statistical geographic outliers.",
    isMain: true,
    color: "border-l-rose-500 text-rose-600 bg-rose-50/40"
  },
  {
    id: "13",
    fileName: "END-TO-END-Lending-Club-Case-Study",
    title: "Lending Club Portfolio & Credit Case Study",
    type: "Fintech Risk Credit Modeling",
    description: "Full borrower default probability exploration using personal metrics, grade distributions, and loan request attributes.",
    isMain: true,
    color: "border-l-cyan-500 text-cyan-600 bg-cyan-50/40"
  },
  {
    id: "14",
    fileName: "CARS24-EDA-PROJECT",
    title: "Cars24 Resale Value Predictors",
    type: "Automotive Economics & Resale",
    description: "Decoupling automotive price trends, mileage decay gradients, transmission premiums, and brand demand shifts across India.",
    isMain: true,
    color: "border-l-sky-500 text-sky-600 bg-sky-50/40"
  },
  {
    id: "15",
    fileName: "LINKEDIN_JOB_POSTING_DATA",
    title: "LinkedIn Job Postings Landscape Mapping",
    type: "HR & Employment Tech",
    description: "Mapping hot job domains, regional demand concentrations, salary index variance, and required skills profiles.",
    isMain: true,
    color: "border-l-teal-500 text-teal-600 bg-teal-50/40"
  },
  {
    id: "16",
    fileName: "WALMART-CUSTOMER-PURCHASES-EDA-PROJECT",
    title: "Walmart Customer Purchase Behaviour",
    type: "Big Retail Diagnostics",
    description: "Analyzing real purchase records, demographics baskets, sales seasonal spikes, and customer basket optimization limits.",
    isMain: true,
    color: "border-l-blue-600 text-blue-700 bg-blue-50/50"
  },
  {
    id: "17",
    fileName: "ZOMATO-EDA-PROJECT",
    title: "Zomato Restaurant Metrics & Consumer Preferences",
    type: "Hyperlocal Food Delivery Analysis",
    description: "Extracting rating dynamics, pricing corridors, restaurant location densities, and cuisine review indexes across major metropolitan areas.",
    isMain: true,
    color: "border-l-red-600 text-red-700 bg-red-50/50"
  },
  {
    id: "18",
    fileName: "loan project",
    title: "Banking Loan Default Risks Modeling",
    type: "Credit Risk Analysis",
    description: "Analytical risk assessment using demographic inputs, debt-to-income benchmarks, and historical payment defaults.",
    isMain: true,
    color: "border-l-slate-600 text-slate-700 bg-slate-50/60"
  }
];

export const FVCI_CURRICULUM: Course[] = [
  {
    id: 1,
    title: "Introduction to Data Analytics",
    subtitle: "Fundamentals of Data Science Frameworks",
    questions: [
      "How do modern companies make data-backed choices instead of guessing?",
      "What is the actual difference between structured, unstructured, and cross-sectional assets?"
    ],
    study: [
      "Foundations of Data Analytics - business, healthcare, digital marketing, social media tracks.",
      "Data-Driven Analysis - improving organizational performance and overall operational margins.",
      "Types of Data - Structured vs. Unstructured datasets, quantitative distributions, time-series analysis.",
      "Data Sources - scraping open datasets, pulling secure client APIs, checking database structures."
    ],
    projects: [
      "Mini-Project: Build an customized analytics repository by merging raw outputs.",
      "Vibe Project: Isolate market metrics, extract basic coefficients, and render insights."
    ],
    tools: ["Kaggle", "Screener.in", "Google Sheets"]
  },
  {
    id: 2,
    title: "Preparing Business-Ready Data with Excel",
    subtitle: "Advanced Excel Sheets Engineering",
    questions: [
      "How do I clean up messy vectors from different sources?",
      "Can I fully automate my recurring reports and dashboards with macro shortcuts?"
    ],
    study: [
      "Excel Ribbon configuration, workflows, saving and migrating CSV or PDF sheets.",
      "Advanced Shortcuts & editing, password protections, filling ranges, bulk actions.",
      "Visual Data Formatting & conditional styles, heatmaps, progress markers, icon scales.",
      "Advanced lookup structures like VLOOKUP, INDEX, MATCH, XLOOKUP, and text manipulation functions.",
      "Logical formulas (nested IF, IFS, IFERROR), scenario analysis, solver optimizations, and histograms."
    ],
    projects: [
      "Shoe Company Sales Analysis: Track profitability indexes across footwear lines.",
      "Hotel Chain Booking Dashboard: Real-time analysis of occupancy weights and sales.",
      "Interactive HR Dashboard: Track workforce metrics, metrics, and burnout vectors.",
      "Retail Sales Analysis Dashboard: Visualize category momentum and trend channels."
    ],
    tools: ["Microsoft Excel", "Google Sheets"]
  },
  {
    id: 3,
    title: "Data Querying & Analysis using SQL",
    subtitle: "Structured Query Language Mastery",
    questions: [
      "How can we pull raw data directly from active company database servers?",
      "How do multiple joins work to discover key relational trends?"
    ],
    study: [
      "Database Foundations for Business Analysts: Relational architecture, keys, schemas.",
      "Essentials queries (SELECT, WHERE, ORDER BY, GROUP BY, HAVING, LIKE filters).",
      "Data aggregation joining: INNER, LEFT, RIGHT joins, plus combining raw tables.",
      "Advanced SQL Business Intelligence: Multi-step logics with Subqueries and CTEs, Window functions, and conditional CASE statements."
    ],
    projects: [
      "Walmart Sales SQL Analysis: Unlocking regional and seasonal indicators.",
      "OLA Cabs SQL Dashboard: Map ride velocities, hours, and ride demand patterns.",
      "Zomato Orders analysis: Calculate retention cohorts and delivery parameters."
    ],
    tools: ["PostgreSQL", "SQL Server", "DBeaver"]
  },
  {
    id: 4,
    title: "Business Intelligence using Power BI",
    subtitle: "Next-Gen Dashboard Modeling & DAX",
    questions: [
      "How can I construct interactive real-time visuals for leadership executives?",
      "What is DAX and how does it create dynamic KPIs on the fly?"
    ],
    study: [
      "Power BI Ecosystem (Desktop & Mobile architectures, connecting databases like MySQL, CSV).",
      "Power Query Editor: Cleaning, transforming, merging columns, and formatting relationships.",
      "Advanced Data Modeling: Creating schemas, managing performance levels, active models.",
      "Calculated columns & DAX (Data Analysis Expressions): aggregations, logical parameters.",
      "Power BI Marketplace tools: scatter charts, geographic maps, funnel visual metrics."
    ],
    projects: [
      "Telecom Industry Churn Analysis: Isolate exactly why accounts close.",
      "Blinkit Quick-Commerce Report: Analyze product speeds and tracking channels.",
      "Bike Buyer Report: Decode buyer age-demographics and buy pattern regressions."
    ],
    tools: ["Power BI Desktop", "Power BI Service", "Query M Engine"]
  },
  {
    id: 5,
    title: "Agentic AI & Advanced AI Analytics",
    subtitle: "Claude Agents, Skills, Plugins, & API Connectors",
    questions: [
      "How do we deploy autonomous Claude Agents to crawl, clean, and analyze enterprise databases?",
      "How do custom agent skills, plugins, and API connectors bridge the gap between static LLMs and real-time execution?"
    ],
    study: [
      "Agentic AI Architecture: Understanding core loops, reasoning chains (ReAct), and autonomous planning systems.",
      "Claude Agents & Model Context Protocol (MCP): Orchestrating multi-agent systems and custom Claude system instructions.",
      "Agentic Skills & Capabilities: Implementing custom Python execution libraries, advanced vector searches, and specialized agent tools.",
      "Plugins & Custom Connectors: Designing secure API endpoints, OAuth configurations, and data connectors (Slack, Google Workspace, Database APIs).",
      "Human-in-the-Loop & Safety Guardrails: Establishing boundary parameters, cost limit buffers, and structured analytical evaluation."
    ],
    projects: [
      "Claude Agent Market Research Analyst: An autonomous research agent equipped with custom search plugins, scraping skills, and report generation connectors.",
      "Self-Healing Data Cleaning Agent: A custom python-execution agent that identifies, isolates, and repairs data schema anomalies automatically with feedback loops."
    ],
    tools: ["Claude & Anthropic SDK", "LangChain / LangGraph", "Model Context Protocol (MCP)", "Google AI Studio", "Python API Connectors", "Custom Plugins"]
  },
  {
    id: 6,
    title: "Core Python Programming",
    subtitle: "Foundational Code Structuring",
    questions: [
      "How can we automate calculation files using simple script loops?",
      "What are the target control flows needed to make smart alerts?"
    ],
    study: [
      "Python Basics and key Data Structures (lists, dicts, arrays, tuples).",
      "Control flow (if/else logs, nested while/for iteration loops).",
      "Working with Files & Data Manipulation: Reading, writing, and parsing text datasets."
    ],
    projects: [
      "Seven Up & Seven Down game: Logic state modeling.",
      "Dice Rolling Simulator: Automated probability simulator."
    ],
    tools: ["Python 3", "VS Code", "Jupyter Notebook"]
  },
  {
    id: 7,
    title: "Numerical Computing with NumPy",
    subtitle: "Multi-dimensional Array Operations",
    questions: [
      "How do we execute vector math operations across millions of rows in seconds?",
      "How do matrix operations assist in resource and price planning?"
    ],
    study: [
      "NumPy array structure creation (linspace, ones, zeros, arange matrices).",
      "Array Slicing, indexing, Boolean masking, arithmetic broadcasting.",
      "Advanced vector mathematics, dot products, linear regression matrixes."
    ],
    projects: [
      "Demand Forecasting Grid: Simulating consumer buying frequencies.",
      "Portfolio Allocation Engine: Custom matrix weights for corporate holdings."
    ],
    tools: ["NumPy", "Jupyter Notebook"]
  },
  {
    id: 8,
    title: "Data Analysis with Pandas",
    subtitle: "DataFrames & Series manipulation",
    questions: [
      "What is the single source of truth for clean datasets?",
      "How do we inspect, restructure, and merge dirty enterprise tables?"
    ],
    study: [
      "Pandas Basics: DataFrames creation, slicing records, parsing metrics.",
      "Data Cleaning: Handling missing variables, dropna/fillna parameters, column mapping.",
      "GroupBy: Complex aggregations, cohort calculations, time-series resampling."
    ],
    projects: [
      "E-Commerce transactions cleaner: Sanitizing raw customer transaction lists.",
      "Employee Income Analyzer: Assessing wage gap ratios and distribution bands."
    ],
    tools: ["Pandas Library", "Jupyter Notebook"]
  },
  {
    id: 9,
    title: "Data Visualization: Matplotlib & Seaborn",
    subtitle: "Scientific Plotting & Aesthetic Grids",
    questions: [
      "How do we present beautiful visual correlations that win in boardrooms?",
      "What are the ideal heatmaps and pairplots to communicate indicators?"
    ],
    study: [
      "Introduction to Matplotlib: scatter grids, subplot structures, export pipelines.",
      "Advanced styling: grid settings, legends, arrows, text annotations.",
      "Statistical plotting with Seaborn: relational charts, density curves, heatmaps."
    ],
    projects: [
      "Udemy Course Performance Plotter: Track pricing vs. course completion metrics.",
      "YouTube Top 5000 Channels Tracker: Dynamic bar grids and subscriber momentum."
    ],
    tools: ["Matplotlib", "Seaborn"]
  },
  {
    id: 10,
    title: "R Programming for Data Analytics",
    subtitle: "Statistical Programming & Outliers",
    questions: [
      "Which regions or user cohorts drive our core business momentum?",
      "How do RStudio visualization modules isolate structural anomalies?"
    ],
    study: [
      "Core R foundations, data structures (Vectors, Matrices, Lists, Data Frames).",
      "Control Flows & apply family functions for loopless row parsing.",
      "Exploratory metrics & grouped analyses, plotting with ggplot structures."
    ],
    projects: [
      "R Customer Segmentation: Uncover the highest LTV user pathways.",
      "R Seasonal Trends Visualizer: Quantifying quarter-over-quarter growth indices."
    ],
    tools: ["R Studio", "CRAN Packages"]
  },
  {
    id: 11,
    title: "Statistics Essentials & Exploratory Analysis",
    subtitle: "Hypothesis Testing & Significance",
    questions: [
      "Is that sudden increase in sales statistically significant or just random noise?",
      "How do corporate teams set up clean, randomized A/B tests?"
    ],
    study: [
      "Statistics Foundations: Descriptive stats, standard deviation, variance bounds.",
      "Probability curves, Distributions, Inferential testing parameters (Z-scores, p-values).",
      "Applied Analysis: Linear correlation, linear regression modeling, custom test groupings."
    ],
    projects: [
      "A/B Test Evaluator: Checking landing page button effectiveness.",
      "Sales driver tracker: Isolating which variables have the maximum statistical weight."
    ],
    tools: ["Scipy Stats", "Jupyter", "Statsmodels"]
  },
  {
    id: 12,
    title: "Advanced Capstone Projects (EDA)",
    subtitle: "Realistic Industry Repositories",
    questions: [
      "Can I build comprehensive analytical decks that wow hiring recruiters?",
      "How do we analyze diverse business cases under high-vibe corporate guidelines?"
    ],
    study: [
      "15 Full-Scale Exploratory Data Analysis (EDA) projects spanning finance, entertainment, ecology, and retail sectors.",
      "Structuring industry-grade project directories with a focus on non-parametric multi-stage (NPMS) architectures.",
      "Expert-designed notebooks tracing key business drivers, product optimization limits, and regional trends."
    ],
    projects: [
      "15 Live Repositories: Direct access to real datasets (Walmart, Zomato, Cars24, Lending Club, Churn, etc.)",
      "Aura Check: High-level portfolio deck quality verification directly mentored by industry operators."
    ],
    tools: ["SQL", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook", "GitHub"]
  }
];

export default function CurriculumViewer() {
  const [activeId, setActiveId] = useState<number>(2); // Start open with Course 2 (Excel) for visual value
  const [projectSearch, setProjectSearch] = useState<string>("");

  return (
    <div id="curriculum-timeline" className="py-16 bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-sm">
      
      {/* Intro visual header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-brand-accent text-xs font-bold font-mono tracking-[0.2em] uppercase flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-brand-accent" />
            PRACTITIONER CURRICULUM
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Comprehensive Syllabus 🗺️
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl font-normal">
            12 modules designed in absolute 100% practical project oriented structure. From foundational Excel spreadsheets to full agentic intelligence design.
          </p>
        </div>

        {/* Course statistics highlights with light border look */}
        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="text-center px-4 border-r border-slate-200">
            <span className="text-2xl font-black text-brand-accent block">12</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase font-bold tracking-wider">Modules</span>
          </div>
          <div className="text-center px-4 border-r border-slate-200">
            <span className="text-2xl font-black text-slate-800 block">288+</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase font-bold tracking-wider">Hours</span>
          </div>
          <div className="text-center px-4">
            <span className="text-2xl font-black text-purple-600 block">25+</span>
            <span className="text-[10px] text-slate-500 font-mono uppercase font-bold tracking-wider">Projects</span>
          </div>
        </div>
      </div>

      {/* Curriculum Grid Accordion List */}
      <div className="space-y-4">
        {FVCI_CURRICULUM.map((course) => {
          const isOpen = activeId === course.id;

          return (
            <div
              id={`curriculum-course-${course.id}`}
              key={course.id}
              className={`border rounded-2xl transition-all duration-350 overflow-hidden ${
                isOpen 
                  ? "bg-slate-50/75 border-brand-accent shadow-sm" 
                  : "bg-white border-slate-200 hover:bg-slate-50/45 hover:border-slate-300"
              }`}
            >
              <button
                id={`curriculum-trigger-${course.id}`}
                onClick={() => setActiveId(isOpen ? 0 : course.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold font-mono text-sm transition-all ${
                    isOpen ? "bg-brand-accent text-white" : "bg-slate-150 text-slate-500 border border-slate-200"
                  }`}>
                    {course.id < 10 ? `0${course.id}` : course.id}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-base md:text-lg flex items-center gap-2">
                       {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-light">{course.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {isOpen ? (
                    <span className="text-brand-accent text-xs font-mono font-bold uppercase hidden sm:inline tracking-wider">Active Module</span>
                  ) : (
                    <span className="text-slate-400 text-xs font-mono hidden sm:inline tracking-wider">Inspect Syllabus</span>
                  )}
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center border font-mono text-xs transition-transform duration-300 ${
                    isOpen ? "rotate-90 border-brand-accent/30 text-brand-accent bg-brand-accent/10" : "border-slate-200 text-slate-400"
                  }`}>
                    {isOpen ? "−" : "+"}
                  </div>
                </div>
              </button>

              <div 
                className={`transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? (course.id === 12 ? "max-h-[3000px] opacity-100 border-t border-slate-200 p-6 bg-white" : "max-h-[1200px] opacity-100 border-t border-slate-200 p-6 bg-white")
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                {/* Accordion Internal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Key questions column */}
                  <div className="md:col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-inner">
                    <div>
                      <div className="flex items-center gap-1.5 text-[#123B73] font-mono text-xs font-bold uppercase mb-2.5">
                        <HelpCircle className="w-3.5 h-3.5 text-[#123B73]" />
                        Anchor Questions:
                      </div>
                      <div className="space-y-3">
                        {course.questions?.map((q, idx) => (
                          <p key={idx} className="text-xs text-slate-700 font-medium italic leading-relaxed">
                            "{q}"
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200 flex gap-2">
                       <span className="text-[10px] font-mono text-purple-600 bg-purple-500/10 border border-purple-500/15 px-2.5 py-1 rounded-full uppercase font-bold tracking-wider">
                        S.M.A.R.T Learning Framework
                       </span>
                    </div>
                  </div>

                  {/* Core Syllabus column */}
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-1.5 text-slate-800 font-mono text-xs font-bold uppercase mb-3.5">
                      <BookOpen className="w-3.5 h-3.5 text-purple-500" />
                      Syllabus Details:
                    </div>
                    <ul className="space-y-2.5">
                      {course.study.map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-650 flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-[#123B73] rounded-full mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hands-on portfolio project column */}
                  <div className="md:col-span-3 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-emerald-600 font-mono text-xs font-bold uppercase mb-3.5">
                        <Laptop className="w-3.5 h-3.5 text-emerald-600" />
                        Live Projects:
                      </div>
                      <div className="space-y-2">
                        {course.projects?.map((proj, idx) => (
                          <div key={idx} className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200 font-normal">
                            {proj}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Styled Tech Tags */}
                    <div>
                      <span className="text-[10px] text-slate-450 font-mono uppercase block mb-1.5 font-bold">Stack Mastered:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.tools?.map((tool, idx) => (
                          <span key={idx} className="text-[10px] font-mono bg-[#123B73]/5 text-brand-accent border border-[#123B73]/15 px-2 py-0.5 rounded font-bold uppercase">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Specialty Folder Explorer for Course 12 (15 EDA Projects) */}
                  {course.id === 12 && (
                    <div className="md:col-span-12 mt-6 pt-6 border-t border-slate-200">
                      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 md:p-6 shadow-sm">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                          <div>
                            <span className="text-[9px] font-mono font-bold tracking-wider text-brand-accent uppercase bg-brand-accent/5 border border-brand-accent/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit">
                              <Folder className="w-3.5 h-3.5 text-brand-accent" />
                              15 Interactive Datasets Managed In Class
                            </span>
                            <h4 className="text-lg md:text-xl font-extrabold text-slate-800 mt-2">
                              Advanced Capstone EDA Repo Explorer 📂
                            </h4>
                            <p className="text-xs text-slate-500 mt-1 max-w-xl">
                              Browse each of the 15 enterprise-grade portfolio codebases built directly into the student material. Filter files instantly below.
                            </p>
                          </div>
                          <div className="relative w-full sm:w-72">
                            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              placeholder="Search project filenames or domains..."
                              value={projectSearch}
                              onChange={(e) => setProjectSearch(e.target.value)}
                              className="w-full text-xs bg-white text-slate-800 pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent font-medium shadow-sm"
                            />
                          </div>
                        </div>

                        {/* List Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[550px] overflow-y-auto pr-1">
                          {EDA_CAPSTONE_PROJECTS.filter(p => 
                            p.fileName.toLowerCase().includes(projectSearch.toLowerCase()) || 
                            p.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
                            p.type.toLowerCase().includes(projectSearch.toLowerCase()) ||
                            p.description.toLowerCase().includes(projectSearch.toLowerCase())
                          ).map((proj) => (
                            <div 
                              key={proj.id}
                              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-brand-accent/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                            >
                              <div>


                                <div className="flex items-center gap-2 mb-2">
                                  <FileCode className="w-4 h-4 text-brand-accent shrink-0" />
                                  <span className="font-mono text-xs font-bold text-slate-700 select-all tracking-tight break-all truncate group-hover:text-brand-accent transition-colors">
                                    {proj.fileName}
                                  </span>
                                </div>

                                <h5 className="text-xs font-extrabold text-slate-800 line-clamp-1 mt-1">
                                  {proj.title}
                                </h5>
                                <p className="text-[10px] text-slate-400 font-medium font-mono uppercase tracking-wide mt-1.5 block text-brand-accent/80">
                                  {proj.type}
                                </p>
                                <p className="text-[11px] text-slate-600 mt-2 leading-relaxed font-light">
                                  {proj.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          );
        })}
      </div>



    </div>
  );
}
