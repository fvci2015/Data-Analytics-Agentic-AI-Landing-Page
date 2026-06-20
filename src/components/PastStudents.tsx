import React from "react";
import { Users, GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import { StudentSuccess } from "../types";

export const SUCCESS_STORIES: StudentSuccess[] = [
  { name: "Archit Patel", role: "Senior Product Manager", company: "Amazon", color: "from-[#123B73] to-[#123B73]" },
  { name: "Abhay Shivnani", role: "Customer Fulfillment", company: "Walmart", color: "from-blue-500 to-indigo-600" },
  { name: "Rakshita Batra", role: "Data Analyst", company: "Amazon", color: "from-orange-500 to-red-500" },
  { name: "Kunjal Jadhav", role: "Data Analyst", company: "Decathlon", color: "from-cyan-500 to-blue-500" },
  { name: "Shubham Jhunjhunwala", role: "Senior Business Analyst", company: "Amazon", color: "from-yellow-500 to-amber-600" },
  { name: "Akshat Goyal", role: "Equity Research Analyst", company: "Niveshaay", color: "from-emerald-500 to-teal-600" },
  { name: "Aaryan Shewani", role: "Associate", company: "Banana Republic", color: "from-stone-500 to-neutral-700" },
  { name: "Keshav Agarwal", role: "Deal Evaluation & Operations", company: "Avinya Ventures", color: "from-violet-500 to-purple-600" },
  { name: "Krushal Bakriwala", role: "Data Analyst", company: "NJ Investment", color: "from-indigo-500 to-indigo-700" },
  { name: "Mani Priya", role: "Data Analyst", company: "NJ Investments", color: "from-pink-500 to-rose-500" },
  { name: "Manan Pugalia", role: "Consultant / Business Valuation", company: "Felix Advisory", color: "from-yellow-400 to-amber-500" },
  { name: "Ria Saraf", role: "Finance Manager", company: "Sun Packaging", color: "from-blue-600 to-cyan-500" },
  { name: "Pal Patel", role: "Data Analyst Intern", company: "Kombee Technologies", color: "from-teal-500 to-emerald-500" },
  { name: "Spandan Bhatnagar", role: "Specialist Automation", company: "Nestle India", color: "from-red-500 to-orange-600" },
  { name: "Praharsh Fitter", role: "Data Analyst", company: "NJ Investment", color: "from-indigo-500 to-indigo-800" }
];

export default function PastStudents() {
  return (
    <div id="alumni-success" className="py-16">
      
      {/* Title Layout */}
      <div className="mb-12">
        <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-accent uppercase flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-brand-accent" />
          PROOF OF EXCELLENCE
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 tracking-tighter">
          Alumni Placements
        </h2>
        <p className="text-slate-600 mt-3 text-sm md:text-base leading-relaxed max-w-lg font-normal">
          No cap, our graduates secure major wins. They transition from college classrooms directly into tech giants, automated corporate desks, and top-tier financial organizations.
        </p>
      </div>

      {/* Grid of Success items styled nicely around light tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SUCCESS_STORIES.map((s, idx) => (
          <div
            id={`success-card-${idx}`}
            key={idx}
            className="bg-white border border-slate-200/80 rounded-2xl p-4.5 flex items-center justify-between transition-all duration-300 hover:border-brand-accent/35 hover:shadow group shadow-sm"
          >
            <div className="flex items-center gap-4.5">
              {/* Colored initials avatar */}
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${s.color} p-[1px] shadow-sm flex items-center justify-center shrink-0`}>
                <div className="w-full h-full rounded-[10px] bg-slate-50 flex items-center justify-center">
                  <span className="text-xs text-slate-800 font-black">
                    {s.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-slate-800 font-bold text-sm tracking-tight group-hover:text-brand-accent transition-colors">
                  {s.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{s.role}</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <Building2 className="w-3 h-3 text-purple-600" />
                  <span className="text-[10px] text-purple-700 font-mono uppercase tracking-wide font-bold">{s.company}</span>
                </div>
              </div>
            </div>

            <div className="text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-full border border-brand-accent/15 text-[9px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5" />
              Placed
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
