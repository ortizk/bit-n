import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json(`Endpoint was pinged: ${body}`, {
    status: 201,
  });
}
