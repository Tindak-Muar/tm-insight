"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: number;
  redirect?: boolean;
};

export default function DeleteButton({
  id,
  redirect = false,
}: Props) {
  const router = useRouter();

  async function handleDelete() {
    const ok = confirm(
      "Adakah anda pasti mahu memadam aset ini?"
    );

    if (!ok) return;

    const response = await fetch(
      `/api/assets/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      alert("Gagal memadam aset.");
      return;
    }

    alert("Aset berjaya dipadam.");

    if (redirect) {
      router.push("/khazanah-politik");
    }

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
    >
      🗑️ Padam
    </button>
  );
}