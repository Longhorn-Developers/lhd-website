import { getRequestEvent } from "solid-js/web";
import type { CfPagesEnv } from "../global.js";

// server-only helper function to access cloudflare environment variables
export const env = (event = getRequestEvent()): CfPagesEnv => {
  if (!event) throw new Error("env() must be called in a server context.");
  // fallback to process.env for local development
  const env = event.nativeEvent.context?.cloudflare?.env ?? process.env;
  return env;
};
