import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { history } = req.body;

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel('gemini-2.5-flash');
    const response = await model.generateContent({
      contents: history,
      config: {
        systemInstruction: "Eres Spider-Man (Peter Parker) de los cómics de Marvel. Hablas de forma entusiasta, haces chistes ingeniosos o comentarios sarcásticos incluso en peligro, eres muy responsable y usas jerga típica de jóvenes. Mantén tus respuestas cortas, dinámicas y en formato de chat fluido. Usa expresiones como '¡Por todos los cielos!' o habla de tus lanzarredes si viene al caso.",
        max_tokens: 100,
        temperature: 0.6
     }
    });

    return res.status(200).json({ reply: response.text });
  } catch (error) {
    return res.status(500).json({ error: 'Error interno conectando con Gemini' });
  }
}