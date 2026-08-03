import { IntegrationProvider } from "../../types";

export const whatsappProvider: IntegrationProvider = {
  id: "whatsapp",

  name: "WhatsApp",

  description:
    "Gerbang komunikasi WhatsApp untuk penghantaran mesej, notifikasi dan kempen.",

  category: "Komunikasi",

  status: "DISCONNECTED",

  health: "UNKNOWN",
};