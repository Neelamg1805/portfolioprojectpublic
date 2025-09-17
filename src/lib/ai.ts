import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || 'your-api-key-here',
  dangerouslyAllowBrowser: true, // Only for demo purposes
});

export const generateBio = async (skills: string[], experience: string) => {
  try {
    const prompt = `
      Write a professional bio for a portfolio website. The person has the following skills: ${skills.join(", ")}.
      Their experience: ${experience}.
      The bio should be concise (around 100-150 words) and written in first person.
    `;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message.content || "";
  } catch (error) {
    console.error("Error generating bio:", error);
    throw new Error("Failed to generate bio");
  }
};
