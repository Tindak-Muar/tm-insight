import { IntegrationStatus } from "@/lib/gerbang-integrasi";

type ConnectionBadgeProps = {
  status: IntegrationStatus;
};

const statusConfig = {
  CONNECTED: {
    label: "Connected",
    className:
      "bg-green-100 text-green-700 border border-green-200",
  },

  DISCONNECTED: {
    label: "Disconnected",
    className:
      "bg-gray-100 text-gray-700 border border-gray-200",
  },

  CONNECTING: {
    label: "Connecting",
    className:
      "bg-yellow-100 text-yellow-700 border border-yellow-200",
  },

  ERROR: {
    label: "Error",
    className:
      "bg-red-100 text-red-700 border border-red-200",
  },

  DISABLED: {
    label: "Disabled",
    className:
      "bg-slate-100 text-slate-600 border border-slate-200",
  },
} as const;

export default function ConnectionBadge({
  status,
}: ConnectionBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}