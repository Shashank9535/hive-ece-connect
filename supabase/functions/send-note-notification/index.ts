import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NoteNotificationRequest {
  subjectName: string;
  subjectCode: string;
  noteTitle: string;
  uploadedBy: string;
  recipientEmail: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { subjectName, subjectCode, noteTitle, uploadedBy, recipientEmail }: NoteNotificationRequest = await req.json();

    console.log("Sending note notification email to:", recipientEmail);
    console.log("Note details:", { subjectName, subjectCode, noteTitle, uploadedBy });

    const emailResponse = await resend.emails.send({
      from: "HiveMind Notes <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `📚 New Notes Added: ${noteTitle}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; }
            .content { padding: 30px; }
            .note-card { background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 4px; }
            .note-title { color: #333; font-size: 18px; font-weight: bold; margin-bottom: 10px; }
            .note-details { color: #666; font-size: 14px; line-height: 1.6; }
            .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 12px; }
            .emoji { font-size: 48px; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="emoji">📚</div>
              <h1>New Course Notes Available!</h1>
            </div>
            <div class="content">
              <p>Hey Buddy! 👋</p>
              <p>Great news! New study materials have been uploaded for your course.</p>
              
              <div class="note-card">
                <div class="note-title">${noteTitle}</div>
                <div class="note-details">
                  <strong>Subject:</strong> ${subjectName}<br>
                  <strong>Code:</strong> ${subjectCode}<br>
                  <strong>Uploaded by:</strong> ${uploadedBy}<br>
                  <strong>Date:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>
              
              <p>Log in to HiveMind to download and start studying! 📖</p>
              <p>Happy Learning! 🎓</p>
            </div>
            <div class="footer">
              <p>This email was sent by HiveMind Campus Portal</p>
              <p>VTU ECE 6th Semester - Your Academic Companion</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending note notification:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
