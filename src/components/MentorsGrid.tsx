import React from "react";
import { Award, GraduationCap, Link2, Sparkles, User, Briefcase } from "lucide-react";
import { ExpertMentor } from "../types";

export const EXPERT_MENTORS: ExpertMentor[] = [
  {
    name: "Siddharth Parakh",
    title: "Founder & Data Science Mentor",
    details: "A legendary tech pioneer with 20+ years of high-vibe experience. Siddharth has spearheaded computer training in Surat since 2006. He blends deep technical brilliance from an IIIT-Bangalore (Machine Learning / Data Science & AI) specialization with keen commercial insights from an MBA (Finance) from NMIMS.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
    tags: ["FOUNDER", "IIIT-B ALUMNI", "20+ YRS EXP", "DATA & FINANCE"]
  },
  {
    name: "Yash Jain",
    title: "Business Analytics Expert",
    details: "A dedicated financial and technology mentor with over 9 years of deep enterprise education work. Yash specializes in complex Data Analytics processes, custom SQL schemas, and Power BI DAX modeling, making him one of the top quantitative professionals in Gujarat.",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=300",
    tags: ["M.COM FINANCE", "BUSINESS INTELLIGENCE", "9+ YRS EXP", "SQL & POWER BI"]
  }
];

export default function MentorsGrid() {
  return (
    <div id="expert-mentors" className="py-16">
      
      {/* Title block */}
      <div className="text-center mb-12">
        <span className="text-xs font-mono font-bold tracking-[0.2em] text-brand-accent uppercase flex items-center justify-center gap-1">
          <Award className="w-3.5 h-3.5 text-brand-accent" />
          EXPERT INSTRUCTOR SQUAD
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mt-2">
          Learn From Elite Operators
        </h2>
        <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto font-normal">
          No dry academics. Learn directly from founders, IIIT-ML scholars, and Gen AI software builders who solve enterprise problems daily.
        </p>
      </div>

      {/* Grid of Mentors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {EXPERT_MENTORS.map((m, index) => (
          <div
            id={`mentor-card-${index}`}
            key={index}
            className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between transition-all duration-350 hover:border-brand-accent/30 hover:shadow-xl group relative overflow-hidden shadow-sm"
          >
            {/* Top decorative badge */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-accent/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Profile Image & Icon combo */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  {m.name === "Siddharth Parakh" ? (
                    /* Render a classy custom styled avatar representation */
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#123B73] to-[#123B73] p-[2px] shadow-sm">
                      <div className="w-full h-full rounded-[14px] bg-slate-50 flex items-center justify-center">
                        <span className="text-lg font-black text-[#123B73]">SP</span>
                      </div>
                    </div>
                  ) : m.name === "Yash Jain" ? (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#123B73] to-[#123B73] p-[2px] shadow-sm">
                      <div className="w-full h-full rounded-[14px] bg-slate-50 flex items-center justify-center">
                        <span className="text-lg font-black text-[#123B73]">YJ</span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#123B73] to-[#123B73] p-[2px] shadow-sm">
                      <div className="w-full h-full rounded-[14px] bg-slate-50 flex items-center justify-center">
                        <span className="text-lg font-black text-slate-700">VG</span>
                      </div>
                    </div>
                  )}
                  {/* Miniature active role overlay index */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white border border-slate-200 rounded-full flex items-center justify-center">
                    <User className="w-2.5 h-2.5 text-brand-accent" />
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-800 text-lg tracking-tight group-hover:text-brand-accent transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-xs text-brand-accent font-mono uppercase tracking-wider mt-0.5">{m.title}</p>
                </div>
              </div>

              {/* Description text */}
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans mt-2 mb-6 font-normal">
                {m.details}
              </p>
            </div>

            {/* Tags footer */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex flex-wrap gap-1.5 font-bold">
                {m.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono tracking-wider bg-slate-50 text-slate-600 px-2.5 py-1 rounded border border-slate-200/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
