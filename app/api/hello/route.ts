import { NextResponse } from "next/server.js";

export function GET() {
  return NextResponse.json({ message: "hello, world!" }, { status: 200 });
}
