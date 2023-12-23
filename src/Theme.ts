import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface PalettePrimaryOverrides {
    950: true;
  }

  interface PaletteNeutralOverrides {
    950: true;
  }

  interface PaletteDangerOverrides {
    950: true;
  }

  interface PaletteSuccessOverrides {
    950: true;
  }

  interface PaletteWarningOverrides {
    950: true;
  }
}

export const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: "var(--joy-palette-neutral-950)",
          level1: "var(--joy-palette-neutral-900)",
          level2: "var(--joy-palette-neutral-800)",
          level3: "var(--joy-palette-neutral-700)",
          surface: "var(--joy-palette-neutral-950)",
          tooltip: "var(--joy-palette-neutral-600)",
        },
        danger: {
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "50": "#fef2f2",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d",
          "950": "#450a0a",
        },
        neutral: {
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "50": "#f9fafb",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712",
        },
        primary: {
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "50": "#eff6ff",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
        },
        success: {
          "100": "#dcfce7",
          "200": "#bbf7d0",
          "300": "#86efac",
          "400": "#4ade80",
          "50": "#f0fdf4",
          "500": "#22c55e",
          "600": "#16a34a",
          "700": "#15803d",
          "800": "#166534",
          "900": "#14532d",
          "950": "#052e16",
        },
        text: {
          primary: "var(--joy-palette-neutral-200)",
        },
        warning: {
          "100": "#fef3c7",
          "200": "#fde68a",
          "300": "#fcd34d",
          "400": "#fbbf24",
          "50": "#fffbeb",
          "500": "#f59e0b",
          "600": "#d97706",
          "700": "#b45309",
          "800": "#92400e",
          "900": "#78350f",
          "950": "#451a03",
        },
      },
    },
    light: {
      palette: {
        danger: {
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "50": "#fef2f2",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d",
          "950": "#450a0a",
        },
        neutral: {
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "50": "#f9fafb",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712",
        },
        primary: {
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "50": "#eff6ff",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
        },
        success: {
          "100": "#dcfce7",
          "200": "#bbf7d0",
          "300": "#86efac",
          "400": "#4ade80",
          "50": "#f0fdf4",
          "500": "#22c55e",
          "600": "#16a34a",
          "700": "#15803d",
          "800": "#166534",
          "900": "#14532d",
          "950": "#052e16",
        },
        warning: {
          "100": "#fef3c7",
          "200": "#fde68a",
          "300": "#fcd34d",
          "400": "#fbbf24",
          "50": "#fffbeb",
          "500": "#f59e0b",
          "600": "#d97706",
          "700": "#b45309",
          "800": "#92400e",
          "900": "#78350f",
          "950": "#451a03",
        },
      },
    },
  },
  components: {
    JoyLink: {
      defaultProps: {
        rel: "noopener",
        target: "_blank",
      },
    },
    JoyTooltip: {
      defaultProps: {
        arrow: true,
        enterTouchDelay: 0,
        placement: "top",
        sx: { backdropFilter: "blur(0.5rem)", userSelect: "none" },
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ theme: t }) => ({
          backgroundColor: t.palette.colorScheme === "dark" ? "rgba(3, 7, 18, 0.5)" : "transparent",
        }),
      },
    },
    JoyTypography: {
      defaultProps: {
        sx: { userSelect: "none" },
      },
    },
  },
  fontFamily: {
    body: "Inter Variable",
    code: "Fira Code Variable",
    display: "Inter Variable",
  },
});
