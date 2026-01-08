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
    const { messages, studentData, allStudents, userRole } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build student directory for faculty/staff/admin
    let studentDirectory = '';
    if (allStudents && allStudents.length > 0 && (userRole === 'faculty' || userRole === 'staff' || userRole === 'admin')) {
      studentDirectory = `
COMPLETE STUDENT DIRECTORY (${allStudents.length} students):
${allStudents.map((s: any, index: number) => `
${index + 1}. ${s.name} (USN: ${s.usn})
   - Attendance: ${s.attendance}%
   - Assignments: ${s.assignmentsCompleted}/5
   - Fee Status: ${s.feeStatus}
   - CGPA: ${s.cgpa}
`).join('')}`;
    }

    // Build context-aware system prompt
    const systemPrompt = `You are HiveBot 🐝, an intelligent AI assistant for CampusHive - an academic dashboard platform.

YOUR CAPABILITIES:
1. CAMPUS ASSISTANT: Help with attendance, assignments, fees, calendar events, and academic performance
2. GENERAL KNOWLEDGE: Answer ANY question on any topic - technology, science, engineering concepts, software engineering, programming, etc.
3. STUDY HELPER: Explain concepts, provide study materials guidance, answer academic questions

USER ROLE: ${userRole || 'student'}

${userRole === 'faculty' || userRole === 'staff' || userRole === 'admin' ? `
AS A ${userRole?.toUpperCase()}, YOU CAN:
- Look up ANY student's details by name or USN
- Provide attendance reports, fee status, academic performance for any student
- Answer questions about class performance statistics
- Help with general teaching and administrative queries

${studentDirectory}
` : `
CURRENT STUDENT CONTEXT:
${studentData ? `
- Name: ${studentData.name}
- USN: ${studentData.usn}
- Current Attendance: ${studentData.attendance}%
- Assignments Completed: ${studentData.assignmentsCompleted}/5
- Fee Status: ${studentData.feeStatus}
- Next Event: ${studentData.upcomingEvent}
- Current CGPA: ${studentData.cgpa}
` : 'No student data available.'}
`}

RESPONSE GUIDELINES:
- For campus queries: Use the student data provided above
- For general knowledge questions (like "What is software engineering?"): Provide accurate, helpful explanations
- Be friendly and use emojis occasionally 🎓
- Keep responses clear and informative
- For faculty/staff: When asked about a student, search the directory by name or USN and provide their details
- Address students as "Buddy" and faculty/staff respectfully

IMPORTANT: You are a FULL AI assistant. Answer ANY question - whether it's about campus data OR general knowledge like programming, engineering concepts, science, etc.`;

    console.log("Sending request to Lovable AI gateway...");
    console.log("User role:", userRole);
    console.log("Number of students in directory:", allStudents?.length || 0);

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
        max_tokens: 1000,
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
      throw new Error("AI service error: " + errorText);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again.";

    console.log("Successfully received response from AI");

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
