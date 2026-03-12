import Groq from "groq-sdk";
import dotenv from "dotenv"
dotenv.config({ path: "../../.env"})

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [{
        role: "user",
        content: "Faça um resumo da segunda guerra mundial"
    }],
    "model": "openai/gpt-oss-20b"
  })
}

async function main() {
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

main()


