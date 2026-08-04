/**
 * ============================================================
 * SINARLabs
 * Sprint 3
 * Configuration Registry
 * ============================================================
 */

import { ProviderConfiguration } from "@/types/configuration";

export const configurationRegistry: ProviderConfiguration[] = [
  {
    providerId: "openai",

    title: "Konfigurasi OpenAI",

    description:
      "Tetapan sambungan untuk penyedia OpenAI.",

    fields: [
      {
        id: "apiKey",
        label: "Kunci API",
        type: "password",
        required: true,
        placeholder: "Masukkan Kunci API OpenAI",
      },

      {
        id: "model",
        label: "Model",
        type: "select",
        required: true,
        defaultValue: "gpt-5.5",

        options: [
          {
            label: "GPT-5.5",
            value: "gpt-5.5",
          },
          {
            label: "GPT-5.5 Mini",
            value: "gpt-5.5-mini",
          },
        ],
      },

      {
        id: "baseUrl",
        label: "URL Asas",
        type: "url",
        required: false,
        defaultValue: "https://api.openai.com",
      },

      {
        id: "organization",
        label: "Organisasi",
        type: "text",
        required: false,
      },
    ],
  },
];