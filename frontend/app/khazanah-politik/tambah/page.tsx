import AssetForm from "@/components/forms/knowledge-assets/AssetForm";
import { LibraryBig } from "lucide-react";

export default function TambahAsetPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="flex items-center gap-3 text-4xl font-bold">
  <LibraryBig className="h-9 w-9 text-blue-600" />
  Tambah Aset Pengetahuan
</h1>

        <p className="mt-2 text-gray-500">
          Daftarkan aset baharu ke dalam Repositori Pengetahuan Politik.
        </p>
      </div>

      <AssetForm mode="create" />

    </div>
  );
}