import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
const placeholderImageUrl = "https://via.placeholder.com/512x512.png"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ error: 'Description is required' });
  }

  try {
    const response = await openai.images.generate({
      prompt: description,
      n: 1,
      size: '512x512',
    });

    const imageUrl = response.data.data[0].url;
    res.status(200).json({ image: imageUrl });
  } catch (error) {
    res.status(200).json({ image: placeholderImageUrl });
    // console.error('Error generating image:', error.response ? error.response.data : error.message);
    // if (error.response && error.response.status === 400 ) {
    //   res.status(200).json({ image: placeholderImageUrl });
    // } else {
    //   res.status(500).json({ error: 'Failed to generate image' });
    // }
  }
}