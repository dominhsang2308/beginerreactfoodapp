import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function SliderComponent() {
    return (
      <Carousel touch>
        <Carousel.Item>
          <img
            style={{width:'100%'}}
            className="d-block w-100"
            src="https://as2.ftcdn.net/v2/jpg/03/51/61/91/1000_F_351619173_3jsroD0cAiby3klcudtgg1bhzyQeAZT4.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Food Recommend</h3>
            <p>I don't know what i'm doing.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{width:'100%'}}
            className="d-block w-100"
            src="https://as2.ftcdn.net/v2/jpg/03/51/61/91/1000_F_351619173_3jsroD0cAiby3klcudtgg1bhzyQeAZT4.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Food Recommend</h3>
            <p>I don't know what i'm doing.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{width:'100%'}}
            className="d-block w-100"
            src="https://as2.ftcdn.net/v2/jpg/03/51/61/91/1000_F_351619173_3jsroD0cAiby3klcudtgg1bhzyQeAZT4.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Food Recommend</h3>
            <p>
            I don't know what i'm doing
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default SliderComponent;