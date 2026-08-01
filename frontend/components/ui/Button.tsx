import { ButtonHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "destructive"
  | "ghost";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<
  ButtonVariant,
  string
> = {
  primary:
    "bg-red-600 text-white hover:bg-red-700",

  secondary:
    "bg-slate-100 text-slate-800 hover:bg-slate-200",

  outline:
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",

  destructive:
    "bg-red-600 text-white hover:bg-red-700",

  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100",
};

const sizeClasses: Record<
  ButtonSize,
  string
> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200",
        "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      disabled={disabled}
      {...props}
    >
      {Icon &&
        iconPosition === "left" && (
          <Icon className="h-4 w-4" />
        )}

      <span>{children}</span>

      {Icon &&
        iconPosition === "right" && (
          <Icon className="h-4 w-4" />
        )}
    </button>
  );
}