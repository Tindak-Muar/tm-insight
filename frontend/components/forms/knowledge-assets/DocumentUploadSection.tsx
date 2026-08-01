"use client";

import { useRef } from "react";

import {
  Upload,
  FileText,
  Sparkles,
} from "lucide-react";

import SectionCard from "@/components/ui/SectionCard";
import Button from "@/components/ui/Button";
import Alert from "@/components/ui/Alert";
import Badge from "@/components/ui/Badge";

type DocumentUploadSectionProps = {
  file: File | null;
  onFileChange: (file: File | null) => void;
};

export default function DocumentUploadSection({
  file,
  onFileChange,
}: DocumentUploadSectionProps) {
  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const hasFile = file !== null;

  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const selected =
      e.target.files?.[0];

    if (!selected) return;

    onFileChange(selected);
  }

  function removeFile() {
    onFileChange(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function openFilePicker() {
    fileInputRef.current?.click();
  }

  function formatFileSize(size: number) {
    return `${(
      size /
      1024 /
      1024
    ).toFixed(2)} MB`;
  }

  return (
    <SectionCard
      title="Muat Naik Dokumen"
      description="Muat naik dokumen asal untuk dijadikan Aset Pengetahuan."
    >
      <div className="space-y-6">

        {/* Upload Area */}

        <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center">

          <Upload className="mx-auto mb-3 h-10 w-10 text-gray-400" />

          <p className="text-sm font-medium text-gray-900">
            Seret dokumen ke sini
          </p>

          <p className="mt-1 text-sm text-gray-500">
            atau klik butang di bawah untuk memilih dokumen.
          </p>

          <Button
            type="button"
            className="mt-5"
            onClick={openFilePicker}
          >
            {hasFile
              ? "Ganti Dokumen"
              : "Pilih Dokumen"}
          </Button>

          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept="
application/pdf,
application/vnd.openxmlformats-officedocument.wordprocessingml.document,
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
application/vnd.openxmlformats-officedocument.presentationml.presentation,
image/jpeg,
image/png,
image/webp"
            onChange={handleFileChange}
          />

          <p className="mt-4 text-xs text-gray-500">
            PDF • DOCX • XLSX • PPTX • JPG • PNG • WEBP
          </p>
        </div>

        {/* Document */}

        {hasFile ? (
          <div className="rounded-lg border p-4">

            <div className="flex items-start justify-between">

              <div className="flex gap-3">

                <FileText className="mt-1 h-6 w-6 text-red-600" />

                <div>

                  <p className="font-medium">
                    {file.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {file.type}
                    {" • "}
                    {formatFileSize(
                      file.size
                    )}
                  </p>

                </div>

              </div>

              <Badge>
                Dokumen
              </Badge>

            </div>

            <div className="mt-4 flex gap-2">

              <Button
                type="button"
                variant="secondary"
                disabled
              >
                Lihat
              </Button>

              <Button
                type="button"
                variant="secondary"
                onClick={openFilePicker}
              >
                Ganti
              </Button>

              <Button
                type="button"
                variant="destructive"
                onClick={removeFile}
              >
                Buang
              </Button>

            </div>

          </div>
        ) : (
          <Alert>
            Tiada dokumen dimuat naik.
          </Alert>
        )}

        {/* AI */}

        <div className="rounded-lg border p-4">

          <div className="flex items-center justify-between">

            <div>

              <p className="font-medium">
                Status AI
              </p>

              <p className="text-sm text-gray-500">
                Belum diproses.
              </p>

            </div>

            <Badge>
              Belum Diproses
            </Badge>

          </div>

          <Button
            type="button"
            className="mt-4"
            disabled
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Proses AI
          </Button>

        </div>

      </div>
    </SectionCard>
  );
}