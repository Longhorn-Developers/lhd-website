// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import clsx from "clsx";
import { getCookie } from "vinxi/http";

export default createHandler((ctx) => {
  const theme = (getCookie(ctx.nativeEvent, "color-theme") ?? "system").split(",")[0];

  return (
    <StartServer
      document={({ assets, children, scripts }) => (
        <html lang="en" class={clsx("overflow-auto", theme === "dark" && "dark")}>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>UT Dining</title>
            <meta name="description" content="Longhorn Developers." />
            {assets}
            {theme === "system" && (
              // only gets added when cookie is not set
              <script>
                {`document.documentElement.classList.toggle("dark", window.matchMedia("(prefers-color-scheme: dark)").matches);`}
              </script>
            )}
          </head>
          <body>
            <div id="app" class="flex min-h-screen flex-col overflow-x-hidden">
              {children}
            </div>
            {scripts}
          </body>
        </html>
      )}
    />
  );
});
