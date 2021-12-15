import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import breakfast from '../../Images/breakfast1.jpg';
import launch from '../../Images/lanch1.jpg';
import dinner from '../../Images/dinner1.jpg';

const Banner = () => {
    return (
        <>
          
            <Carousel className="slideImage">
  <Carousel.Item>
    <img
      className="d-block img-fluid w-100"
      src={breakfast}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="fw-bolder text-warning fs-1">Breakfast</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={launch}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className="fw-bolder  text-primary fs-1">Launch</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={dinner}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className="fw-bolder text-info fs-1">Dinner</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;