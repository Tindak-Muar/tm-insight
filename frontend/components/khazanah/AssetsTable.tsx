import Link from "next/link";
import DeleteButton from "@/components/khazanah/DeleteButton";

type Asset = {
  id: number;

  title: string;

  category: string;
  subcategory: string | null;

  institution: string | null;
  state: string | null;

  year: number | null;

  author: string | null;

  summary: string | null;
  content: string | null;

  tags: string | null;

  source: string | null;
  url: string | null;

  filePath: string | null;

  status: string;

  publishedAt: Date | null;

  createdAt: Date;
  updatedAt: Date;
};

type AssetsTableProps = {
  assets: Asset[];
};

export default function AssetsTable({
  assets,
}: AssetsTableProps) {

  if (assets.length === 0) {
    return (
      <EmptyState />
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">

      <table className="min-w-full">

        <thead className="bg-gray-50">

          <tr className="border-b">

            <th className="px-6 py-4 text-left font-semibold">
              Tajuk
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Kategori
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Institusi
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Status
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Tarikh Daftar
            </th>

            <th className="px-6 py-4 text-center font-semibold">
              Tindakan
            </th>

          </tr>

        </thead>

        <tbody>

          {assets.map((asset) => (

            <tr
              key={asset.id}
              className="border-b hover:bg-gray-50"
            >

              {/* Tajuk */}

              <td className="px-6 py-4 align-top">

                <Link
                  href={`/khazanah-politik/${asset.id}`}
                  className="font-semibold text-blue-600 hover:underline"
                >
                  {asset.title}
                </Link>

                {asset.summary && (

                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">

                    {asset.summary}

                  </p>

                )}

                <div className="mt-2 text-xs text-gray-500">

                  {asset.author || "-"}

                  {asset.year && (
                    <>
                      {" • "}
                      {asset.year}
                    </>
                  )}

                </div>

              </td>

              {/* Kategori */}

              <td className="px-6 py-4 align-top">

                <div className="font-medium">

                  {asset.category}

                </div>

                {asset.subcategory && (

                  <div className="mt-1 text-sm text-gray-500">

                    {asset.subcategory}

                  </div>

                )}

              </td>

              {/* Institusi */}

              <td className="px-6 py-4 align-top">

                <div>

                  {asset.institution || "-"}

                </div>

                {asset.state && (

                  <div className="mt-1 text-sm text-gray-500">

                    {asset.state}

                  </div>

                )}

              </td>

              {/* Status */}

              <td className="px-6 py-4 align-top">

                <StatusBadge
                  status={asset.status}
                />

              </td>

              {/* Tarikh */}

              <td className="px-6 py-4 text-gray-500 align-top">

              {new Date(asset.createdAt).toLocaleDateString(
  "ms-MY",
  {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }
)}

              </td>

              {/* Action */}

              <td className="px-6 py-4">

                <div className="flex justify-center gap-2">

                  <ActionButton
  href={`/khazanah-politik/${asset.id}`}
  color="blue"
>
  👁️ Lihat
</ActionButton>

                  <ActionButton
  href={`/khazanah-politik/${asset.id}/edit`}
  color="amber"
>
  ✏️ Pinda
</ActionButton>

                 <DeleteButton id={asset.id} />

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
type StatusBadgeProps = {
  status: string;
};

function StatusBadge({
  status,
}: StatusBadgeProps) {
  let className =
    "rounded-full px-3 py-1 text-sm font-medium";

  switch (status) {
    case "Aktif":
      className +=
        " bg-green-100 text-green-700";
      break;

    case "Arkib":
      className +=
        " bg-gray-200 text-gray-700";
      break;

    case "Draf":
      className +=
        " bg-yellow-100 text-yellow-700";
      break;

      case "Dalam Semakan":
  className +=
    " bg-sky-100 text-sky-700";
  break;

    default:
      className +=
        " bg-blue-100 text-blue-700";
  }

  return (
    <span className={className}>
      {status}
    </span>
  );
}

type ActionButtonProps = {
  href: string;
  color: "blue" | "amber";
  children: React.ReactNode;
};

function ActionButton({
  href,
  color,
  children,
}: ActionButtonProps) {
  const colors = {
    blue:
      "bg-blue-600 hover:bg-blue-700",
    amber:
      "bg-amber-500 hover:bg-amber-600",
  };

  return (
    <Link
      href={href}
      className={`rounded px-3 py-1 text-sm text-white transition-colors ${colors[color]}`}
    >
      {children}
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border bg-white p-12 text-center shadow-sm">

      <div className="text-6xl">
        📭
      </div>

      <h2 className="mt-4 text-2xl font-bold">
        Tiada aset dijumpai
      </h2>

      <p className="mt-3 text-gray-500">
        Tiada rekod yang sepadan dengan carian
        atau penapis yang dipilih.
      </p>

      <div className="mt-8 flex justify-center gap-3">

        <Link
          href="/khazanah-politik"
          className="rounded-lg border px-5 py-3 hover:bg-gray-50"
        >
          🧹 Reset Filter
        </Link>

        <Link
          href="/khazanah-politik/tambah"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          + Tambah Aset
        </Link>

      </div>

    </div>
  );
}