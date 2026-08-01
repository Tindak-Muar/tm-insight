/**
 * ==========================================================
 * SINARLabs Design System
 * Single Source of Truth untuk identiti visual aplikasi.
 * ==========================================================
 */

export const THEME = {
  brand: {
    name: "SINARLabs",

    primary: {
      50: "red-50",
      100: "red-100",
      200: "red-200",
      300: "red-300",
      400: "red-400",
      500: "red-500",
      600: "red-600",
      700: "red-700",
      800: "red-800",
      900: "red-900",
    },

    white: "white",

    background: "gray-50",

    surface: "white",

    border: "gray-200",

    text: {
      primary: "gray-900",
      secondary: "gray-600",
      muted: "gray-500",
    },
  },

  radius: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
  },

  shadow: {
    card: "shadow-sm",
    hover: "shadow-md",
  },

  transition: {
    default: "transition-all duration-200",
  },
} as const;