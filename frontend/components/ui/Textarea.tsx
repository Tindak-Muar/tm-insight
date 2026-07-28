import { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
  };

export default function Textarea({
  label,
  error,
  className,
  ...props
}: TextareaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <textarea
        {...props}
        className={cn(
          "w-full rounded-lg border border-gray-300 px-4 py-3",
          "focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100",
          "disabled:bg-gray-100 disabled:text-gray-500",
          "resize-y",
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