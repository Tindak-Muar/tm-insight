import type { LucideIcon } from "lucide-react";

import {
  Bot,
  BrainCircuit,
  Sparkles,
  Code2,
  Cpu,
  MessageCircle,
  Send,
  Mail,
  Cloud,
  HardDrive,
  BarChart3,
  ChartColumn,
  Workflow,
  Webhook,
} from "lucide-react";

export const providerIcons: Record<string, LucideIcon> = {

  // AI

  openai: Bot,

  gemini: Sparkles,

  claude: BrainCircuit,

  copilot: Code2,

  deepseek: Cpu,

  grok: Bot,

  // Komunikasi

  whatsapp: MessageCircle,

  telegram: Send,

  email: Mail,

  // Penyimpanan

  "google-drive": Cloud,

  onedrive: HardDrive,

  // Analitik

  meta: BarChart3,

  "google-analytics": ChartColumn,

  tiktok: BarChart3,

  // Automasi

  n8n: Workflow,

  webhook: Webhook,

};