import { createUserTheme } from "@solid-primitives/cookies";
import clsx from "clsx";
import type { Accessor, JSX } from "solid-js";
import { createContext, createEffect, onMount, Show, useContext } from "solid-js";

import MoonIcon from "~icons/lucide/moon";
import SunIcon from "~icons/lucide/sun";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Accessor<Theme>;
  updateTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>();

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};

export function ThemeProvider(props: { children: JSX.Element }): JSX.Element;
export function ThemeProvider(props: { children: (theme: Accessor<Theme>) => JSX.Element }): JSX.Element;
export function ThemeProvider(props: { children: JSX.Element | ((theme: Accessor<Theme>) => JSX.Element) }) {
  const [theme, updateTheme] = createUserTheme("color-theme", {
    defaultValue: "dark",
  });

  const Inner = () => {
    const child = props.children;
    const fn = typeof child === "function" && child.length > 0;
    return fn ? child(theme) : (child as JSX.Element);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <Inner />
    </ThemeContext.Provider>
  );
}

export const ThemeControllerButton = (props: { class?: string }) => {
  const { theme, updateTheme } = useTheme();

  const toggleDarkMode = () => {
    updateTheme(theme() === "dark" ? "light" : "dark");
  };

  createEffect(() => {
    document.querySelector("html")?.classList.toggle("dark", theme() === "dark");
  });

  onMount(() => {
    if (theme() === undefined) {
      updateTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  });

  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      aria-label={theme() === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      class={clsx(
        `cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9`,
        props.class,
      )}
    >
      <Show when={theme() === "dark"}>
        <SunIcon class="h-5 w-5" />
      </Show>
      <Show when={theme() === "light"}>
        <MoonIcon class="h-5 w-5" />
      </Show>
    </button>
  );
};
