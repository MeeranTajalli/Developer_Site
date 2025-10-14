import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const STORAGE_KEY = "portfolio-theme";

const darkTheme = {
  mode: "dark",
  background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
  bodyBackground: "#020617",
  textPrimary: "#e2e8f0",
  textSecondary: "#cbd5f5",
  textMuted: "#94a3b8",
  textExtraMuted: "#64748b",
  surface: "rgba(15, 23, 42, 0.65)",
  surfaceElevated: "rgba(15, 23, 42, 0.8)",
  surfaceSolid: "#0f172a",
  border: "rgba(30, 41, 59, 0.8)",
  borderSubtle: "rgba(30, 41, 59, 0.6)",
  navBackground: "rgba(2, 6, 23, 0.7)",
  navBorder: "rgba(30, 41, 59, 0.7)",
  navLink: "#cbd5f5",
  navLinkHover: "#f8fafc",
  accent: "#7dd3fc",
  accentHover: "#bae6fd",
  accentStrong: "#0ea5e9",
  buttonPrimaryBg: "#0ea5e9",
  buttonPrimaryHover: "#0284c7",
  buttonPrimaryText: "#f8fafc",
  buttonSecondaryBg: "rgba(15, 23, 42, 0.7)",
  buttonSecondaryHover: "#1e293b",
  buttonSecondaryBorder: "rgba(51, 65, 85, 0.8)",
  buttonSecondaryText: "#e2e8f0",
  tagBg: "rgba(15, 23, 42, 0.6)",
  tagBorder: "rgba(30, 41, 59, 0.8)",
  highlightGradient: "linear-gradient(90deg, #7dd3fc 0%, #a5b4fc 100%)",
  heroImageGradient: "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(99,102,241,0.2), rgba(34,211,238,0.2))",
  outline: "rgba(56, 189, 248, 0.4)",
  footerBorder: "rgba(30, 41, 59, 0.7)",
  showcaseBorder: "rgba(30, 41, 59, 0.7)",
  linkAccent: "#7dd3fc",
  linkAccentHover: "#bae6fd",
  iconBackground: "rgba(15, 23, 42, 0.7)",
};

const lightTheme = {
  mode: "light",
  background: "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
  bodyBackground: "#f8fafc",
  textPrimary: "#0f172a",
  textSecondary: "#1e293b",
  textMuted: "#475569",
  textExtraMuted: "#64748b",
  surface: "rgba(255, 255, 255, 0.9)",
  surfaceElevated: "#ffffff",
  surfaceSolid: "#ffffff",
  border: "rgba(203, 213, 225, 1)",
  borderSubtle: "rgba(226, 232, 240, 1)",
  navBackground: "rgba(255, 255, 255, 0.85)",
  navBorder: "rgba(226, 232, 240, 1)",
  navLink: "#475569",
  navLinkHover: "#0f172a",
  accent: "#0284c7",
  accentHover: "#0369a1",
  accentStrong: "#0284c7",
  buttonPrimaryBg: "#0284c7",
  buttonPrimaryHover: "#0369a1",
  buttonPrimaryText: "#f8fafc",
  buttonSecondaryBg: "#ffffff",
  buttonSecondaryHover: "#f1f5f9",
  buttonSecondaryBorder: "rgba(203, 213, 225, 1)",
  buttonSecondaryText: "#0f172a",
  tagBg: "#f1f5f9",
  tagBorder: "rgba(203, 213, 225, 1)",
  highlightGradient: "linear-gradient(90deg, #0284c7 0%, #6366f1 100%)",
  heroImageGradient: "linear-gradient(135deg, rgba(56,189,248,0.35), rgba(129,140,248,0.35), rgba(14,165,233,0.35))",
  outline: "rgba(14, 165, 233, 0.35)",
  footerBorder: "rgba(203, 213, 225, 1)",
  showcaseBorder: "rgba(203, 213, 225, 1)",
  linkAccent: "#0284c7",
  linkAccentHover: "#0369a1",
  iconBackground: "rgba(255, 255, 255, 0.9)",
};

export type ThemeTokens = typeof darkTheme;

export const themes: Record<"dark" | "light", ThemeTokens> = {
  dark: darkTheme,
  light: lightTheme,
};

type ThemeName = keyof typeof themes;

type InternalThemeState = {
  name: ThemeName;
  manual: boolean;
};

export type ThemeContextValue = {
  name: ThemeName;
  theme: ThemeTokens;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getInitialState(): InternalThemeState {
  if (typeof window === "undefined") {
    return { name: "dark", manual: false };
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return { name: stored, manual: true };
  }

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  return { name: prefersLight ? "light" : "dark", manual: false };
}

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps): React.ReactElement {
  const [state, setState] = useState<InternalThemeState>(() => getInitialState());
  const { name, manual } = state;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (manual) {
      window.localStorage.setItem(STORAGE_KEY, name);
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    document.documentElement.setAttribute("data-theme", name);
  }, [name, manual]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: light)");
    const listener = (event: MediaQueryListEvent) => {
      setState((prev) => {
        if (prev.manual) {
          return prev;
        }
        return { name: event.matches ? "light" : "dark", manual: false };
      });
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const toggleTheme = useCallback(() => {
    setState((prev) => ({ name: prev.name === "light" ? "dark" : "light", manual: true }));
  }, []);

  const contextValue = useMemo<ThemeContextValue>(
    () => ({ name, theme: themes[name], toggleTheme }),
    [name, toggleTheme]
  );

  return React.createElement(
    ThemeContext.Provider,
    { value: contextValue },
    React.createElement(StyledThemeProvider, { theme: themes[name] }, children)
  );
}

export default function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
