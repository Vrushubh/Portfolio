import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (name.length < 2 || name.length > 80) return NextResponse.json({ error: "Please enter a name between 2 and 80 characters." }, { status: 400 });
    if (!emailPattern.test(email) || email.length > 120) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (subject.length < 3 || subject.length > 120) return NextResponse.json({ error: "Please enter a subject between 3 and 120 characters." }, { status: 400 });
    if (message.length < 10 || message.length > 3000) return NextResponse.json({ error: "Your message must be between 10 and 3000 characters." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "vrushubhgandhi717@gmail.com";
    const from = process.env.CONTACT_FROM;
    if (!apiKey || !from) return NextResponse.json({ error: "The contact form is not configured yet. Please email vrushubhgandhi717@gmail.com directly." }, { status: 503 });

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from, to: [to], reply_to: email, subject: `Portfolio enquiry: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`
      })
    });
    if (!response.ok) return NextResponse.json({ error: "Email delivery failed. Please try again or contact me directly." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }
}
