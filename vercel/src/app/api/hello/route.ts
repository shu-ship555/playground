import { NextResponse } from "next/server";

// このファイルは Vercel 上では Serverless Function として動作する
// GET /api/hello
export async function GET() {
  return NextResponse.json({
    message: "Hello from Serverless Function!",
    runtime: "nodejs",
    // VERCEL 環境変数は Vercel 上でのみ自動で設定される
    environment: process.env.VERCEL_ENV ?? "local",
    region: process.env.VERCEL_REGION ?? "unknown",
    deploymentUrl: process.env.VERCEL_URL ?? "localhost",
    timestamp: new Date().toISOString(),
  });
}
