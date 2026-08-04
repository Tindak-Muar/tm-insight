import { Circle } from "lucide-react";

import { ConnectionStatus } from "@/types/provider";

type ConnectionStatusBadgeProps = {
  status: ConnectionStatus;
};

const statusConfig: Record<
  ConnectionStatus,
  {
    label: string;
    color: string;
  }
> = {
  "disambungkan": {
    label: "Disambungkan",
    color: "text-green-600",
  },

  "tidak-disambungkan": {
    label: "Tidak Disambungkan",
    color: "text-gray-400",
  },

  "sedang-menyambung": {
    label: "Menyambung",
    color: "text-yellow-500",
  },

  ralat: {
    label: "Ralat",
    color: "text-red-600",
  },

  nyahaktif: {
    label: "Nyahaktif",
    color: "text-slate-400",
  },
};

export default function ConnectionStatusBadge({
  status,
}: ConnectionStatusBadgeProps) {
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