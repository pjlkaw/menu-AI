import "dotenv/config"
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY})

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    message: [{
        content: "Faça um resumo da primeira guerra mundial"
    }]
  })
}

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

main()


