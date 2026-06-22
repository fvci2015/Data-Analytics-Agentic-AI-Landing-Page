import React, { useState } from "react";
import { MessageSquare, Check, User, Code, FileText, Send, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

type ExposureLevel = "Beginner" | "Intermediate" | "Advanced";

interface MotiveOption {
  id: string;
  title: string;
  emoji: string;
  previewText: string;
}

const MOTIVE_OPTIONS: MotiveOption[] = [
  {
    id: "enroll",
    title: "Seamless Enrollment",
    emoji: "⚡",
    previewText: "I want to enroll in the Data Analytics + Agentic AI course!"
  },
  {
    id: "syllabus",
    title: "Syllabus Doubt",
    emoji: "🙋‍♀️",
    previewText: "I have some questions about the capstone project or specific curriculum modules."
  },
  {
    id: "demo",
    title: "Request Free Trial/Demo",
    emoji: "🎫",
    previewText: "I would like to schedule a verbal project demo or walk-in counseling class."
  }
];

export default function WhatsAppCustomizer() {
  const WHATSAPP_NUMBER = "9825771641";
  const [userName, setUserName] = useState("");
  const [exposure, setExposure] = useState<ExposureLevel>("Beginner");
  const [selectedMotiveId, setSelectedMotiveId] = useState<string>("enroll");
  const [additionalNote, setAdditionalNote] = useState("");

  const chosenMotive = MOTIVE_OPTIONS.find(o => o.id === selectedMotiveId) || MOTIVE_OPTIONS[0];

  // Dynamically constructed message matching professional style
  const getMessageString = () => {
    const greeting = "HELLO FVCI! 👋";
    const courseInterest = "I am interested in your premier Data Analytics & Agentic AI certification program.";
    const namePart = `My Name is: ${userName.trim() ? userName.trim() : "Anonymous Student"}`;
    const exposurePart = `Current Programming level: ${exposure}`;
    const motivePart = `Primary Objective: ${chosenMotive.previewText}`;
    const notePart = additionalNote.trim() ? `Additional Notes: "${additionalNote.trim()}"` : "";

    const parts = [greeting, courseInterest, namePart, exposurePart, motivePart];
    if (notePart) {
      parts.push(notePart);
    }
    
    return parts.join("\n\n");
  };

  const currentMessage = getMessageString();

  const handleSendUrl = () => {
    const textencoded = encodeURIComponent(currentMessage);
    const url = `https://wa.me/91${WHATSAPP_NUMBER}?text=${textencoded}`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section id="whatsapp-enrollment-portal" className="py-20 bg-slate-50/20 border-t border-slate-200/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Grid matching user's reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Block: Narrative */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            {/* Limited Seats Tag */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-amber-700 bg-amber-50 border border-amber-200 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500 animate-pulse" />
                LIMITED TO 30 SEATS
              </span>
            </div>

            {/* Giant Display Title */}
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] uppercase">
              LAUNCH YOUR <br />
              <span className="text-[#123B73]">AI CAREER</span> VIA <br />
              <span className="text-indigo-600">WHATSAPP</span>
            </h2>

            {/* Subtitle description */}
            <p className="text-slate-500 text-sm md:text-base mt-6 font-medium leading-relaxed">
              Skip the long forms, password resets, and automated emails. Ping us directly to secure your seat, verify eligibility, or ask any question. You will talk to a real human mentor at Future Vision.
            </p>

            {/* Checklists exactly matching screenshot bullets */}
            <div className="space-y-4 mt-8">
              {[
                "Instant response time < 2 hours",
                "Flexible payment structures available",
                "Secure Your Cohort Seat Today"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-blue-50 border border-blue-100 p-1 rounded-full text-[#123B73]">
                    <CheckCircle2 className="w-4 h-4 text-[#123B73] fill-blue-50" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer Address Signature */}
            <div className="mt-12 bg-white border border-slate-200/80 p-5 rounded-2xl flex items-start gap-3.5 max-w-sm">
              <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-xl text-blue-600">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-slate-900 leading-none mb-1">
                  Future Vision Computer Institute
                </h4>
                <p className="text-[11px] text-slate-500 font-mono leading-normal">
                  Surat, Gujarat — Vesu | Citylight | Pal — Trusted since 2006.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Customizer Dashboard Container */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden text-left flex flex-col justify-between">
            <div>
              <h3 className="text-xs md:text-sm font-black text-[#123B73] tracking-[0.15em] uppercase italic mb-8 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-600" />
                CUSTOMIZE CHAT PROMPT
              </h3>

              {/* Input-1: Student Name */}
              <div className="mb-6">
                <label className="text-[10px] font-extrabold tracking-widest text-slate-400 block mb-2 uppercase font-mono">
                  YOUR NAME
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm font-semibold placeholder-slate-400/90 focus:outline-none focus:ring-2 focus:ring-[#123B73]/20 focus:border-[#123B73] transition-all"
                  />
                </div>
              </div>

              {/* Input-2: Current Programming Exposure Tab Bar */}
              <div className="mb-6">
                <label className="text-[10px] font-extrabold tracking-widest text-slate-400 block mb-2 uppercase font-mono">
                  CURRENT PYTHON EXPOSURE
                </label>
                <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                  {(["Beginner", "Intermediate", "Advanced"] as ExposureLevel[]).map((level) => {
                    const isActive = exposure === level;
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setExposure(level)}
                        className={`py-2 rounded-lg text-xs font-bold tracking-tight transition-all uppercase ${
                          isActive
                            ? "bg-[#123B73] text-white shadow-sm"
                            : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
                        }`}
                      >
                        {level}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input-3: Enrollment Triggers List */}
              <div className="mb-6">
                <label className="text-[10px] font-extrabold tracking-widest text-slate-400 block mb-2.5 uppercase font-mono">
                  ENROLLMENT MOTIVE
                </label>
                <div className="space-y-2.5">
                  {MOTIVE_OPTIONS.map((opt) => {
                    const isSelected = selectedMotiveId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedMotiveId(opt.id)}
                        className={`w-full text-left bg-white border rounded-xl p-3 flex items-center justify-between gap-4 transition-all duration-200 ${
                          isSelected
                            ? "border-[#123B73] ring-1 ring-[#123B73]/20 shadow-sm"
                            : "border-slate-200 hover:border-slate-350"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-sm font-semibold text-slate-800">
                            {opt.title} {opt.emoji}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 italic font-medium truncate max-w-[240px] md:max-w-md hidden sm:inline">
                          {opt.previewText}
                        </span>
                        {/* Selected Radio/Check asset */}
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                          isSelected ? "border-[#123B73] bg-[#123B73]" : "border-slate-300"
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input-4: Additional notes / doubts */}
              <div className="mb-8">
                <label className="text-[10px] font-extrabold tracking-widest text-slate-400 block mb-2 uppercase font-mono">
                  ADDITIONAL NOTE / DOUBTS (OPTIONAL)
                </label>
                <textarea
                  rows={2}
                  placeholder="Need scholarship check, custom timing request, etc..."
                  value={additionalNote}
                  onChange={(e) => setAdditionalNote(e.target.value)}
                  className="w-full p-4 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm font-semibold placeholder-slate-400/95 focus:outline-none focus:ring-2 focus:ring-[#123B73]/20 focus:border-[#123B73] transition-all resize-none leading-relaxed"
                />
              </div>

              {/* Dynamic Prompt Preview Block exactly matching the reference card */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 mb-8 text-left relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 text-slate-400 font-mono text-[9px] font-extrabold tracking-wider uppercase">
                  <span>PROMPT PREVIEW:</span>
                  <span className="text-[#123B73]">dynamic message format</span>
                </div>
                <div className="text-xs font-mono text-slate-600 bg-slate-50 p-4.5 rounded-lg border border-slate-100 whitespace-pre-wrap leading-relaxed max-h-44 overflow-y-auto">
                  {currentMessage}
                </div>
              </div>
            </div>

            {/* Launch CTA Trigger */}
            <div>
              <button
                type="button"
                onClick={handleSendUrl}
                className="w-full bg-[#123B73] hover:bg-[#1b4b8f] border border-transparent text-white font-extrabold py-4 px-6 rounded-xl text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-3.5 group"
              >
                <span>SECURE PLATFORM SEAT ON WHATSAPP</span>
                <Send className="w-4 h-4 text-white transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
