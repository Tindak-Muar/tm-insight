"use client";

import { useCallback, useMemo } from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const BASE_ROUTE = "/khazanah-politik";

const BUTTON_CLASS =
  "rounded-lg border px-4 py-2 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50";

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = useCallback(
    (page: number) => {
      if (
        page < 1 ||
        page > totalPages ||
        page === currentPage
      ) {
        return;
      }

      const params =
        new URLSearchParams(
          searchParams.toString()
        );

      params.set("page", page.toString());

      const url =
        params.toString().length > 0
          ? `${BASE_ROUTE}?${params.toString()}`
          : BASE_ROUTE;

      router.push(url);
    },
    [
      currentPage,
      totalPages,
      router,
      searchParams,
    ]
  );

  const pages = useMemo(() => {
    const startPage = Math.max(
      1,
      currentPage - 2
    );

    const endPage = Math.min(
      totalPages,
      currentPage + 2
    );

    return Array.from(
      {
        length:
          endPage -
          startPage +
          1,
      },
      (_, index) =>
        startPage + index
    );
  }, [currentPage, totalPages]);

  if (totalPages <= 1) {
    return null;
  }

  const startPage = pages[0];
  const endPage =
    pages[pages.length - 1];

  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
      <p className="text-sm text-gray-500">
        Halaman{" "}
        <strong>{currentPage}</strong>{" "}
        daripada{" "}
        <strong>{totalPages}</strong>
      </p>

      <div className="flex flex-wrap items-center gap-2">

        <button
          onClick={() =>
            goToPage(1)
          }
          disabled={
            currentPage === 1
          }
          className={BUTTON_CLASS}
        >
          « Mula
        </button>

        <button
          onClick={() =>
            goToPage(
              currentPage - 1
            )
          }
          disabled={
            currentPage === 1
          }
          className={BUTTON_CLASS}
        >
          ← Sebelum
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() =>
                goToPage(1)
              }
              className={
                BUTTON_CLASS
              }
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

        {endPage <
          totalPages && (
          <>
            {endPage <
              totalPages -
                1 && (
              <span className="px-2 text-gray-400">
                ...
              </span>
            )}

            <button
              onClick={() =>
                goToPage(
                  totalPages
                )
              }
              className={
                BUTTON_CLASS
              }
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() =>
            goToPage(
              currentPage + 1
            )
          }
          disabled={
            currentPage ===
            totalPages
          }
          className={BUTTON_CLASS}
        >
          Seterusnya →
        </button>

        <button
          onClick={() =>
            goToPage(
              totalPages
            )
          }
          disabled={
            currentPage ===
            totalPages
          }
          className={BUTTON_CLASS}
        >
          Akhir »
        </button>

      </div>
    </div>
  );
}