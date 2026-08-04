/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Provider Registry
 * ============================================================
 */

import { Provider } from "@/types/provider";

export const providerRegistry: Provider[] = [

  {
    id: "openai",
    nama: "OpenAI",
    kategori: "ai",
    description: "Model bahasa dan AI OpenAI.",
    configurable: true,
    enabled: false,
    connectionStatus: "tidak-disambungkan",
    apiHealth: "belum-diuji",
  },

  {
    id: "gemini",
    nama: "Gemini",
    kategori: "ai",
    description: "Model AI Google Gemini.",
    configurable: true,
    enabled: false,
    connectionStatus: "tidak-disambungkan",
    apiHealth: "belum-diuji",
  },

  {
    id: "claude",
    nama: "Claude",
    kategori: "ai",
    description: "Model AI Anthropic Claude.",
    configurable: true,
    enabled: false,
    connectionStatus: "tidak-disambungkan",
    apiHealth: "belum-diuji",
  },

  {
    id: "copilot",
    nama: "Microsoft Copilot",
    kategori: "ai",
    description: "Model AI Microsoft Copilot.",
    configurable: true,
    enabled: false,
    connectionStatus: "tidak-disambungkan",
    apiHealth: "belum-diuji",
  },

  {
    id: "deepseek",
    nama: "DeepSeek",
    kategori: "ai",
    description: "Model AI DeepSeek.",
    configurable: true,
    enabled: false,
    connectionStatus: "tidak-disambungkan",
    apiHealth: "belum-diuji",
  },

  {
    id: "grok",
    nama: "Grok",
    kategori: "ai",
    description: "Model AI Grok.",
    configurable: true,
    enabled: false,
    connectionStatus: "tidak-disambungkan",
    apiHealth: "belum-diuji",
  },

];