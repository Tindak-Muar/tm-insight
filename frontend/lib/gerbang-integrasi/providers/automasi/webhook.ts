import { IntegrationProvider } from "../../types";

export const webhookProvider: IntegrationProvider = {
  id: "webhook",

  name: "Webhook",

  description:
    "Integrasi Webhook untuk menghantar dan menerima data secara masa nyata.",

  category: "Automasi",

  status: "DISCONNECTED",

  health: "UNKNOWN",
};