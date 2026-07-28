"use client";

import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import { Trash2 } from "lucide-react";

import api from "@/lib/api/client";
import Button from "@/components/ui/Button";

type DeleteButtonProps = {
  id: number;
  redirect?: boolean;
};

export default function DeleteButton({
  id,
  redirect = false,
}: DeleteButtonProps) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const handleDelete = useCallback(
    async () => {
      const confirmed = window.confirm(
        "Adakah anda pasti mahu memadam aset ini?"
      );

      if (!confirmed || loading) {
        return;
      }

      try {
        setLoading(true);

        const result =
          await api.delete(
            `/api/khazanah-politik/${id}`
          );

       if (!result.success) {
  window.alert(result.message);
  return;
}

        if (redirect) {
          router.push(
            "/khazanah-politik"
          );
          return;
        }

        router.refresh();
      } catch {
        window.alert(
          "Ralat semasa memadam aset."
        );
      } finally {
        setLoading(false);
      }
    },
    [id, loading, redirect, router]
  );

  return (
    <Button
      variant="destructive"
      size="sm"
      icon={Trash2}
      disabled={loading}
      onClick={handleDelete}
    >
      {loading
        ? "Memadam..."
        : "Padam"}
    </Button>
  );
}