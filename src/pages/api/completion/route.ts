import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'

export default async function POST(req: Request) {
    const { prompt } = await req.json()

    // Ask OpenAI for a streaming completion given the prompt
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        stream: true,
        temperature: 0.6,
        max_tokens: 500,
        prompt: `Mention three famous food items for a city with a brief description of each of the cuisine.
 
            City: Kolkata
            Foods: "Kathi Rolls: Savory street food consisting of skewer-roasted or grilled meat wrapped in a paratha, Phuchka: Tangy and crispy snack with hollow puris filled with a potato mixture and flavored water, Rosogolla: Bengali sweet made from cottage cheese, known for its soft texture and sweet flavor"
            City: Hanoi
            Foods: "Pho: Traditional Vietnamese noodle soup with flavorful broth, rice noodles, and sliced meat,
            Banh Mi: Fusion sandwich with crusty baguette, grilled meats, pickled vegetables, and fresh herbs,
            Bun Cha: Grilled pork patties served with vermicelli rice noodles, herbs, and a dipping sauce."
            City: ${prompt}
            Foods:`,
    })
    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response)
    // Respond with the stream
    return new StreamingTextResponse(stream)
}
