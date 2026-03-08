import { keys as cms } from "@repo/cms/keys";
import { keys as core } from "@repo/next-config/keys";
import { keys as security } from "@repo/security/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [cms(), core(), security()],
  server: {},
  client: {},
  runtimeEnv: {},
});
