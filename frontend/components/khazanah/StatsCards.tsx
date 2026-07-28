type StatsCardsProps = {
  total: number;
  aktif: number;
  arkib: number;
  kategori: number;
};

export default function StatsCards({
  total,
  aktif,
  arkib,
  kategori,
}: StatsCardsProps) {
  const cards = [
    {
      label: "Jumlah Aset",
      value: total,
      valueClassName: "text-gray-900",
    },
    {
      label: "Aktif",
      value: aktif,
      valueClassName: "text-green-600",
    },
    {
      label: "Arkib",
      value: arkib,
      valueClassName: "text-gray-600",
    },
    {
      label: "Kategori",
      value: kategori,
      valueClassName: "text-gray-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-xl border bg-white p-5 shadow-sm"
        >
          <p className="text-sm text-gray-500">
            {card.label}
          </p>

          <h2
            className={`mt-2 text-3xl font-bold ${card.valueClassName}`}
          >
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}