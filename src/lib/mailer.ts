import nodemailer from "nodemailer";
import { mailerTemplate } from "./mailerTemplate";

export default async function sendConfirmationEmail(data: {name: string, email: string, enrollment: string, phone: string, department: string, event: string, teamMembers: { name: string; enrollment: string }[]}) {
   try {
     const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp.gmail.com",
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

        const emailContent = mailerTemplate(data.name, data.email, data.enrollment, data.phone, data.department, data.event, data.teamMembers)

        await transporter.sendMail({
            from:`Vihan 2026 <${process.env.EMAIL_USER}>`,
            to: data.email,
            subject: `Registration Confirmed - Vihaan 2026 | ${data.event}`,
            html: emailContent,
        });
   return {success: true}
   } catch (error: any) {
    console.error("Error sending Mail", error)
    return {success: false, error}
   }
}