import { GoogleGenAI } from "@google/genai";
import { MarketingType } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMarketingContent = async (
  topic: string,
  type: MarketingType
): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure your environment variables.";
  }

  const modelId = "gemini-2.5-flash"; // Fast and effective for text generation
  
  let systemInstruction = "";
  
  switch (type) {
    case MarketingType.BLOG_IDEAS:
      systemInstruction = "You are an expert tech content strategist. Generate 3 engaging, SEO-friendly blog post titles and brief outlines based on the user's input topic. Format with bullet points.";
      break;
    case MarketingType.PROJECT_DESC:
      systemInstruction = "You are a senior product marketer. Write a compelling, punchy project description (max 150 words) that highlights technical innovation and user value based on the input features.";
      break;
    case MarketingType.SOCIAL_POST:
      systemInstruction = "You are a social media manager for a tech influencer. Write a short, viral LinkedIn/Twitter post about the topic. Include relevant hashtags and emojis.";
      break;
  }

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: topic,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "No content generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate content. Please try again later.";
  }
};