import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function PageHeader({
  title,
  description,
  icon: Icon,
}: PageHeaderProps) {
  return (
    <div className="mb-8 border-b border-gray-200 pb-6">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-blue-100 p-3">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {title}
          </h1>

          <p className="mt-1 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}