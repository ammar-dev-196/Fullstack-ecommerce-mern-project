import nodemailer from "nodemailer";

/**
 * Reusable function to send emails
 * @param {Object} options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject line
 * @param {string} [options.text] - Plain text body
 * @param {string} [options.html] - HTML body (optional)
 */
export const sendEmail = async ({ to, subject, text = "", html = "" }) => {
  try {
    // 1. Create a transporter using your email service provider
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.EMAIL_PASS, // Your app-specific password
      },
    });

    // 2. Define the email options
    const mailOptions = {
      from: `"Ecommerce App" <${process.env.EMAIL}>`,
      to,
      subject,
      text,
      html, // Send HTML if provided, otherwise falls back to text
    };

    // 3. Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log(`Email sent successfully: ${info.messageId}`);

    // return info;
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};
