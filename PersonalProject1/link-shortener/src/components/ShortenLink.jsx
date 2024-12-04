import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ShortenLink() {
  const [url, setUrl] = useState('');  // State to hold the user's URL input
  const [error, setError] = useState(''); // State for handling errors
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Clear any previous errors

    try {
      // Send the URL to Rebrandly's API
      const response = await axios.post(
        'https://api.rebrandly.com/v1/links',
        {
          destination: url,  // The long URL you want to shorten
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'apikey': 'aec6a8ea7ace4ce4a15ae9b2a9fe2dce',  // Replace with your Rebrandly API key
          },
        }
      );

      const shortUrl = response.data.shortUrl;

      // Redirect to LinkResult with the shortened link
      navigate('/result', { state: { shortUrl } });
    } catch (error) {
      console.error('Error shortening URL', error);
      setError('Failed to shorten the URL. Please try again.');
    }
  };

  return (
    <div>
      <h2>Shorten Your Link</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="Enter URL to shorten" 
          required 
        />
        <button type="submit">Shorten URL</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default ShortenLink;
