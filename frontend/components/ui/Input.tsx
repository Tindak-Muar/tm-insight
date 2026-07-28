import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        {...props}
        className={cn(
          "w-full rounded-lg border border-gray-300 px-4 py-3",
          "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100",
          error &&
            "border-red-500 focus:border-red-500 focus:ring-red-100",
          className
        )}
      />

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}