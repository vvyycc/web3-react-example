import Image from 'next/image';
import Layout from '../components/layout/layout';
import { useState } from 'react';
export default function Mint() {
  const [description, setDescription] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateImage = async () => {
    setLoading(true);
    setError('');
    try {
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });
    const data = await response.json();
    if (response.ok) {
      setGeneratedImage(data.image);
    } else {
      setError(data.error || 'Failed to generate image Front');
      console.error(data.error);
    }
  } catch (error) {
    setError('Failed to generate image Front');
    console.error('Error generating image:', error);
  }
  setLoading(false);
  };

  const handleMintNFT = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/mint-nft', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: generatedImage }),
      });
      const data = await response.json();
      // Handle response (e.g., show transaction ID)
    } catch (error) {
      setError('Failed to mint NFT');
      console.error('Error minting NFT:', error);
    }
    setLoading(false);
  };
  return (
    <Layout>
    <div className="bg-red-900 text-gray-400 min-h-screen flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Create NFT with DALL-E</h1>
      <div className="flex flex-col items-center w-full max-w-4xl flex-grow">
        {generatedImage && (
          <div className="relative w-full max-w-lg h-64 mb-4 bg-gray-800 flex items-center justify-center">
            <Image
              className="object-cover object-center rounded"
              alt="Generated"
              src={generatedImage}
              layout="fill"
            />
          </div>
        )}
        {generatedImage && (
          <button
            className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg mb-4"
            onClick={handleMintNFT}
            disabled={loading}
          >
            {loading ? 'Minting...' : 'Mint NFT'}
          </button>
        )}
      </div>
      <div className="w-full max-w-4xl mb-4">
        <textarea
          className="w-full p-4 mb-4 border rounded-lg bg-gray-800 text-white"
          rows="4"
          placeholder="Describe the image you want to create..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-center">
          <button
            className="inline-flex text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg"
            onClick={handleGenerateImage}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Image'}
          </button>
        </div>
      </div>
    </div>

      </Layout>
  );
}