export default function handler(req, res) {
    console.log('OpenAI API Key:', process.env.OPENAI_API_KEY); // This should print the API key to the server console
    res.status(200).json({ key: process.env.OPENAI_API_KEY });
  }