
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  fullName: string;
  neetScore: string;
  email: string;
  mobile: string;
  comments: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    const emailContent = `
      <h2>New Callback Request</h2>
      <hr/>
      <p><strong>Name:</strong> ${formData.fullName}</p>
      <p><strong>NEET Score:</strong> ${formData.neetScore}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Mobile:</strong> ${formData.mobile}</p>
      <p><strong>Comments:</strong> ${formData.comments || "No comments provided"}</p>
      <hr/>
      <p><em>From: AdmissionHands Website</em></p>
    `;
    
    console.log("Attempting to send email with Resend...");
    
    const emailResponse = await resend.emails.send({
      from: "AdmissionHands <onboarding@resend.dev>",
      to: ["admissionhandss@gmail.com"],
      subject: "New Callback Request - AdmissionHands",
      html: emailContent,
      reply_to: formData.email
    });

    console.log("Email sending response:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { 
        status: 500, 
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
