import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
};

export default function Card({
  title,
  description,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-xl border border-gray-200 bg-white shadow-sm",
        className
      )}
    >
      {(title || description) && (
        <div className="border-b border-gray-200 px-6 py-4">
          {title && (
            <h2 className="text-lg font-semibold text-gray-900">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-1 text-sm text-gray-600">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}