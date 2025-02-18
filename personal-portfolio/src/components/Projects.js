import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import BakeryImage from '../pictures/bakery.jpg';
import FishMarketImage from '../pictures/fishmarket.jpg';
import Magic5Image from '../pictures/magic5.jpg';

const Projects = () => { 
    return ( 
     <section className="projects">
     <h1 className="text-center mb-4" style={{color:'whitesmoke'}}>My Projects</h1>
     <div className="container-md">
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img 
              className="d-block w-100 img-fluid" 
              src={BakeryImage} 
              alt="Bakery Shop Project" 
            />
          </div>
          <Carousel.Caption>
            <h3 className="display-6 fs-3">Bakery Shop</h3>
            <p className="d-none d-md-block">I have made a simple bakery shop website using HTML, CSS, and JS.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img 
              className="d-block w-100 img-fluid" 
              src={FishMarketImage} 
              alt="Fish Market Project" 
            />
          </div>
          <Carousel.Caption>
            <h3 className="display-6 fs-3">Fish Market</h3>
            <p className="d-none d-md-block">I helped with the development of a Fish Market website.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image-container">
            <img 
              className="d-block w-100 img-fluid" 
              src={Magic5Image} 
              alt="Number Game Project" 
            />
          </div>
          <Carousel.Caption>
            <h3 className="display-6 fs-3">Number Combination Game</h3>
            <p className="d-none d-md-block">
              Developed a mobile game app wordle but with numbers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     </div>
   </section>
    ); 
 };

export default Projects;