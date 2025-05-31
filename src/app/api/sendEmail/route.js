// app/api/sendEmail/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_SMTP_PASSWORD,
      },
      body: JSON.stringify({
        sender: {
          name: "Crodlin Technology",
          email: process.env.BREVO_EMAIL,
        },
        to: [{ email }],
        subject: "🚀 Thanks for contacting Crodlin!",
        htmlContent: `
          <html>
            <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
              <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
                
                <div style="padding: 20px; text-align: center; background-color: #0d0d0d;">
                  <img src="https://crodlin.in/logo.png" alt="Crodlin Logo" style="height: 60px; margin-bottom: 10px;" />
                  <h2 style="color: #ffffff;">Crodlin Technology</h2>
                </div>
                
                <div style="padding: 30px;">
                  <h3 style="color: #333;">Hey ${name},</h3>
                  <p style="font-size: 16px; color: #555;">
                    👋 Thanks for reaching out to <strong>Crodlin</strong>!
                  </p>
                  <p style="font-size: 16px; color: #555;">
                    We've received your message and our team will get in touch with you very soon.
                  </p>
                  <p style="font-size: 16px; color: #555;">
                    Until then, feel free to explore our work and updates on <a href="https://crodlin.in" style="color: #007bff;">our website</a>.
                  </p>

                  <p style="font-size: 16px; color: #555;">Warm regards,<br/>Team Crodlin</p>
                </div>

                <div style="padding: 20px; background-color: #f0f0f0; text-align: center; font-size: 13px; color: #999;">
                  © ${new Date().getFullYear()} Crodlin Technology. All rights reserved.
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    const data = await res.json();
    console.log("Brevo API response:", data);

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: data }, { status: 500 });
    }
  } catch (err) {
    console.error("Error sending email via Brevo API:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
