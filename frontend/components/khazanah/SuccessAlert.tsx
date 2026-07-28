import Alert from "@/components/ui/Alert";

type SuccessAlertProps = {
  show: boolean;
  message?: string;
};

const DEFAULT_MESSAGE =
  "Aset pengetahuan berjaya disimpan.";

export default function SuccessAlert({
  show,
  message = DEFAULT_MESSAGE,
}: SuccessAlertProps) {
  if (!show) {
    return null;
  }

  return (
    <Alert variant="success">
      {message}
    </Alert>
  );
}