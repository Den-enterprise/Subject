
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AnalysisResult {
  subject: string;
  intent: string;
  context: string;
  searchOptimization: string;
}
