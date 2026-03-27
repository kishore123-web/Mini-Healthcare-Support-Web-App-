export async function callGeminiApi(systemPrompt, userMessage) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing Gemini API Key (VITE_GEMINI_API_KEY). Get one for free at https://aistudio.google.com/");
  }
  
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{
        role: "user",
        parts: [{ text: `${systemPrompt}\n\nUser Message: ${userMessage}` }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API Error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  if (data.candidates && data.candidates[0] && data.candidates[0].content) {
    return data.candidates[0].content.parts[0].text;
  }
  throw new Error("Unexpected response format from Gemini API");
}

export async function callGroqApi(systemPrompt, userMessages) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  if (!apiKey) {
    throw new Error("Missing Groq API Key (VITE_GROQ_API_KEY)");
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        ...userMessages
      ],
      temperature: 0.7,
      max_tokens: 1024
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Groq API Error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

export async function generateCaseSummary(formData) {
  const systemPrompt = `You are a healthcare case coordinator at Jarurat Care NGO. Based on the following patient information, generate a short, structured case summary in JSON format with these fields: case_id (generate a unique one like JC-2026-XXXX), priority_level, summary (2 sentences about the patient's situation), recommended_next_steps (array of 2-3 action items), estimated_response_time. Be compassionate and professional. Return ONLY valid JSON, no explanation.`;
  
  const userMessage = `Patient data: ${JSON.stringify(formData, null, 2)}`;
  
  // Use Gemini for summaries (better JSON following)
  return await callGeminiApi(systemPrompt, userMessage).then(async responseText => {
    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) return JSON.parse(jsonMatch[0]);
      return JSON.parse(responseText);
    } catch (error) {
       console.error("Failed to parse AI response as JSON", error);
       throw new Error("Invalid response format from AI");
    }
  });
}

export async function getChatResponse(messages) {
  const systemPrompt = "You are CareBot AI, a helpful healthcare assistant for the Jarurat Care NGO. You help patients find medical resources, explain how to volunteer, and provide general healthcare information. Be professional, compassionate, and precise.";
  
  // For chat, Groq is much faster for a "live" feel
  return await callGroqApi(systemPrompt, messages);
}
