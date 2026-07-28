import Button from "@/components/ui/Button";

type AssetActionsProps = {
  mode?: "create" | "edit";
  isSubmitting?: boolean;
  onCancel?: () => void;
  onPublish?: () => void;
};

export default function AssetActions({
  mode = "create",
  isSubmitting = false,
  onCancel,
  onPublish,
}: AssetActionsProps) {
  return (
  <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
    <Button
      type="button"
      variant="outline"
      onClick={onCancel}
    >
      Batal
    </Button>

    <Button
      type="submit"
      variant="secondary"
      disabled={isSubmitting}
    >
      {isSubmitting
        ? "Menyimpan..."
        : mode === "create"
        ? "Simpan Draf"
        : "Simpan Perubahan"}
    </Button>

    <Button
  type="submit"
  variant="primary"
  disabled={isSubmitting}
  onClick={onPublish}
>
  {mode === "create"
    ? "Terbitkan"
    : "Kemas Kini & Terbitkan"}
</Button>
  </div>
);
}