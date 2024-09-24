import Carousel from 'react-bootstrap/Carousel';
import Picframe from './picframe';
import s1 from './images/slider.webp'
import s2 from './images/Slider2.jpg'
import s3 from './images/Slider3.jpeg'
import s4 from './images/Slider4.jpg'



function Sliders() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <Picframe imageUrl = {s1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Picframe imageUrl = {s2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Picframe imageUrl = {s3} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Picframe imageUrl = {s4} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;    