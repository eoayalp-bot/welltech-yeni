import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen zorunlu alanları doldurunuz.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false 
      }
    });

    const mailOptions = {
      from: `"${name} | Welltech Form" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `🚨 Yeni Proje Teklif Talebi: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; rounded: 8px;">
          <h2 style="color: #E35205; border-b: 2px solid #005284; padding-bottom: 10px;">Welltech® B2B Yeni Teklif Talebi</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 150px; background: #f9f9f9; border-bottom: 1px solid #eee;">Ad Soyad:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; background: #f9f9f9; border-bottom: 1px solid #eee;">Firma Adı:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${company || 'Belirtilmedi'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; background: #f9f9f9; border-bottom: 1px solid #eee;">E-Posta:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; background: #f9f9f9; border-bottom: 1px solid #eee;">Telefon:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone || 'Belirtilmedi'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; background: #f9f9f9; border-bottom: 1px solid #eee;">Ürün Grubu:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #005284;">${subject}</td>
            </tr>
          </table>
          <h3 style="color: #005284; margin-top: 20px;">Prose / Proje Detayları:</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</div>
          <p style="font-size: 11px; color: #999; margin-top: 25px; text-align: center;">Bu mail Welltech® İletişim Portalı üzerinden otomatik olarak oluşturulmuştur.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Teklif talebiniz başarıyla iletildi.' }, { status: 200 });
  } catch (error: any) {
    console.error('Mail Gönderim Hatası:', error);
    return NextResponse.json({ error: 'Mail gönderilirken sunucu hatası oluştu.' }, { status: 500 });
  }
}