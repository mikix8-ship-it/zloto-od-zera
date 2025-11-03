import { Resend } from "resend";
import { SENDER_EMAIL, SITE_URL, PRODUCT_NAME, AUTHOR_NAME } from "./constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAccessEmail(
  to: string,
  customerName?: string,
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn("[Email] RESEND_API_KEY not set, skipping email");
      return { success: false, error: "Email service not configured" };
    }

    const htmlTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>$${PRODUCT_NAME}</title>
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f5f5f5; }
      .container { max-width: 600px; margin: 0 auto; background-color: white; padding: 40px; border-radius: 8px; }
      .header { text-align: center; margin-bottom: 30px; }
      .header h1 { color: #0B0B0B; font-size: 24px; margin: 0; }
      .content { margin: 30px 0; line-height: 1.6; color: #333; }
      .button { display: inline-block; background: linear-gradient(135deg, #F2D16B 0%, #B8860B 100%); color: black; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
      .footer { border-top: 1px solid #e5e7eb; margin-top: 30px; padding-top: 20px; font-size: 12px; color: #6B7280; text-align: center; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>$${PRODUCT_NAME}</h1>
        <p>Twój e-book czeka na pobranie</p>
      </div>
      <div class="content">
        <p>Cześć $${customerName ? customerName : "Przyjacielu"}! 👋</p>
        <p>Dziękuję za zakup <strong>$${PRODUCT_NAME}</strong>! 🎉</p>
        <p>Twój e-book jest dostępny. Sprawdź email od nas z linkiem do pobrania.</p>
        <p>Powodzenia na drodze do inwestowania! 🏆</p>
        <p>Z poważaniem,<br/>$${AUTHOR_NAME}</p>
      </div>
      <div class="footer">
        <p>© $${new Date().getFullYear()} $${PRODUCT_NAME}. Wszelkie prawa zastrzeżone.</p>
      </div>
    </div>
  </body>
</html>
    `;

    const result = await resend.emails.send({
      from: `$${PRODUCT_NAME} <$${SENDER_EMAIL}>`,
      to: to,
      subject: `$${PRODUCT_NAME} — Twój e-book do pobrania`,
      html: htmlTemplate,
      reply_to: "adam@zlotoodzera.com",
    });

    if (result.error) {
      console.error("[Email] Send error:", result.error);
      return { success: false, error: result.error.message };
    }

    console.log("[Email] Sent successfully:", result.data?.id);
    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error("[Email] Exception:", error);
    return { success: false, error: "Failed to send email" };
  }
}

