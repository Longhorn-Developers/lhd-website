// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import clsx from "clsx";
import { getCookie } from "vinxi/http";

export default createHandler((ctx) => {
  const theme = getCookie(ctx.nativeEvent, "color-theme") ?? "light";

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
          </head>
          <body>
            <div id="app" class="flex flex-col min-h-screen bg-background overflow-x-hidden">
              {children}
            </div>
            {scripts}
          </body>
        </html>
      )}
    />
  );
});
