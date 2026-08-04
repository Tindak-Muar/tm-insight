import { Circle } from "lucide-react";

import { HealthStatus } from "@/lib/gerbang-integrasi";

type HealthIndicatorProps = {
  health: HealthStatus;
};

const healthConfig = {
  HEALTHY: {
    label: "Normal",
    color: "text-green-600",
  },

  WARNING: {
    label: "Amaran",
    color: "text-yellow-500",
  },

  CRITICAL: {
    label: "Kritikal",
    color: "text-red-600",
  },

  UNKNOWN: {
    label: "Belum Diuji",
    color: "text-gray-400",
  },
} as const;

export default function HealthIndicator({
  health,
}: HealthIndicatorProps) {
  const config = healthConfig[health];

  return (
    <div
      className={`inline-flex items-center gap-2 text-sm font-medium ${config.color}`}
    >
      <Circle
        className="h-3 w-3 fill-current"
        strokeWidth={0}
      />

      <span>{config.label}</span>
    </div>
  );
}