import AssetForm from "@/components/forms/knowledge-assets/AssetForm";

export default function TambahAsetPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          📚 Tambah Aset Pengetahuan
        </h1>

        <p className="mt-2 text-gray-500">
          Daftarkan aset baharu ke dalam Repositori Pengetahuan Politik.
        </p>
      </div>

      <AssetForm mode="create" />

    </div>
  );
}