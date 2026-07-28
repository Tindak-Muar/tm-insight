"use client";

import { useCallback, useState } from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { Search } from "lucide-react";

import Button from "@/components/ui/Button";

const BASE_ROUTE = "/khazanah-politik";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(
    searchParams.get("keyword") ?? ""
  );

  const handleSearch = useCallback(
    (
      e: React.FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();

      const params =
        new URLSearchParams(
          searchParams.toString()
        );

      const value = keyword.trim();

      if (value.length > 0) {
        params.set("keyword", value);
      } else {
        params.delete("keyword");
      }

      // Carian baharu sentiasa bermula di halaman pertama
      params.delete("page");

      const url =
        params.toString().length > 0
          ? `${BASE_ROUTE}?${params.toString()}`
          : BASE_ROUTE;

      const currentUrl =
        window.location.pathname +
        window.location.search;

      if (url !== currentUrl) {
        router.push(url);
      }
    },
    [keyword, router, searchParams]
  );

  return (
    <form
      onSubmit={handleSearch}
      className="mb-6"
    >
      <div className="flex gap-3">
        <input
          type="search"
          aria-label="Cari aset pengetahuan"
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          placeholder="Cari tajuk, penulis, ringkasan atau tag..."
          className="flex-1 rounded-lg border px-4 py-3 focus:border-blue-500 focus:outline-none"
        />

        <Button
          type="submit"
          icon={Search}
        >
          Cari
        </Button>
      </div>
    </form>
  );
}