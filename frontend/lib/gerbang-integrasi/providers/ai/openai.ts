import { IntegrationProvider } from "../../types";

export const openAIProvider: IntegrationProvider = {
  id: "openai",

  name: "OpenAI",

  description:
    "Model bahasa besar (LLM) oleh OpenAI untuk analisis, penjanaan kandungan dan automasi AI.",

  category: "AI",

  status: "DISCONNECTED",

  health: "UNKNOWN",
};