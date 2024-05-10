import React, {useState} from 'react';
import '../stylesSheets/SearchSection.css';

const SearchSection = () => {
  const [choice, setChoice] = useState('');
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  const getImagesByDate = () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=kBma1GvOcRws3yF58vrbYGNjoQJmHd1NrR6JaE9b&date=${choice}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setImageData(data);
        setError(null);
      })
      .catch(err => {
        setError(`Error: ${err}`); // Ajuste en la cadena de texto
      });
  };

  return (
    <>
      <div className="text-center">
        <div className="grid-center">
          <h2 className="text-h2">Search Image by date</h2>
          <div className="input-btn-group">
            <input type="date" value={choice} onChange={handleChange}/>
            <button onClick={getImagesByDate} className="btn-search">Get image</button>
          </div>
        </div>
      </div>

        {error && <p>{error}</p>}

        {imageData && (
          <div className="search-img-container">
            <div className="img-h2-container">
              <h2>{imageData.title}</h2>
              <img src={imageData.hdurl} alt={imageData.title}/>
            </div>
            <div className="img-text-search">
            <p>{imageData.explanation}</p>
            </div>
          </div>
        )}

    </>
  );
};

export default SearchSection;
