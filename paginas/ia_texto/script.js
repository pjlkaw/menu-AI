
import express from 'express';
import Groq from "groq-sdk"; // AI
import dotenv from "dotenv"; //Key no .env
dotenv.config({ path: "../../.env"})

const app = express()
app.use(express.json())

//API KEY do .env
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

//Solicitação
async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [{
        role: "user",
        content: mensagem
    }],
    "model": "openai/gpt-oss-20b"
  })
}

//Resposta
app.post('/api/data', async (req,res)=>{
  try{
    const { mensagem } = req.body
    const chatCompletion = await getGroqChatCompletion();
    const resposta = chatCompletion.choices[0]?.message?.content || "";
    res.json({ resposta });
    console.log( resposta );
  }
  catch (error){
    console.log('não é possivel realizar');
    res.status(500).json({erro: error.message});
  }
})
app.listen('3000', () => { console.log('Servidor rodando na porta 3000')});



