import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return Response.json(
        { message: "Please fill all fields." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      return Response.json({ message: "Please enter a valid email." }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Contact form email credentials are not configured.");
      return Response.json(
        { message: "Email service is not configured." },
        { status: 503 },
      );
    }

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: trimmedEmail,
      subject: `New Portfolio Message from ${trimmedName}`,
      text: `
Name: ${trimmedName}
Email: ${trimmedEmail}

Message:
${trimmedMessage}
      `,
    });

    return Response.json(
      { message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { message: "Failed to send message." },
      { status: 500 },
    );
  }
}
