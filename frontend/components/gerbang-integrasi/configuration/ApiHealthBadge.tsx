import { Circle } from "lucide-react";

import { ApiHealthStatus } from "@/types/provider";

type ApiHealthBadgeProps = {
  health: ApiHealthStatus;
};

const healthConfig: Record<
  ApiHealthStatus,
  {
    label: string;
    color: string;
  }
> = {
  normal: {
    label: "Normal",
    color: "text-green-600",
  },

  amaran: {
    label: "Amaran",
    color: "text-yellow-500",
  },

  kritikal: {
    label: "Kritikal",
    color: "text-red-600",
  },

  "belum-diuji": {
    label: "Belum Diuji",
    color: "text-gray-400",
  },
};

export default function ApiHealthBadge({
  health,
}: ApiHealthBadgeProps) {
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