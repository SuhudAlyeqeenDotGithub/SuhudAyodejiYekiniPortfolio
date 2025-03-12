import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { name, senderEmail, message } = await req.json();

    // Validate required fields
    if (!message || !senderEmail) {
      return new Response("Email and message are required", { status: 400 });
    }

    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail)) {
      return new Response("Invalid email format", { status: 400 });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD // Ensure you are using an App Password for Gmail
      }
    });

    // Configure mail options
    const mailOptions = {
      from: senderEmail,
      to: process.env.EMAIL, // The email you want to receive the message at
      subject: `Suhud Al-Yeqeen App Message from ${name}`,
      text: `Hi Suhud. Please see the below message from ${name} || ${senderEmail}: \n\n${message}`
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(JSON.stringify({ message: "Email sent successfully. Thank you" }), { status: 200 });
  } catch (error) {
    // Log the error for debugging
    console.error("Error sending email:", error);

    // Return error response
    return new Response("Email not sent", { status: 500 });
  }
}
