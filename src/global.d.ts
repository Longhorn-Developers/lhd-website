/// <reference types="@solidjs/start/env" />

import type { Request as CfRequest, ExecutionContext } from "@cloudflare/workers-types";

/**
 * Reference: https://developers.cloudflare.com/workers/runtime-apis/fetch-event/#parameters
 */
export interface CfPagesEnv {
  ASSETS: { fetch: (request: CfRequest) => Promise<Response> };
  CF_PAGES: "1";
  CF_PAGES_BRANCH: string;
  CF_PAGES_COMMIT_SHA: string;
  CF_PAGES_URL: string;
}

declare module "vinxi/http" {
  interface H3EventContext {
    cf: CfRequest["cf"];
    cloudflare: {
      request: CfRequest;
      env: CfPagesEnv;
      context: ExecutionContext;
    };
  }
}
