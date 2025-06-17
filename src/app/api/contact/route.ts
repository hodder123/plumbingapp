import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, postalCode, message, captchaToken } = body;

  if (!captchaToken) {
    return NextResponse.json({ success: false, message: 'No captcha token' }, { status: 400 });
  }

  // Verify captcha
  const captchaVerifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=YOUR_SECRET_KEY&response=${captchaToken}`
  });

  const captchaData = await captchaVerifyRes.json();

  if (!captchaData.success) {
    return NextResponse.json({ success: false, message: 'Captcha verification failed' }, { status: 400 });
  }

  // Send email
  const transporter = nodemailer.createTransport({
    host: 'smtp.yourprovider.com', // e.g. smtp.gmail.com (if you use Gmail, you'd need OAuth2)
    port: 587,
    secure: false,
    auth: {
      user: '',
      pass: 'yourpassword'
    }
  });

  await transporter.sendMail({
    from: '"Website Contact" <your@email.com>',
    to: 'destination@email.com',
    subject: 'New Contact Request',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Postal Code: ${postalCode}
      Message: ${message}
    `
  });

  return NextResponse.json({ success: true });
}
