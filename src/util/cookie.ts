import { createServerCookie, type MaxAgeOptions } from "@solid-primitives/cookies";
import { type Signal } from "solid-js";
import { isServer } from "solid-js/web";

export type Theme = "light" | "dark" | "system";

export type UserThemeOptions = MaxAgeOptions & {
  /**
   * The default theme to be used if the cookie is not set
   */
  defaultValue?: Theme;
};

/**
 * Composes {@link createServerCookie} to provide a type safe way to store a theme and access it on the server or client.
 * "system" will be set to the system theme on the client side, will always transform to "dark" or "light".
 *
 * @param name The name of the cookie to be set
 * @param options Options for the cookie {@link UserThemeOptions}
 */
export function createUserTheme(
  name: string | undefined,
  options: UserThemeOptions & { defaultValue: Theme },
): Signal<Theme>;
export function createUserTheme(name?: string, options?: UserThemeOptions): Signal<Theme | undefined>;
export function createUserTheme(
  name = "theme",
  options: UserThemeOptions = {},
): Signal<Theme> | Signal<Theme | undefined> {
  const { defaultValue, cookieMaxAge } = options;
  const themeCookie = createServerCookie(name, {
    cookieMaxAge,
    deserialize: (str) => {
      const theme = str?.split(",")[0];
      const system = str?.split(",")[1] === "true";

      if (system) return "system";
      return (theme ?? defaultValue) as Theme;
    },
    serialize: (str: Theme) => {
      if (isServer) throw new Error("Cannot set cookie on server");
      console.trace("setting cookie", str);

      if (str === "system") {
        const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        return `${theme},true`;
      } else {
        return str;
      }
    },
  });

  // // client-only
  // if (!isServer) {
  //   createComputed(() => {
  //     if (themeCookie[0]() === "system") {
  //       themeCookie[1]("system");
  //     }
  //   });
  // }

  return themeCookie;
}
