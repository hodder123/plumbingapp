import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, postalCode, message, captchaToken } = body;

  if (!captchaToken) {
    return NextResponse.json({ success: false, message: 'No captcha token' }, { status: 400 });
  }

  // Verify captcha using environment variable
  const captchaVerifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`
  });

  const captchaData = await captchaVerifyRes.json();
  if (!captchaData.success) {
    return NextResponse.json({ success: false, message: 'Captcha verification failed' }, { status: 400 });
  }

  // Send email using Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: '"Advanced Plumbing Kamloops Website" <hodder.ca@gmail.com>',
      to: 'info@advancedplumbingkamloops.ca',
      subject: 'New Contact Form Submission - Advanced Plumbing Kamloops',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Postal Code:</strong> ${postalCode}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted from advancedplumbingkamloops.ca</small></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Postal Code: ${postalCode}
        Message: ${message}
        
        Submitted from advancedplumbingkamloops.ca
      `
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}