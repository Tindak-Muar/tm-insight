import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
};

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
}

export default function Select({
  label,
  options,
  placeholder,
  fullWidth = true,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          className={cn(
  "h-10 w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 pr-10 text-sm",
  "transition-colors duration-200",
  "focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500",
  "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400",
  className
)}
          {...props}
        >
          {placeholder && (
            <option value="">
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
        />
      </div>
    </div>
  );
}