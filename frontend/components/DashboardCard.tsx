type DashboardCardProps = {
  title: string;
  value: number;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <p className="text-3xl font-bold text-blue-700 mt-2">
        {value}
      </p>
    </div>
  );
}