import { createPrefersDark } from "@solid-primitives/media";
import clsx from "clsx";
import type { Accessor, JSX } from "solid-js";
import { createContext, createEffect, Show, useContext } from "solid-js";
import { createUserTheme, type Theme } from "~/util/cookie";
import MoonIcon from "~icons/lucide/moon";
import SunIcon from "~icons/lucide/sun";

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
  const [cookieTheme, updateTheme] = createUserTheme("color-theme", {
    defaultValue: "system",
  });

  // expected default if system cannot be determined: dark mode
  const prefersDark = createPrefersDark(true);

  const theme = () => {
    if (cookieTheme() === "system") {
      return prefersDark() ? "dark" : "light";
    }
    return cookieTheme();
  };

  const Inner = () => {
    const child = props.children;
    const fn = typeof child === "function" && child.length > 0;
    return fn ? child(theme) : (child as JSX.Element);
  };

  createEffect(() => {
    document.querySelector("html")?.classList.toggle("dark", theme() === "dark");
  });

  // onMount(() => {
  //   if (theme() === undefined) {
  //     updateTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  //   }
  // });

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

  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      aria-label={theme() === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      class={clsx(
        `inline-flex h-9 w-9 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
        props.class,
      )}
    >
      <Show when={theme() === "dark"}>
        <SunIcon class="size-5" />
      </Show>
      <Show when={theme() === "light"}>
        <MoonIcon class="size-5" />
      </Show>
    </button>
  );
};
