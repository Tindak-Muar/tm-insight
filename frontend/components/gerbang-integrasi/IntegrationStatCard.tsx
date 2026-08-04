import { LucideIcon } from "lucide-react";

type IntegrationStatCardProps = {
  title: string;
  value: number;
  icon: LucideIcon;
  color?: string;
};

export default function IntegrationStatCard({
  title,
  value,
  icon: Icon,
  color = "text-red-700",
}: IntegrationStatCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-red-200 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-gray-900">
            {value}
          </h3>
        </div>

        <div className="rounded-xl bg-red-50 p-2.5">
          <Icon className={`h-5 w-5 ${color}`} />
        </div>
      </div>
    </div>
  );
}