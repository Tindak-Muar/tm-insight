import Link from "next/link";

interface DashboardCardProps {
  title: string;
  value: number | string;
  description?: string;
  icon?: string;
  href?: string;
}

export default function DashboardCard({
  title,
  value,
  description,
  icon = "📄",
  href,
}: DashboardCardProps) {
  const content = (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {value}
          </h2>

          {description && (
            <p className="mt-2 text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>

        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        {content}
      </Link>
    );
  }

  return content;
}