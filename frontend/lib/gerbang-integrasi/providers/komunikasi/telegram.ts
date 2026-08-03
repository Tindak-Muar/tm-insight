import { IntegrationProvider } from "../../types";

export const telegramProvider: IntegrationProvider = {
  id: "telegram",

  name: "Telegram",

  description:
    "Bot Telegram untuk notifikasi dan komunikasi masa nyata.",

  category: "Komunikasi",

  status: "DISCONNECTED",

  health: "UNKNOWN",
};