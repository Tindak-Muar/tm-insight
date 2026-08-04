"use client";

import { X } from "lucide-react";

import {
  getConfiguration,
} from "@/lib/gerbang-integrasi/services/configurationEngine";

import ConfigurationForm from "./ConfigurationForm";

interface ConfigurationDialogProps {
  providerId: string;
  open: boolean;
  onClose: () => void;
}

export default function ConfigurationDialog({
  providerId,
  open,
  onClose,
}: ConfigurationDialogProps) {

  if (!open) {
    return null;
  }

  const result = getConfiguration(providerId);

  if (!result) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">

      <div className="w-full max-w-3xl rounded-xl bg-white shadow-xl">

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-xl font-semibold">
              {result.configuration.title}
            </h2>

            {result.configuration.description && (
              <p className="mt-1 text-sm text-gray-500">
                {result.configuration.description}
              </p>
            )}

          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={18} />
          </button>

        </div>

        <div className="p-6">

          <ConfigurationForm
            configuration={result.configuration}
          />

        </div>

      </div>

    </div>
  );
}