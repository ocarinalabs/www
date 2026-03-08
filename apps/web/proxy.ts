import { secure } from "@repo/security";
import { noseconeOptions, securityMiddleware } from "@repo/security/proxy";
import { type NextRequest, NextResponse } from "next/server";
import { env } from "@/env";

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|ingest|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico)$).*)",
  ],
};

const securityHeaders = securityMiddleware(noseconeOptions);

const arcjetMiddleware = async (request: NextRequest) => {
  if (!env.ARCJET_KEY) {
    return;
  }

  try {
    await secure(
      ["CATEGORY:SEARCH_ENGINE", "CATEGORY:PREVIEW", "CATEGORY:MONITOR"],
      request
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Forbidden";
    return NextResponse.json({ error: message }, { status: 403 });
  }
};

export default async function middleware(request: NextRequest) {
  const headersResponse = securityHeaders();

  const arcjetResponse = await arcjetMiddleware(request);
  if (arcjetResponse) {
    return arcjetResponse;
  }

  return headersResponse;
}
