export interface Course {
  id: number;
  title: string;
  subtitle?: string;
  study: string[];
  projects?: string[];
  tools?: string[];
  questions?: string[];
}

export interface StudentSuccess {
  name: string;
  role: string;
  company: string;
  image?: string;
  color: string;
}

export interface ExpertMentor {
  name: string;
  title: string;
  details: string;
  image: string;
  tags: string[];
}

export interface AssistantSpecialization {
  id: string;
  title: string;
  emoji: string;
  vibe: string;
  description: string;
  defaultPrompt: string;
  simulatedPythonCode: string;
  simulatedOutput: {
    labels: string[];
    values: number[];
    unit: string;
    insights: string[];
  };
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
