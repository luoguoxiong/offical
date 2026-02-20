import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, name, content } = req.body;
  console.log(email,name,content)
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.qq.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "wslyfs2010@gmail.com",
      subject: "收到一个新的客户邮件",
      html: `
        <p>name: ${name}</p>
        <p>email: ${email}</p>
        <p>content: ${content}</p>
      `,
    });

    res.status(200).json({ code: 200, message: "ok" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "邮件发送失败" });
  }
}