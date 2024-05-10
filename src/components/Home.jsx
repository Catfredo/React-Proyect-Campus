import React, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../stylesSheets/Home.css'
import SearchSection from "./SearchSection.jsx";

const Home = () => {
  const key = 'tFX05Yfh8aunby0zCen9PfYLl6o65Y76uUru9yNa';

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  //--
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickImage = (index) => {
    setSelectedImage(data[index]);
  };


  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=10&thumbs=true`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();

  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (<>
    <section className="welcome-section">
      <div className="welcome-section__wrapper container-md">
        <h1 className="title-spacecore">Space<span> core</span></h1>
        <p>A website that collects information such as images and information from Nasa.</p>
      </div>
      <img className="img-home" src="https://images.hdqwalls.com/download/3d-nebula-4k-aq-1440x900.jpg"
           alt="space-constelation"/>
    </section>
    <div className="line-section">
    <h2 className="title-home"> Astronomy Pictures of the Day</h2>
    </div>
    <section className=" container-md">
      <Carousel className="container-sm">
        {data.map((item, index) => (
          <Carousel.Item key={index} onClick={() => handleClickImage(index)}>
            <img
              src={item.url}
              alt="Nasa"
              className="d-block w-100 img-fluid object-fit-cover rounded-5 img-carusel"
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

    </section>

    <section className="section-card">
      <div className="image-details">
        {selectedImage && (
          <div className="img-card-container">
            <img src={selectedImage.url} alt={selectedImage.title}/>
            <h3 className="h3-card">{selectedImage.title}</h3>

          </div>
        )}
        {selectedImage && (
          <div className="parragraph-card">
            <p className="parragraph-card-text">{selectedImage.explanation}</p>
          </div>
        )}
      </div>
    </section>

    <section className="search-section">
      <SearchSection />
    </section>

  </>);
};

export default Home;
