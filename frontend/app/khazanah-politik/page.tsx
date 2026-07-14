import Link from "next/link";

type PageProps = {
  searchParams?: {
    success?: string;
  };
};

export default function KhazanahPolitikPage({
  searchParams,
}: PageProps) {
  const assets = [
    {
      title: "Rancangan Malaysia Ke-13 (RMK13)",
      category: "Dasar",
      status: "Aktif",
      date: "14 Julai 2026",
    },
    {
      title: "Johor-Singapore Special Economic Zone (JS-SEZ)",
      category: "Ekonomi",
      status: "Aktif",
      date: "12 Julai 2026",
    },
    {
      title: "Forest City",
      category: "Pelaburan",
      status: "Arkib",
      date: "10 Julai 2026",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          📚 Khazanah Politik
        </h1>

        <p className="mt-2 text-gray-500">
          Repositori aset pengetahuan untuk dasar, manifesto,
          penyelidikan, ucapan, media dan dokumen strategik.
        </p>
      </div>

      {/* Success Message */}
      {searchParams?.success === "1" && (
        <div className="rounded-xl border border-green-300 bg-green-50 p-4 text-green-700">
          ✅ Aset pengetahuan berjaya disimpan.
        </div>
      )}

      {/* Statistik */}
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Jumlah Aset</p>
          <h2 className="mt-2 text-3xl font-bold">3</h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Aktif</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">2</h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Arkib</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-600">1</h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Kategori</p>
          <h2 className="mt-2 text-3xl font-bold">3</h2>
        </div>
      </div>

      {/* Toolbar */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <select className="rounded-lg border px-4 py-2">
            <option>Semua Kategori</option>
            <option>Dasar</option>
            <option>Ekonomi</option>
            <option>Pelaburan</option>
            <option>Manifesto</option>
            <option>Penyelidikan</option>
          </select>

          <input
            type="text"
            placeholder="🔍 Cari aset pengetahuan..."
            className="flex-1 rounded-lg border px-4 py-2"
          />

          <Link
            href="/khazanah-politik/tambah"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            + Tambah Aset
          </Link>
        </div>
      </div>

      {/* Jadual */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="border-b">
              <th className="px-6 py-4 text-left">Aset Pengetahuan</th>
              <th className="px-6 py-4 text-left">Kategori</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Tarikh</th>
            </tr>
          </thead>

          <tbody>
            {assets.map((asset) => (
              <tr
                key={asset.title}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium">
                  {asset.title}
                </td>

                <td className="px-6 py-4">
                  {asset.category}
                </td>

                <td className="px-6 py-4">
                  {asset.status === "Aktif" ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                      Aktif
                    </span>
                  ) : (
                    <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                      Arkib
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {asset.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}