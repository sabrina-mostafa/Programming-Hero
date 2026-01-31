import { betterAuth, User } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

const verificationEmailTemplate = (verificationUrl: string, user: User) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Verify Email</title>
</head>
<body style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
  <div style="max-width:600px; margin:auto; background:#ffffff; padding:30px; border-radius:8px;">
    <h2 style="color:#2563eb;">Verify your email</h2>

    <p>Hi ${user.name ?? "there"},</p>

    <p>
      Thank you for registering with <strong>Prisma Blog</strong>.
      Please verify your email by clicking the button below.
    </p>

    <div style="text-align:center; margin:30px 0;">
      <a href="${verificationUrl}"
         style="
           background:#2563eb;
           color:#ffffff;
           padding:12px 24px;
           text-decoration:none;
           border-radius:6px;
           font-weight:bold;
           display:inline-block;
         ">
        Verify Email
      </a>
    </div>

    <p>If the button doesn’t work, copy this link:</p>
    <p style="word-break:break-all; color:#2563eb;">
      ${verificationUrl}
    </p>

    <p>If you didn’t create this account, you can ignore this email.</p>

    <p style="margin-top:30px;">
      Regards,<br />
      <strong>Prisma Blog Team</strong>
    </p>
  </div>
</body>
</html>
`;

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [process.env.APP_URL!],

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        required: false,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,

    sendVerificationEmail: async ({ user, url, token }, request) => {
      try {
        console.log("********** Verification email send!");

        console.log({ user, url, token });
        const verificationUrl = `${process.env.APP_URL}/verify-email?token=${token}`;

        const info = await transporter.sendMail({
          from: '"prisma Blog" <prismablog@test.email>',
          to: user.email,
          subject: "Verify your email... ✔",
          html: verificationEmailTemplate(verificationUrl, user), // HTML version of the message
        });

        console.log("Message sent:", info.messageId);
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },

  // for google login
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

      accessType: "offline",
      prompt: "select_account consent"
    },
  },
});
