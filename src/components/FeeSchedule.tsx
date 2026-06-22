import React, { useState } from "react";
import { CheckCircle2, Zap, Tag, CreditCard, ShieldCheck, ArrowRight } from "lucide-react";

export default function FeeSchedule() {
  const WHATSAPP_NUMBER = "9825771641";

  const getWhatsAppURL = (priceText: string) => {
    const text = `Hey Future Vision! I am looking at the Data Analytics + Agentic AI course and would like to register with the Early Offer fee of ${priceText}. Can you please share the next steps?`;
    return `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const inclusions = [
    "22 Weeks Step-by-Step Practical Curriculum",
    "Tailored Agentic AI & Autopilot Dev Workflows",
    "FVCI Industry-Recognized Physical Certification",
    "Lifetime Access to Course Sandbox & Discord Lab",
    "1-on-1 Personalized Project Review Support"
  ];

  return (
    <section id="program-fee-schedule" className="py-20 bg-slate-50/30 border-t border-slate-200/50 scroll-mt-24 relative">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title & Subtitle styled exactly as the image */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
            <span className="text-[#123B73]">PROGRAM</span>{" "}
            <span className="font-medium text-slate-800 italic ml-1">FEE SCHEDULE</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
            Zero compromises. Professional educational standards with adaptable payment paths designed to launch practical computer science career paths.
          </p>
        </div>

        {/* Two-Column Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Main Fee Card: 52,000 Promo */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 md:p-10 flex flex-col justify-between hover:shadow-[0_20px_45px_-12px_rgba(18,59,115,0.06)] hover:border-slate-300 transition-all duration-300">
            <div>
              {/* Header with Sub-title and Savings tag side-by-side */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-slate-400 block mb-1.5 uppercase">
                    UPCOMING COHORT INTAKE
                  </span>
                  <h3 className="text-xs md:text-sm font-black text-[#123B73] tracking-wide uppercase">
                    GUJARAT'S PREMIER AI CURRICULUM
                  </h3>
                </div>
                
                {/* Save Badging */}
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-xl uppercase">
                  <Tag className="w-3.5 h-3.5 text-emerald-600" />
                  SAVE ₹8,000
                </span>
              </div>

              {/* Price Tag Block */}
              <div className="my-8 flex items-baseline gap-4 flex-wrap">
                <span className="text-4xl md:text-6xl font-black text-[#123B73] tracking-tight">
                  ₹52,000
                </span>
                <span className="text-lg md:text-xl text-slate-400 line-through font-bold">
                  ₹60,000
                </span>
              </div>

              {/* Offer Status line */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 mb-8 bg-emerald-50/50 py-2 px-3 rounded-lg border border-emerald-100 w-fit">
                <Zap className="w-3.5 h-3.5 fill-emerald-600" />
                <span>Launch Offer Discount Active for Early Seats</span>
              </div>

              {/* Dividers & Inclusions header */}
              <div className="border-t border-slate-100 pt-6">
                <span className="text-[10px] font-extrabold tracking-widest text-slate-400 block mb-4 uppercase">
                  EVERYTHING COMPREHENSIVELY INCLUDED:
                </span>
                
                {/* Core Syllabus Checklist */}
                <div className="space-y-3.5">
                  {inclusions.map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 text-blue-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-[13px] md:text-sm font-semibold text-slate-700 leading-normal">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-10">
              <a
                href={getWhatsAppURL("₹52,000 Early Bird Offer")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#123B73] hover:bg-[#1b4b8f] border border-transparent text-white font-extrabold px-6 py-4 rounded-xl text-sm uppercase tracking-wide shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group"
              >
                <span>APPLY & RESERVE SEAT</span>
                <span className="bg-white/10 px-2.5 py-1 rounded text-xs tracking-wider">
                  ₹52,000
                </span>
              </a>
            </div>
          </div>

          {/* Right EMI Card: Easy Installment */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 md:p-10 flex flex-col justify-between hover:shadow-[0_20px_45px_-12px_rgba(18,59,115,0.06)] hover:border-slate-300 transition-all duration-300">
            <div>
              {/* Card Icon */}
              <div className="bg-blue-50/80 border border-blue-100 p-3 rounded-2xl mb-8 text-[#123B73] w-fit">
                <CreditCard className="w-6 h-6" />
              </div>

              {/* Heading */}
              <h3 className="text-sm md:text-base font-black text-slate-900 tracking-tight uppercase mb-4 flex items-center gap-2">
                EASY INSTALLMENT & UPI MANDATE
              </h3>

              {/* Text Description */}
              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                We believe in making education accessible. We can set up a UPI mandate for easy EMI. Opt for structured installments during the onboarding verification call.
              </p>
            </div>

            {/* Aesthetic trust signature */}
            <div className="border-t border-slate-100 pt-6 mt-8 flex items-center gap-2.5 text-slate-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>Verified Secure Admissions Pipeline</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
