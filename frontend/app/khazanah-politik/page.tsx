import { prisma } from "@/lib/prisma";

import StatsCards from "@/components/khazanah/StatsCards";
import SuccessAlert from "@/components/khazanah/SuccessAlert";
import Toolbar from "@/components/khazanah/Toolbar";
import AssetsTable from "@/components/khazanah/AssetsTable";
import SearchBar from "@/components/khazanah/SearchBar";
import Pagination from "@/components/khazanah/Pagination";
import { buildKhazanahQuery } from "@/lib/khazanah/query";

type PageProps = {
  searchParams: Promise<{
    success?: string;
    q?: string;
    category?: string;
    status?: string;
    state?: string;
    year?: string;
    sort?: string;
    page?: string;
  }>;
};

export default async function KhazanahPolitikPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  const keyword = params.q ?? "";
  const category = params.category ?? "";
  const status = params.status ?? "";
  const state = params.state ?? "";
  const year = params.year ?? "";
  const sort = params.sort ?? "latest";

  const currentPage = Number(
    params.page ?? "1"
  );

  const pageSize = 20;

  const skip =
    (currentPage - 1) * pageSize;

   /* ==========================================================
   QUERY 1
   Ambil SEMUA aset untuk dropdown & statistik
========================================================== */
const { where, orderBy } = buildKhazanahQuery({
  keyword,
  category,
  status,
  state,
  year,
  sort,
});

const allAssets =
  await prisma.knowledgeAsset.findMany();
/* ==========================================================
   QUERY 2
========================================================== */

const assets =
  await prisma.knowledgeAsset.findMany({
    where,
    orderBy,
    skip,
    take: pageSize,
  });

const totalAssets =
  await prisma.knowledgeAsset.count({
    where,
  });

const totalPages = Math.ceil(
  totalAssets / pageSize
);

/* ==========================================================
   Statistik
========================================================== */

const jumlahAset = allAssets.length;

const jumlahAktif = allAssets.filter(
  (asset) => asset.status === "Aktif"
).length;

const jumlahArkib = allAssets.filter(
  (asset) => asset.status === "Arkib"
).length;

const jumlahKategori = new Set(
  allAssets.map(
    (asset) => asset.category
  )
).size;

const jumlahInstitusi = new Set(
  allAssets
    .map(
      (asset) => asset.institution
    )
    .filter(
      (
        institution
      ): institution is string =>
        Boolean(institution)
    )
).size;

const jumlahAktifRepo =
  jumlahAktif;

const jumlahDraf = allAssets.filter(
  (asset) => asset.status === "Draf"
).length;

const jumlahSemakan =
  allAssets.filter(
    (asset) =>
      asset.status ===
      "Dalam Semakan"
  ).length;

const jumlahArkibRepo =
  jumlahArkib;

const asetTerakhir =
  allAssets.length > 0
    ? allAssets.reduce((latest, asset) =>
        asset.updatedAt >
        latest.updatedAt
          ? asset
          : latest
      )
    : null;

const tarikhKemaskini =
  asetTerakhir
    ? asetTerakhir.updatedAt.toLocaleDateString(
        "ms-MY",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      )
    : "-";

/* ==========================================================
   Dropdown
========================================================== */

const categories = [
  ...new Set(
    allAssets.map(
      (asset) => asset.category
    )
  ),
].sort();

const states = [
  ...new Set(
    allAssets
      .map((asset) => asset.state)
      .filter(
        (
          state
        ): state is string =>
          Boolean(state)
      )
  ),
].sort();

const years = [
  ...new Set(
    allAssets
      .map((asset) => asset.year)
      .filter(
        (
          year
        ): year is number =>
          year !== null
      )
  ),
].sort((a, b) => b - a); 

return (
  <div className="space-y-8">

    {/* Header */}
    <div>

      <h1 className="text-4xl font-bold">
        📚 Khazanah Politik
      </h1>

      <p className="mt-2 text-gray-500">
        Repositori aset pengetahuan untuk dasar,
        manifesto, penyelidikan, ucapan, media
        dan dokumen strategik.
      </p>

      {/* Quick Insights */}
      <div className="mt-6 rounded-xl border bg-gradient-to-r from-slate-50 to-blue-50 p-5">

        <h2 className="mb-4 text-lg font-semibold">
          📊 Quick Insights
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

          <Insight
            icon="📄"
            label="Jumlah Aset"
            value={jumlahAset}
          />

          <Insight
            icon="🟢"
            label="Aktif"
            value={jumlahAktifRepo}
          />

          <Insight
            icon="🟡"
            label="Draf"
            value={jumlahDraf}
          />

          <Insight
            icon="🔵"
            label="Dalam Semakan"
            value={jumlahSemakan}
          />

          <Insight
            icon="⚫"
            label="Arkib"
            value={jumlahArkibRepo}
          />

          <Insight
            icon="🗂️"
            label="Kategori"
            value={jumlahKategori}
          />

          <Insight
            icon="🏛️"
            label="Institusi"
            value={jumlahInstitusi}
          />

          <Insight
            icon="📅"
            label="Aset Terakhir Dikemas Kini"
            value={tarikhKemaskini}
          />

        </div>

      </div>

    </div>

    {/* Success Alert */}
    <SuccessAlert
      show={params.success === "1"}
    />

    {/* Statistik */}
    <StatsCards
      total={jumlahAset}
      aktif={jumlahAktif}
      arkib={jumlahArkib}
      kategori={jumlahKategori}
    />

    {/* Search */}
    <SearchBar />

    {/* Toolbar */}
    <Toolbar
      categories={categories}
      states={states}
      years={years}
    />

    {/* Jadual */}
    <AssetsTable
      assets={assets}
    />

    {/* Footer Jadual */}
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <p className="text-sm text-gray-500">

        Menunjukkan{" "}

        <strong>
          {assets.length === 0
            ? 0
            : skip + 1}
        </strong>

        {" "}hingga{" "}

        <strong>
          {Math.min(
            skip + assets.length,
            totalAssets
          )}
        </strong>

        {" "}daripada{" "}

        <strong>
          {totalAssets}
        </strong>

        {" "}aset

      </p>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />

    </div>

  </div>
);

}

type InsightProps = {
  icon: string;
  label: string;
  value: string | number;
};

function Insight({
  icon,
  label,
  value,
}: InsightProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">

      <div className="flex items-center justify-between">

        <span className="text-3xl">
          {icon}
        </span>

        <span className="text-2xl font-bold text-slate-800">
          {value}
        </span>

      </div>

      <p className="mt-3 text-sm font-medium text-slate-500">
        {label}
      </p>

    </div>
  );
}