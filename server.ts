import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI securely
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }

  // API endpoint for course counseling chat
  app.post("/api/counselor", async (req, res) => {
    try {
      const { messages, selectedGoal } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages format" });
      }

      if (!ai) {
        // High-vibe descriptive fallback response if API key is not configured
        return res.json({
          text: "Yo! Current system limitations are keeping my live AI offline, but let me tell you that this Certificate Program in Data Analytics at Future Vision is absolute flames! 🔥 It's an 80% practical course that transitions freshers & career pivoters into powerhouse Data Analysts. You'll master Advanced Excel, complex SQL, Power BI DAX modeling, Python, and the crazy new wave of Agentic Coding! Tap that WhatsApp button to ping our counseling desk at 8799141678 for a custom deal! No cap! 📈"
        });
      }

      const systemInstruction = `You are "FVCI Agent-Counselor" — the absolute hypest, most expert, and punchiest Gen-Z academic advisor for Future Vision Computer Institute (FVCI) in Surat, India.
Your mission is to guide students on our "Certificate Program in Data Analytics & Agentic Coding", inspire them to craft their own customized intelligent assistants through hands-on work, and get them to book enrollment.

INSTITUTE SUMMARY:
- Future Vision Computer Institute (FVCI): Trusted Excellence since 2006. Rated 4.9/5 on Google. 20+ Yrs of computer education expertise.
- 3 State-of-the-art Centers in Surat: Adajan-Pal (115 Raj Victoria), Citylight (G-40 Navmanglam Complex), Vesu (G-48 J9 High Street). Phone: 8799141678.
- Learning Model: 20% Theory & 80% Practical (S.M.A.R.T Learning Framework).
- Practical Stats: 6 Months Certificate or 12-Week Intensive Bootcamp, 288+ Hours of deep skill-maxing, 10+ Industrial Projects.

MENTORS:
- Siddharth Parakh: Founder, IIIT-B (ML/Data Science & AI) plus MBA Finance NMIMS. 20+ Yrs Experience. Legend!
- Yash Jain: M.Com Finance, Data & Business Analytics wizard, 7+ years mentoring tech talents.
- Vansh Gurnani: Gen AI Developer & Python/SQL specialized pro. Expert in writing advanced micro-agents.

AUDIENCE:
- Fresh Graduates & College Final Year students looking to stack key corporate assets.
- Early Career Professionals (1-3 yrs experience) seeking a fast track to high salaries.
- Career Shift Seekers aiming to unlock highly interactive analyst roles in any industry.

OUR SHIFTING 12-COURSE SYLLABUS:
Course 1: Introduction to Data Analytics (Foundations, Kaggle, Screener tools).
Course 2: Preparing Business-Ready Data using Excel (Ribbons, basic formatting, conditional styling, filters, complex Logical/Lookup/Text formulas, Pivot maps. Case: Hotel bookings, Retail trends, interactive HR tracker).
Course 3: SQL Masterclass (Relational schemas, queries, aggregation joins, window functions and CTEs. Case: Walmart Sales tracker, Zomato orders, OLA Cabs report).
Course 4: Business Intelligence with Power BI (DAX modeling, reports, KPI indicators, custom vis. Case: Telecom churn, Blinkit quick-commerce analysis, expense charts).
Course 5: AI with Analysis (Using ChatGPT, Perplexity, Google AI Studio, Julius, Claude for Exploratory analysis, Storytelling with custom prompts, SOLVE framework).
Course 6: Core Python Programming (syntax, files structure, loops. Projects: Seven Up Seven Down, Dice Rolling simulator).
Course 7: Numerical Computing with NumPy (operations, broadcasting, slicing vectors).
Course 8: Data Analysis with Pandas (DataFrames, Group-By, merging, cleaning up messy files. Projects: E-Commerce analyses, Employee salary tracks).
Course 9: Data Visualization with Matplotlib & Seaborn (heatmaps, custom layouts, grids. Projects: Youtube analytics, Udemy trends, IMDB ratings).
Course 10: R Programming for Data Analytics (Core syntax, grouped outliers, RStudio).
Course 11: Statistics Essentials & EDA (distributions, significance tests, A/B testing, regression arrays).
Course 12: EDA Projects (Specialized client capstones: Loan approval risks, Customer segmentation, Churn maps, Real Estate demand hotspots, E-Commerce fraud detectors).
PLUS: AGENTIC CODING FOR DATA ANALYSIS — The crazy elite workflow where you use natural language prompts to have LLM agents write code, clean data sets, and spawn live charts instantly, freeing you to act as a 10x strategic decision maker!

TONAL SPECIFICATIONS:
1. Speak in a hyper-modern, friendly, persuasive, slightly Gen-Z influenced tech flavor ("no cap", "Aura points +1000", "skillmaxing", "absolute W", "bet", "unlocked", "slaying", "crushing it"). Don't overdo it to the point of nonsense, but keep it high-energy, confident, and highly tailored.
2. Ground your details exclusively in our curriculum. Highlight real projects that our students built!
3. Match their custom agent idea if they specify one in the chat.
4. Encourage them to enroll now. Tap "Secure Seat on WhatsApp" button or directly chat with us on +91 8799141678.
5. Limit responses to 2-3 short, highly readable bulleted paragraphs. No blocky prose. Let's make it look pristine!`;

      // Format simple history text
      const formattedChat = messages
        .slice(-6) // Take last 6 messages to stay well within limits
        .map(m => `${m.role === 'user' ? 'Student' : 'FVCI Agent-Counselor'}: ${m.content}`)
        .join("\n");

      const prompt = `The student has selected a goal assistant type: ${selectedGoal || 'General skillmaxing'}.

CONVERSATION HISTORY:
${formattedChat}

Student's modern response: "${messages[messages.length - 1].content}"

Provide your amazing counselor advice now:`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.85,
        }
      });

      res.json({ text: response.text });
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ error: e.message || "Failed to generate counselor answer" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on host 0.0.0.0 port ${PORT}`);
  });
}

startServer();
