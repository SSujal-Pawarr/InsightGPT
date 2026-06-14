import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.responses.create({
    model: 'gpt-4o-mini',
    input:'Joke related to Computer Science',
});

console.log(response.output_text);