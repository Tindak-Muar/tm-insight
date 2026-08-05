"use client";

import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { ConnectionTestResult } from "@/types/connection";

interface ConnectionResultDialogProps {
  open: boolean;
  result: ConnectionTestResult | null;
  onClose: () => void;
}

export default function ConnectionResultDialog({
  open,
  result,
  onClose,
}: ConnectionResultDialogProps) {

  if (!open || !result) {
    return null;
  }

  const success = result.success;

  const statusLabel =
    result.status === "success"
      ? "Berjaya"
      : "Gagal";

  const duration = result.duration ?? 0;

  const durationColor =
    duration < 300
      ? "bg-green-100 text-green-700"
      : duration < 1000
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";

  const testedAt = new Intl.DateTimeFormat(
    "ms-MY",
    {
      dateStyle: "long",
      timeStyle: "medium",
    }
  ).format(result.testedAt);

  /**
   * Type-safe extraction
   */
  const provider =
    typeof result.details?.provider === "string"
      ? result.details.provider
      : undefined;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

        {/* Header */}

        <div className="flex items-center gap-4">

          {success ? (

            <div className="rounded-full bg-green-100 p-2">

              <CheckCircle2 className="h-7 w-7 text-green-600" />

            </div>

          ) : (

            <div className="rounded-full bg-red-100 p-2">

              <XCircle className="h-7 w-7 text-red-600" />

            </div>

          )}

          <div>

            <h2 className="text-xl font-bold text-gray-900">

              {success
                ? "Sambungan Berjaya"
                : "Sambungan Gagal"}

            </h2>

            <p className="mt-1 text-sm text-gray-500">

              {result.message}

            </p>

          </div>

        </div>

        {/* Maklumat */}

        <div className="mt-6 space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5">

          {provider && (

            <div className="flex items-center justify-between">

              <span className="text-sm text-gray-500">
                Penyedia
              </span>

              <span className="text-sm font-semibold text-gray-900">
                {provider}
              </span>

            </div>

          )}

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-500">
              Status
            </span>

            <span
              className={`text-sm font-semibold ${
                success
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {statusLabel}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-500">
              Masa Respon
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${durationColor}`}
            >
              {duration} ms
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-500">
              Diuji Pada
            </span>

            <span className="text-right text-sm font-medium text-gray-900">

              {testedAt}

            </span>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-6 flex justify-end">

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Selesai
          </button>

        </div>

      </div>

    </div>
  );
}