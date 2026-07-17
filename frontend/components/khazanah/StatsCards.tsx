type Props = {
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
}: Props) {
  return (
    <div className="grid grid-cols-4 gap-4">

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">
          Jumlah Aset
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {total}
        </h2>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">
          Aktif
        </p>

        <h2 className="mt-2 text-3xl font-bold text-green-600">
          {aktif}
        </h2>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">
          Arkib
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-600">
          {arkib}
        </h2>
      </div>

      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">
          Kategori
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {kategori}
        </h2>
      </div>

    </div>
  );
}