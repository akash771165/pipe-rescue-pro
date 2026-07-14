import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import {
  ContactSchema,
  ContactForm,
} from "@/lib/validators/contact";

export async function POST(req: Request) {
  try {
    const body: ContactForm = await req.json();

    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const { data: emailData, error } = await resend.emails.send({
    from: "Pipe Rescue <noreply@piperesque.com>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: data.email,
      subject: `New Plumbing Lead - ${data.service}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>

        <hr />

        <p>${data.message}</p>
      `,
    });

    console.log("Resend Data:", emailData);
    console.log("Resend Error:", error);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}