import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/random?count=10&client_id=O7-xcpW6nRhMMsx3meSpmzsR2NEOsM8Rn0toNL5DGs0'
        );
        setImages(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Image Search App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="image-container">
          {images.map((image) => (
            <div className="image-card" key={image.id}>
              <img src={image.urls.regular} alt={image.alt_description} />
              <div className="image-details">
                <p>{image.alt_description}</p>
                <a
                  href={image.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Unsplash
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
