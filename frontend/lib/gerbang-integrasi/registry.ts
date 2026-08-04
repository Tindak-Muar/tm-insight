import { IntegrationProvider } from "./types";

// AI

import {
  openAIProvider,
  geminiProvider,
  claudeProvider,
  copilotProvider,
  deepSeekProvider,
  grokProvider,
} from "./providers/ai";

// Komunikasi

import {
  whatsappProvider,
  telegramProvider,
  emailProvider,
} from "./providers/komunikasi";

// Penyimpanan

import {
  googleDriveProvider,
  oneDriveProvider,
} from "./providers/storan-awan";

// Analitik

import {
  metaProvider,
  googleAnalyticsProvider,
  tiktokProvider,
} from "./providers/analitik";

// Automasi

import {
  n8nProvider,
  webhookProvider,
} from "./providers/automasi";

export const integrationRegistry: IntegrationProvider[] = [

  // AI

  openAIProvider,
  geminiProvider,
  claudeProvider,
  copilotProvider,
  deepSeekProvider,
  grokProvider,

  // Komunikasi

  whatsappProvider,
  telegramProvider,
  emailProvider,

  // Penyimpanan

  googleDriveProvider,
  oneDriveProvider,

  // Analitik

  metaProvider,
  googleAnalyticsProvider,
  tiktokProvider,

  // Automasi

  n8nProvider,
  webhookProvider,

];