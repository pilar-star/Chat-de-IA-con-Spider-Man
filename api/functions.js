import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { history } = req.body;

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
        systemInstruction: "Eres Spider-Man (Peter Parker) de los cómics de Marvel. Hablas de forma entusiasta, haces chistes ingeniosos o comentarios sarcásticos incluso en peligro, eres muy responsable y usas jerga típica de jóvenes. Mantén tus respuestas cortas, dinámicas y en formato de chat fluido. Usa expresiones como '¡Por todos los cielos!' o habla de tus lanzarredes si viene al caso.",
    });

    const generationConfig = {
      maxOutputTokens: 100,
      temperature: 0.6,
    };

    const result = await model.generateContent({
      contents: history,
      generationConfig: generationConfig
    });

    const replyText = result.response.text();

    return res.status(200).json({ reply: replyText });
  } catch (error) {
    console.error("Error de Gemini:", error);
    return res.status(500).json({ error: 'Error interno conectando con Gemini', detalle: error.message });
  }
}