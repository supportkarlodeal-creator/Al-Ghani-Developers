import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

function getResendClient() {
  const apiKey = process.env["RESEND_API_KEY"];

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Supabase environment variables are missing." },
        { status: 500 }
      );
    }

    const resend = getResendClient();

    if (!resend) {
      return NextResponse.json(
        { error: "Resend API key is missing." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and mobile number are required." },
        { status: 400 }
      );
    }

    if (email) {
      const emailIsValid =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!emailIsValid) {
        return NextResponse.json(
          { error: "Please enter a valid email address." },
          { status: 400 }
        );
      }
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Save enquiry in Supabase
    const { error: databaseError } = await supabase
      .from("contact_enquiries")
      .insert({
        name,
        phone,
        email: email || null,
        message: message || null,
      });

    if (databaseError) {
      console.error("Supabase error:", databaseError);

      return NextResponse.json(
        { error: "Unable to save your enquiry." },
        { status: 500 }
      );
    }

    // 2. Send notification email
    const notificationEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL;

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "Al Ghani Developers <website@alghani-developers.com>";

    if (notificationEmail) {
      const { error: emailError } = await resend.emails.send({
        from: fromEmail,
        to: notificationEmail,
        subject: `New Website Enquiry - ${name}`,
        replyTo: email || undefined,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Contact Enquiry</h2>

            <p>
              <strong>Name:</strong> ${escapeHtml(name)}
            </p>

            <p>
              <strong>Mobile Number:</strong> ${escapeHtml(phone)}
            </p>

            <p>
              <strong>Email:</strong> ${
                email ? escapeHtml(email) : "Not provided"
              }
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <p style="white-space: pre-wrap;">
              ${escapeHtml(message || "No message provided")}
            </p>

            <hr />

            <p>
              This enquiry was submitted through
              <strong>alghani-developers.com</strong>.
            </p>
          </div>
        `,
      });

      if (emailError) {
        console.error("Resend error:", emailError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}