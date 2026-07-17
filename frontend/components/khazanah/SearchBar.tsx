"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(
    searchParams.get("q") ?? ""
  );

  function handleSearch(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const params = new URLSearchParams(
      searchParams.toString()
    );

    if (keyword.trim()) {
      params.set("q", keyword);
    } else {
      params.delete("q");
    }

    router.push(
      `/khazanah-politik?${params.toString()}`
    );
  }

  return (
    <form
      onSubmit={handleSearch}
      className="mb-6"
    >
      <div className="flex gap-3">

        <input
          type="text"
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          placeholder="Cari tajuk, penulis, ringkasan atau tag..."
          className="flex-1 rounded-lg border px-4 py-3 focus:border-blue-500 focus:outline-none"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          🔍 Cari
        </button>

      </div>
    </form>
  );
}