import React, { useState, useEffect } from "react";
import { Play, Sparkles, Terminal, CheckCircle, ArrowRight, Code } from "lucide-react";
import { AssistantSpecialization } from "../types";

export const ASSISTANT_TEMPLATES: AssistantSpecialization[] = [
  {
    id: "sales_predictor",
    title: "E-Commerce Growth Wizard",
    emoji: "📈",
    vibe: "Boost metrics, crush targets, grow sales, no cap.",
    description: "Predicts the highest-performing regions, customer segments, and products using Pandas, linear regression, and historical Walmart sales databases.",
    defaultPrompt: "Analyze my footwear sales dataset, find the highest growth categories, filter outliers, and forecast revenues with 95% confidence intervals.",
    simulatedPythonCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Loading FVCI Walmart Sales database
df = pd.read_csv("fvci_commerce_sales.csv")
df_cleaned = df.fillna(df.mean())

# Group-by analysis for seasonal forecasting
growth_index = df_cleaned.groupby("Category")["Revenue"].pct_change()
X = np.arange(len(df_cleaned)).reshape(-1, 1)
y = df_cleaned["Revenue"].values

model = LinearRegression().fit(X, y)
forecast = model.predict([[len(df_cleaned) + 1]])[0]`,
    simulatedOutput: {
      labels: ["Q1", "Q2", "Q3", "Q4", "Forecasted Next"],
      values: [120, 165, 210, 245, 310],
      unit: "k USD",
      insights: [
        "Aura Check: Sneakers segment is carrying your entire category growth (+38% QoQ).",
        "SQL Insights: West region holds a 1.4x higher purchase intensity index.",
        "Projections: Next quarter sales are linear regression-optimized to slam past $310k."
      ]
    }
  },
  {
    id: "churn_cop",
    title: "Retention Savior",
    emoji: "🛡️",
    vibe: "Stop clients from leaving. Save maximum value.",
    description: "Identifies early warning indicators of high-risk customer churn patterns. Uses Power BI modeling logic and Pandas pivot summaries.",
    defaultPrompt: "Scan active subscription profiles, flag users showing a sudden dip in login frequency, and calculate the overall churn coefficient.",
    simulatedPythonCode: `import pandas as pd
import seaborn as sns

# Querying client data from SQL
data = pd.read_sql("SELECT * FROM fvci_subscribers", conn)

# Calculating dropoff score
data['usage_delta'] = data['last_month_sessions'] - data['this_month_sessions']
churn_candidates = data[data['usage_delta'] > 4]

# Outputting risk clusters
clusters = churn_candidates.groupby('Plan').size()
print(f"High risk churn size: {len(churn_candidates)}")`,
    simulatedOutput: {
      labels: ["Premium Plan", "Standard Plan", "Free Tier", "Corporate"],
      values: [8, 22, 45, 12],
      unit: " Users Churned",
      insights: [
        "Risk Factor: Customers on Standard tier with < 3 monthly logins are 82% likely to exit.",
        "Action Strategy: Recommended an in-app prompt push for the top 45 Free Tier candidates.",
        "Financial Impact: Retaining just 15% of Premium Churners yields back $14k MRR."
      ]
    }
  },
  {
    id: "fraud_detective",
    title: "Fraud Shield",
    emoji: "🕵️",
    vibe: "Safe transactions only. Zero absolute scams.",
    description: "Detects anomalous buying behavior or suspicious card frequencies. Implements Matplotlib correlation heatmaps and statistics thresholds.",
    defaultPrompt: "Inspect e-commerce transaction velocities, isolate payments originating from multiple concurrent locations, and rank risk scores.",
    simulatedPythonCode: `import numpy as np
import scipy.stats as stats

# Fetch transactional metadata
v_limit = 5.2 # Standard deviations limit
speeds = np.random.normal(loc=1.2, scale=1.0, size=5000)

# Outlier tagging using Z-Score bounds
anomalies = np.where(np.abs(stats.zscore(speeds)) > 3.0)[0]
alert_ratio = len(anomalies) / len(speeds)
print(f"Secured transaction alert sequence triggered.")`,
    simulatedOutput: {
      labels: ["Card Velocity", "IP Hopping", "Device Spoof", "Safe Purchases"],
      values: [1.2, 5.8, 3.1, 89.9],
      unit: "% Traffic",
      insights: [
        "Shield Alert: 5.8% of daily API checks triggered multi-state IP logs in under 120s.",
        "Statistics Shield: Z-scores over 3.0 flagged directly to payment gateway integrations.",
        "Absolute W: Smooth transactions maintained for 89.9% of verified loyal users."
      ]
    }
  },
  {
    id: "hr_retention",
    title: "Aura Talent Tracker",
    emoji: "👥",
    vibe: "Optimize workspace vibe and boost productivity.",
    description: "Summarizes employee retention variables. Renders interactive heatmaps to balance workload distribution and improve general team stats.",
    defaultPrompt: "Assess hours logged versus completed milestones. Flag teams crossing burnout risk markers to improve HR retention factors.",
    simulatedPythonCode: `import pandas as pd
import matplotlib.pyplot as plt

# Loading HR database
staff_df = pd.read_csv("fvci_workplace_wellness.csv")

# Plotting output vectors
burnout_risk = staff_df[(staff_df['overtime'] > 12) & (staff_df['sat_score'] < 3.5)]
print(f"Risk Teams: {burnout_risk['Team'].unique()}")`,
    simulatedOutput: {
      labels: ["Engineering", "Sales Desk", "Design Lab", "HR Core"],
      values: [42, 60, 24, 10],
      unit: " Burnout Score",
      insights: [
        "Aura Meter: Sales Desk logged high overtime metrics with minor satisfaction return.",
        "Vesting Forecast: Stabilizing project distribution reduces early departure risk by 35%.",
        "W-Optimization: Recommended standard 4-day sprint layout to bolster productivity levels."
      ]
    }
  }
];

export default function AIAssistantSpecialist() {
  const [selectedId, setSelectedId] = useState<string>("sales_predictor");
  const [prompt, setPrompt] = useState<string>("");
  const [isCompiling, setIsCompiling] = useState<boolean>(false);
  const [compileStep, setCompileStep] = useState<number>(0);
  const [compileLogs, setCompileLogs] = useState<string[]>([]);
  const [showChart, setShowChart] = useState<boolean>(false);

  const activeTemplate = ASSISTANT_TEMPLATES.find(t => t.id === selectedId) || ASSISTANT_TEMPLATES[0];

  useEffect(() => {
    setPrompt(activeTemplate.defaultPrompt);
    setShowChart(false);
    setCompileLogs([]);
    setCompileStep(0);
  }, [selectedId]);

  const handleCompile = () => {
    setIsCompiling(true);
    setCompileStep(0);
    setCompileLogs([]);
    setShowChart(false);

    const logs = [
      `[FVCI Agentic compiler v2.4] Initializing ${activeTemplate.title} instance...`,
      `[SQL Connect] Establishing encrypted pipeline to Future Vision student sandbox...`,
      `[Vibe Engine] Parsing natural language intent: "${prompt}"`,
      `[Python virtualenv] Injecting pandas, numpy, and matplotlib libraries...`,
      `[Data Cleaning] Running ETL routines on raw industry parameters...`,
      `[Processing Vector] Calculating linear trends and target analytics...`,
      `[Agent Success] Custom AI Agent compiled and active on local preview port 3000! 🔥`
    ];

    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < logs.length) {
        setCompileLogs(prev => [...prev, logs[currentLog]]);
        setCompileStep(currentLog);
        currentLog++;
      } else {
        clearInterval(interval);
        setIsCompiling(false);
        setShowChart(true);
      }
    }, 450);
  };

  // Build a whatsapp enrollment text based on the personalized Custom Bot
  const getWhatsAppLink = () => {
    const customizedText = `Hey Future Vision! I just compiled my own "${activeTemplate.emoji} ${activeTemplate.title}" agent using Agentic Coding on your landing page. I want to enroll to build custom intelligent assistants through hands-on projects! Core details checked. Let's go!`;
    return `https://wa.me/919825771641?text=${encodeURIComponent(customizedText)}`;
  };

  return (
    <div id="ai-agent-playground" className="bg-white text-slate-800 rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
      
      {/* Decorative neon blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-500/5 border border-purple-500/15 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-600 mb-4 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            Hands-on Agentic AI Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
            Agentic Coding Playground ⚡
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base font-normal">
            No cap, you don't write boring boilerplate here. Pick a business model, direct the AI in plain English, compile it, and unlock dynamic interactive charts in real-time.
          </p>
        </div>

        {/* Template Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {ASSISTANT_TEMPLATES.map((item) => (
            <button
              id={`template-btn-${item.id}`}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                selectedId === item.id
                  ? "bg-slate-50 border-brand-accent shadow-sm"
                  : "bg-white border-slate-200 hover:bg-slate-50/50 hover:border-slate-300"
              }`}
            >
              <div className="text-2xl mb-2">{item.emoji}</div>
              <h4 className="font-extrabold text-xs md:text-sm text-slate-800">{item.title}</h4>
              <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">{item.vibe}</p>
            </button>
          ))}
        </div>

        {/* Playground Bento Box split layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column Input & Prompt Editor */}
          <div className="md:col-span-6 bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-brand-accent tracking-wider uppercase flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-ping" />
                  Agent Specification
                </span>
                <span className="text-xs font-mono text-slate-500 font-bold">{activeTemplate.title}</span>
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">{activeTemplate.description}</p>
              
              <label className="block text-xs font-bold text-slate-705 mb-2 font-mono">
                Prompt Intent (You command in plain English):
              </label>
              <textarea
                id="agent-prompt-input"
                className="w-full h-28 bg-white border border-slate-300 rounded-xl p-3 text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all font-mono leading-relaxed shadow-inner"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Instruct the AI helper to build exactly what you need..."
              />
            </div>

            <div className="mt-5">
              <button
                id="compile-agent-btn"
                onClick={handleCompile}
                disabled={isCompiling}
                className="w-full bg-gradient-to-r from-[#123B73] to-[#123B73] hover:from-[#1b4b8f] hover:to-[#123B73] border border-white/10 text-white font-black py-4 rounded-xl text-sm md:text-base flex items-center justify-center gap-2 shadow-[0_0_25px_-5px_rgba(18,59,115,0.3)] transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                {isCompiling ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Agentic Coding Agent building...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current text-white" />
                    Run Code & Compile Agent Vibe
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column Outputs / Simulated Terminal */}
          <div className="md:col-span-6 flex flex-col gap-4">
            
            {/* Real-time terminal compilation log */}
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 font-mono text-[10px] md:text-xs text-slate-200 h-44 overflow-y-auto flex flex-col gap-1.5 shadow-inner">
              <div className="flex items-center gap-1.5 text-slate-400 border-b border-slate-800 pb-1.5 mb-1 text-[10px] uppercase font-bold tracking-wider">
                <Terminal className="w-3 h-3 text-brand-accent" />
                Live Compiler Frame
              </div>
              
              {compileLogs.length === 0 && !isCompiling && (
                <div className="text-slate-500 italic my-auto text-center py-4">
                  <Code className="w-6 h-6 mx-auto mb-2 text-slate-700" />
                  Compiler idle. Click the button to inspect the code pipeline.
                </div>
              )}
              
              {compileLogs.map((log, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    index === compileStep && isCompiling ? "bg-white/10 text-brand-accent pl-1 font-bold" : "text-slate-350"
                  }`}
                >
                  <span className="text-slate-600 select-none mr-2">{index + 1}</span>
                  {log}
                </div>
              ))}
            </div>

            {/* Simulated Data Visualization Output */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex-1 flex flex-col justify-between overflow-hidden min-h-[180px] shadow-sm">
              {showChart ? (
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-brand-accent flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      Compiled Output: {activeTemplate.title} Live Forecast
                    </h5>
                    
                    {/* Simplified gorgeous live SVG Chart */}
                    <div className="h-28 flex items-end justify-between gap-2.5 px-2 mt-3 mb-3 border-b border-slate-200 pb-1">
                      {activeTemplate.simulatedOutput.labels.map((lbl, idx) => {
                        const val = activeTemplate.simulatedOutput.values[idx];
                        const maxVal = Math.max(...activeTemplate.simulatedOutput.values);
                        const heightPct = Math.round((val / maxVal) * 85);
                        const isForecast = idx === activeTemplate.simulatedOutput.labels.length - 1;

                        return (
                          <div key={idx} className="flex-1 flex flex-col items-center group relative cursor-help">
                            {/* Hover info label */}
                            <div className="absolute -top-6 bg-slate-800 px-2 py-0.5 rounded text-[9px] border border-slate-700 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                              {val}{activeTemplate.simulatedOutput.unit}
                            </div>
                            
                            <div 
                              style={{ height: `${heightPct}%` }}
                              className={`w-full rounded-t-md transition-all duration-500 shadow-sm ${
                                isForecast 
                                  ? "bg-gradient-to-t from-purple-500 to-cyan-400 animate-pulse border border-purple-400" 
                                  : "bg-gradient-to-t from-brand-accent/20 to-brand-accent/40 border border-brand-accent/30"
                              }`}
                            />
                            
                            <span className="text-[8px] md:text-[9px] text-slate-500 font-mono mt-1 text-center truncate w-full">
                              {lbl}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1 bg-white p-3 rounded-xl border border-slate-200 shadow-inner">
                    {activeTemplate.simulatedOutput.insights.map((ins, idx) => (
                      <p key={idx} className="text-[10px] text-slate-700 flex items-start gap-1 leading-normal font-sans font-normal">
                        <span className="text-brand-accent font-bold select-none">•</span>
                        {ins}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center my-auto py-6">
                  <p className="text-xs text-slate-400 font-mono">
                    {isCompiling ? "Analyzing arrays... rendering visuals..." : "Awaiting agent execution..."}
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Hyper high conversion WhatsApp trigger */}
        {showChart && (
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
            <div className="text-left font-sans">
              <span className="text-brand-accent text-xs font-bold font-mono tracking-wider flex items-center gap-1 uppercase">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                Special Offer Unlocked
              </span>
              <h4 className="text-base font-bold text-slate-800 mt-1">
                Aura Check: Enrollment includes this exact custom assistant sandbox!
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Secure your direct support desk + personal coaching deal with custom agents.
              </p>
            </div>
            
            <a
              id="playground-wa-cta"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent hover:bg-brand-accent/80 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_-3px_rgba(29,155,240,0.4)] flex items-center gap-2 group cursor-pointer"
            >
              Secure My Seat on WhatsApp
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
