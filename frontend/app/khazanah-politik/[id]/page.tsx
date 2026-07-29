import { notFound } from "next/navigation";
import Link from "next/link";

import { getKnowledgeAsset } from "@/lib/khazanah/service";
import DeleteButton from "@/components/khazanah/DeleteButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AssetDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const asset = await getKnowledgeAsset(
    Number(id)
  );

  if (!asset) {
    notFound();
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            {asset.title}
          </h1>

          <p className="mt-2 text-gray-500">
            Khazanah Politik
          </p>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            asset.status === "PUBLISHED"
              ? "bg-green-100 text-green-700"
              : asset.status === "DRAFT"
              ? "bg-yellow-100 text-yellow-700"
              : asset.status === "ARCHIVED"
              ? "bg-sky-100 text-sky-700"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {asset.status}
        </span>

      </div>

      {/* Action Bar */}

      <div className="flex flex-wrap gap-3 rounded-xl border bg-white p-4 shadow-sm">

        <Link
          href="/khazanah-politik"
          className="rounded-lg border px-5 py-2 hover:bg-gray-50"
        >
          ← Kembali
        </Link>

        <Link
          href={`/khazanah-politik/${asset.id}/edit`}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          ✏️ Pinda
        </Link>

        <button
          disabled
          className="rounded-lg border px-5 py-2 text-gray-400"
        >
          📤 Export
        </button>

        <button
  className="rounded-lg border px-5 py-2"
>
  📎 Lampiran ({asset.attachments?.length ?? 0})
</button>

        <button
          disabled
          className="rounded-lg border px-5 py-2 text-gray-400"
        >
          🕒 Versi
        </button>

        <button
          disabled
          className="rounded-lg border px-5 py-2 text-gray-400"
        >
          🤖 AI
        </button>

        <div className="ml-auto">
          <DeleteButton
            id={asset.id}
            redirect
          />
        </div>

      </div>

      {/* Maklumat */}

      <div className="rounded-xl border bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-2xl font-semibold">
          ℹ️ Maklumat Aset
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <Info
            label="Kategori"
            value={asset.category}
          />

          <Info
            label="Subkategori"
            value={asset.subcategory}
          />

          <Info
            label="Institusi"
            value={asset.institution}
          />

          <Info
            label="Negeri"
            value={asset.state}
          />

          <Info
            label="Tahun"
            value={asset.year?.toString()}
          />

          <Info
            label="Penulis"
            value={asset.author}
          />

          <Info
            label="Tarikh Terbit"
            value={
  asset.publishedAt
    ? new Date(asset.publishedAt).toLocaleDateString("ms-MY")
    : "-"
}
          />

        </div>

      </div>

      {/* Ringkasan */}

      <div className="rounded-xl border bg-white p-8 shadow-sm">

        <h2 className="mb-4 text-2xl font-semibold">
          📝 Ringkasan
        </h2>

        <p className="leading-8 whitespace-pre-line">
          {asset.summary || "-"}
        </p>

      </div>

      {/* Kandungan */}

      <div className="rounded-xl border bg-white p-8 shadow-sm">

        <h2 className="mb-4 text-2xl font-semibold">
          📄 Kandungan
        </h2>

        <div className="leading-8 whitespace-pre-line">
          {asset.content || "-"}
        </div>

      </div>

{/* Metadata */}

<div className="rounded-xl border bg-white p-8 shadow-sm">

  <h2 className="mb-6 text-2xl font-semibold">
    🏷️ Metadata
  </h2>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

    <Info
      label="Tag"
      value={asset.tags}
    />

    <Info
      label="Sumber"
      value={asset.source}
    />

    <Info
      label="URL"
      value={asset.sourceUrl}
    />

    <Info
      label="Bilangan Lampiran"
      value={asset.attachments.length.toString()}
    />

    <Info
      label="Tarikh Daftar"
      value={new Date(asset.createdAt).toLocaleDateString("ms-MY")}
    />

    <Info
      label="Tarikh Dikemas Kini"
      value={new Date(asset.updatedAt).toLocaleDateString("ms-MY")}
    />

    <div className="md:col-span-2">

      <Info
        label="ID Aset"
        value={asset.id.toString()}
      />

    </div>

  </div>

</div>

{/* Lampiran */}

<div className="rounded-xl border bg-white p-8 shadow-sm">

  <div className="mb-6 flex items-center justify-between">

    <h2 className="text-2xl font-semibold">
      📎 Lampiran
    </h2>

    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
      {asset.attachments.length} Fail
    </span>

  </div>

  {asset.attachments.length === 0 ? (

    <div className="rounded-lg border border-dashed p-8 text-center text-gray-500">

      Tiada lampiran untuk aset ini.

    </div>

  ) : (

    <div className="space-y-4">

      {asset.attachments.map((file) => (

        <div
          key={file.id}
          className="flex items-center justify-between rounded-lg border p-5 hover:bg-gray-50"
        >

          <div>

            <p className="font-medium">

              📄 {file.originalName}

            </p>

            <p className="mt-1 text-sm text-gray-500">

              {file.fileType}
              {" • "}
              {((file.fileSize ?? 0) / 1024).toFixed(1)}
              {" KB"}

            </p>

          </div>

          <a
            href={file.filePath}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >

            Buka

          </a>

        </div>

      ))}

    </div>

  )}

</div>

    </div>
  );
}
type InfoProps = {
  label: string;
  value?: string | null;
};

function Info({
  label,
  value,
}: InfoProps) {
  return (
    <div>

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-1 font-medium">
        {value || "-"}
      </p>

    </div>
  );
}