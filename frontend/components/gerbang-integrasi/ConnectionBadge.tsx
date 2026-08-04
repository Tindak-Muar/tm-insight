import { Circle } from "lucide-react";

import { IntegrationStatus } from "@/lib/gerbang-integrasi";

type ConnectionBadgeProps = {
  status: IntegrationStatus;
};

const statusConfig = {
  CONNECTED: {
    label: "Disambungkan",
    color: "text-green-600",
  },

  DISCONNECTED: {
    label: "Tidak Disambungkan",
    color: "text-gray-400",
  },

  CONNECTING: {
    label: "Menyambung",
    color: "text-yellow-500",
  },

  ERROR: {
    label: "Ralat",
    color: "text-red-600",
  },

  DISABLED: {
    label: "Nyahaktif",
    color: "text-slate-400",
  },
} as const;

export default function ConnectionBadge({
  status,
}: ConnectionBadgeProps) {
  const config = statusConfig[status];

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