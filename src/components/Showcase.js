import React from 'react'
import { Badge, Button, Carousel } from 'react-bootstrap';
import Slide1 from '../img/showcase/Slide1.jpg';
import Slide2 from '../img/showcase/Slide2.jpg';
import Slide3 from '../img/showcase/Slide3.jpg';

function Showcase() {
    return (
        <section id="showcase">

            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src={Slide1} alt="Slide1" />

                    <Carousel.Caption>
                        <span className="badge">Best Prices</span>
                        <h1>Incredible Prices <br/> on Wearables</h1>
                        <p>Get more for less on selected brands.</p>
                        <Button>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={Slide2} alt="Slide2" />

                    <Carousel.Caption>
                        <span className="badge">Best Prices</span>
                        <h1>Incredible Prices <br/> on Mobile Devices</h1>
                        <p>Get more for less on selected brands.</p>
                        <Button>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={Slide3} alt="Slide3" />

                    <Carousel.Caption>
                        <span className="badge">Best Prices</span>
                        <h1>Incredible Prices <br/> on Laptop & PC's</h1>
                        <p>Get more for less on selected brands.</p>
                        <Button>Shop Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </section>
    )
}

export default Showcase
