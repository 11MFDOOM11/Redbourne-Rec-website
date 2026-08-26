import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// The inbox that manages bookings — change this to whichever address
// should receive enquiries (can also be moved to an env var).
const BOOKINGS_INBOX = process.env.BOOKINGS_INBOX || "rrcpft@gmail.com";

// Must be an address on a domain you've verified with Resend.
const FROM_ADDRESS = process.env.RESEND_FROM_ADDRESS || "noreply@redbournleisure.co.uk";

interface BookingPayload {
    name: string;
    email: string;
    club?: string;
    activity: string;
    date: string;
    time: string;
    duration?: string;
    message?: string;
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
    try {
        const data = (await req.json()) as Partial<BookingPayload>;
        const { name, email, club, activity, date, time, duration, message } = data;

        // Basic server-side validation — never trust the client alone.
        if (!name || !email || !activity || !date || !time) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        const safe = {
            name: escapeHtml(name),
            email: escapeHtml(email),
            club: escapeHtml(club || "Not specified"),
            activity: escapeHtml(activity),
            date: escapeHtml(date),
            time: escapeHtml(time),
            duration: escapeHtml(duration || "Not specified"),
            message: escapeHtml(message || "—"),
        };

        await resend.emails.send({
            from: FROM_ADDRESS,
            to: BOOKINGS_INBOX,
            replyTo: safe.email,
            subject: `New booking enquiry: ${safe.activity} — ${safe.date} ${safe.time}`,
            html: `
        <h2>New Booking Enquiry</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Club / Association:</strong> ${safe.club}</p>
        <p><strong>Activity / Facility:</strong> ${safe.activity}</p>
        <p><strong>Requested Date:</strong> ${safe.date}</p>
        <p><strong>Requested Time:</strong> ${safe.time}</p>
        <p><strong>Session Length:</strong> ${safe.duration}</p>
        <p><strong>Message:</strong><br/>${safe.message.replace(/\n/g, "<br/>")}</p>
      `,
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Booking email error:", err);
        return NextResponse.json(
            { error: "Failed to send enquiry" },
            { status: 500 }
        );
    }
}