import { HealthStatus } from "@/lib/gerbang-integrasi";

type HealthIndicatorProps = {
  health: HealthStatus;
};

const healthConfig = {
  HEALTHY: {
    label: "Healthy",
    dot: "bg-green-500",
    text: "text-green-700",
  },

  WARNING: {
    label: "Warning",
    dot: "bg-yellow-500",
    text: "text-yellow-700",
  },

  CRITICAL: {
    label: "Critical",
    dot: "bg-red-500",
    text: "text-red-700",
  },

  UNKNOWN: {
    label: "Unknown",
    dot: "bg-gray-400",
    text: "text-gray-600",
  },
} as const;

export default function HealthIndicator({
  health,
}: HealthIndicatorProps) {
  const config = healthConfig[health];

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-2.5 w-2.5 rounded-full ${config.dot}`}
      />

      <span
        className={`text-sm font-medium ${config.text}`}
      >
        {config.label}
      </span>
    </div>
  );
}