type SuccessAlertProps = {
  show: boolean;
};

export default function SuccessAlert({
  show,
}: SuccessAlertProps) {
  if (!show) return null;

  return (
    <div className="rounded-xl border border-green-300 bg-green-50 p-4 text-green-700">
      ✅ Aset pengetahuan berjaya disimpan.
    </div>
  );
}