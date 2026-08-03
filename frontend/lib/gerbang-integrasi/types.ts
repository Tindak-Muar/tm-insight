export type IntegrationCategory =
  | "AI"
  | "Komunikasi"
  | "Penyimpanan"
  | "Analitik"
  | "Automasi"
  | "Produktiviti"
  | "Keselamatan";

export type IntegrationStatus =
  | "CONNECTED"
  | "DISCONNECTED"
  | "CONNECTING"
  | "ERROR"
  | "DISABLED";

export type HealthStatus =
  | "HEALTHY"
  | "WARNING"
  | "CRITICAL"
  | "UNKNOWN";

export interface IntegrationProvider {
  id: string;

  name: string;

  description: string;

  category: IntegrationCategory;

  status: IntegrationStatus;

  health: HealthStatus;
}