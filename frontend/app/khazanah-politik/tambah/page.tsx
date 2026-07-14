"use client";

import { useRouter } from "next/navigation";

export default function TambahAsetPage() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          📚 Tambah Aset Pengetahuan
        </h1>

        <p className="mt-2 text-gray-500">
          Daftarkan aset baharu ke dalam Khazanah Politik.
        </p>
      </div>

      {/* Borang */}
      <div className="space-y-6 rounded-xl border bg-white p-8 shadow-sm">
        {/* Tajuk */}
        <div>
          <label className="mb-2 block font-medium">
            Tajuk
          </label>

          <input
            type="text"
            placeholder="Masukkan tajuk aset..."
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Kategori + Tarikh */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="mb-2 block font-medium">
              Kategori
            </label>

            <select className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Dasar</option>
              <option>Ekonomi</option>
              <option>Pilihan Raya</option>
              <option>Manifesto</option>
              <option>Penyelidikan</option>
              <option>Media</option>
              <option>Ucapan</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Tarikh
            </label>

            <input
              type="date"
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Ringkasan */}
        <div>
          <label className="mb-2 block font-medium">
            Ringkasan
          </label>

          <textarea
            rows={6}
            placeholder="Masukkan ringkasan aset pengetahuan..."
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sumber */}
        <div>
          <label className="mb-2 block font-medium">
            Sumber
          </label>

          <input
            type="text"
            placeholder="https://..."
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tag */}
        <div>
          <label className="mb-2 block font-medium">
            Tag
          </label>

          <input
            type="text"
            placeholder="Contoh: Ekonomi, Johor, RMK13"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 block font-medium">
            Status
          </label>

          <select className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Aktif</option>
            <option>Draf</option>
            <option>Arkib</option>
          </select>
        </div>

        {/* Butang */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={() => router.push("/khazanah-politik")}
            className="rounded-lg border px-6 py-3 hover:bg-gray-100"
          >
            Batal
          </button>

          <button
            onClick={() =>
              router.push("/khazanah-politik?success=1")
            }
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Simpan Aset
          </button>
        </div>
      </div>
    </div>
  );
}