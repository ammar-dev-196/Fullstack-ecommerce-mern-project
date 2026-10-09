import { sendEmail } from "../utils/emailUtil.js";

const sendingEmail = async ({ sendTo, subject, text = "", html = "" }) => {
  const result = await sendEmail({ to: sendTo, subject, text, html });

  if (!result.success) {
    throw new Error(`Failed to send email: ${result.error}`);
  }

  return true;
};

export default sendingEmail;
