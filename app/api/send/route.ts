import { Resend } from 'resend';


export async function POST(req: Request) {
    const { name, email, phone, message } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailTo = process.env.EMAIL_TO;
    if (!emailTo) {
        return Response.json({ error: 'EMAIL_TO environment variable is not set.' }, { status: 500 });
    }
    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: [emailTo],
            subject: 'New Submission from Contact From',
            html: `
        <h2>New Lead Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}