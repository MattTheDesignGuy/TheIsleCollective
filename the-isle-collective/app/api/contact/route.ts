import { NextRequest, NextResponse } from "next/server";

// TODO: wire to email service (Resend, SendGrid, etc.)
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, business, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  console.log("Contact form submission:", { name, email, business, message });

  return NextResponse.json({ success: true });
}
