import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, studentData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build context-aware system prompt
    const systemPrompt = `You are HiveBot 🐝, the smart virtual assistant for CampusHive - an academic dashboard platform for VTU ECE 6th Semester students.

Your role is to help students with their academic queries by providing personalized information based on their data.

STUDENT CONTEXT:
${studentData ? `
- Name: ${studentData.name}
- USN: ${studentData.usn}
- Current Attendance: ${studentData.attendance}%
- Assignments Completed: ${studentData.assignmentsCompleted}/5
- Fee Status: ${studentData.feeStatus}
- Next Event: ${studentData.upcomingEvent}
- Current CGPA: ${studentData.cgpa}
- Semester SGPAs: 
  - Sem 1: ${studentData.sgpa.sem1}
  - Sem 2: ${studentData.sgpa.sem2}
  - Sem 3: ${studentData.sgpa.sem3}
  - Sem 4: ${studentData.sgpa.sem4}
  - Sem 5: ${studentData.sgpa.sem5}
  - Sem 6: ${studentData.sgpa.sem6}
` : 'No student data available - user not logged in or data not found.'}

CAPABILITIES:
- Answer questions about attendance, assignments, fees, calendar events, and academic performance
- Provide personalized insights based on the student's data
- Guide navigation to different sections of the website
- Offer study tips and academic guidance
- Respond in a friendly, helpful, and encouraging manner

GUIDELINES:
- Always use the student's actual data when answering questions
- Be encouraging about their academic progress
- If attendance is below 75%, gently remind them to improve
- If CGPA is above 8.5, congratulate them on excellent performance
- Provide specific, actionable advice
- Keep responses concise but informative
- Use emojis occasionally to be friendly but remain professional

When you don't have specific information, politely guide the user to the appropriate section of the website.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: "Rate limit exceeded. Please try again in a moment." 
          }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: "Service temporarily unavailable. Please try again later." 
          }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI service error");
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ reply }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "An error occurred. Please try again." 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
