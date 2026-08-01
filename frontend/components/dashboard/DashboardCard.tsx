import { LucideIcon } from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: number;
  description: string;
  icon: LucideIcon;
  color?: "red" | "blue" | "green" | "amber";
};

export default function DashboardCard({
  title,
  value,
  description,
  icon: Icon,
  color = "red",
}: DashboardCardProps) {

  const colors = {
    red: {
      bg: "bg-red-50",
      text: "text-red-700",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-700",
    },
    amber: {
      bg: "bg-amber-50",
      text: "text-amber-700",
    },
  };

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-center gap-5">

        <div
          className={`flex h-20 w-20 items-center justify-center rounded-full ${colors[color].bg}`}
        >
          <Icon
            className={`h-10 w-10 ${colors[color].text}`}
            strokeWidth={2}
          />
        </div>

        <div>

          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>

          <p
            className={`mt-1 text-5xl font-bold ${colors[color].text}`}
          >
            {value}
          </p>

          <p className="mt-1 text-gray-500">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}