"use client";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function goToPage(page: number) {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set("page", page.toString());

    router.push(
      `/khazanah-politik?${params.toString()}`
    );
  }

  if (totalPages <= 1) {
    return null;
  }

  const startPage = Math.max(
    1,
    currentPage - 2
  );

  const endPage = Math.min(
    totalPages,
    currentPage + 2
  );

  const pages = [];

  for (
    let page = startPage;
    page <= endPage;
    page++
  ) {
    pages.push(page);
  }

  const buttonClass =
    "rounded-lg border px-4 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

      <p className="text-sm text-gray-500">
        Halaman{" "}
        <strong>{currentPage}</strong> daripada{" "}
        <strong>{totalPages}</strong>
      </p>

      <div className="flex flex-wrap items-center gap-2">

        {/* Mula */}
        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
          className={buttonClass}
        >
          « Mula
        </button>

        {/* Sebelum */}
        <button
          onClick={() =>
            goToPage(currentPage - 1)
          }
          disabled={currentPage === 1}
          className={buttonClass}
        >
          ← Sebelum
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() => goToPage(1)}
              className={buttonClass}
            >
              1
            </button>

            {startPage > 2 && (
              <span className="px-2 text-gray-400">
                ...
              </span>
            )}
          </>
        )}

        {pages.map((page) => (
          <button
            key={page}
            onClick={() =>
              goToPage(page)
            }
            className={`min-w-[44px] rounded-lg px-4 py-2 transition ${
              currentPage === page
                ? "bg-blue-600 font-semibold text-white shadow"
                : "border hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="px-2 text-gray-400">
                ...
              </span>
            )}

            <button
              onClick={() =>
                goToPage(totalPages)
              }
              className={buttonClass}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Seterusnya */}
        <button
          onClick={() =>
            goToPage(currentPage + 1)
          }
          disabled={
            currentPage === totalPages
          }
          className={buttonClass}
        >
          Seterusnya →
        </button>

        {/* Akhir */}
        <button
          onClick={() =>
            goToPage(totalPages)
          }
          disabled={
            currentPage === totalPages
          }
          className={buttonClass}
        >
          Akhir »
        </button>

      </div>

    </div>
  );
}