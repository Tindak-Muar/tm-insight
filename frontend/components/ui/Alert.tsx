import {
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

type AlertVariant =
  | "success"
  | "error"
  | "warning"
  | "info";

type AlertProps = {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
};

export default function Alert({
  variant = "info",
  title,
  children,
}: AlertProps) {
  const variants = {
    success: {
      icon: CheckCircle2,
      container:
        "border-green-200 bg-green-50 text-green-800",
      iconColor: "text-green-600",
      defaultTitle: "Berjaya",
    },

    error: {
      icon: AlertCircle,
      container:
        "border-red-200 bg-red-50 text-red-800",
      iconColor: "text-red-600",
      defaultTitle: "Ralat",
    },

    warning: {
      icon: AlertTriangle,
      container:
        "border-yellow-200 bg-yellow-50 text-yellow-800",
      iconColor: "text-yellow-600",
      defaultTitle: "Amaran",
    },

    info: {
      icon: Info,
      container:
        "border-red-200 bg-red-50 text-red-800",
      iconColor: "text-red-600",
      defaultTitle: "Makluman",
    },
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div
      className={`flex gap-3 rounded-xl border p-4 ${config.container}`}
    >
      <Icon
        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${config.iconColor}`}
      />

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold">
          {title ?? config.defaultTitle}
        </h3>

        <div className="mt-1 text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}