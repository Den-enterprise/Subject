
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function analyzeQuery(query: string): Promise<AnalysisResult> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze the following search query for the "Subject" browser engine. Identify the primary subject, user intent, underlying context, and how to optimize this for Google.
      
      Query: "${query}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            subject: { type: Type.STRING, description: "The core subject of the query." },
            intent: { type: Type.STRING, description: "What the user is trying to accomplish." },
            context: { type: Type.STRING, description: "The technical or social context of the query." },
            searchOptimization: { type: Type.STRING, description: "Refined keywords for Google search." }
          },
          required: ["subject", "intent", "context", "searchOptimization"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) throw new Error("No response from AI");
    return JSON.parse(resultText) as AnalysisResult;
  } catch (error) {
    console.error("Gemini analysis error:", error);
    throw error;
  }
}
