import React from 'react'
import { Container, Card, CardGroup, Image } from 'react-bootstrap';
import Computers from '../img/category/Computers.jpg';
import Mobile from '../img/category/Mobile.jpg';
import Drones from '../img/category/Drones.jpg';
import Tablets from '../img/category/Tablets.jpg';
import Home from '../img/category/TV-Home-Cinema.jpg';
import Wearable from '../img/category/Wearable-Tech.jpg';
import Speakers from '../img/category/Speakers.jpg';
import Headphones from '../img/category/Headphones.jpg';

function Categories() {
    return (
        <section id="categories">
            <Container fluid>

                <h2>Shop By Category</h2>

                <div id="category">
                    <div id="computers">
                        <Image src={Computers} roundedCircle />
                        <h4>Computers</h4>
                    </div>

                    <div id="mobile">
                        <Image src={Mobile} roundedCircle />
                        <h4>Mobile</h4>
                    </div>

                    <div id="drones">
                        <Image src={Drones} roundedCircle />
                        <h4>Drones &...</h4>
                    </div>

                    <div id="tablets">
                        <Image src={Tablets} roundedCircle />
                        <h4>Tablets</h4>
                    </div>

                    <div id="home">
                        <Image src={Home} roundedCircle />
                        <h4>T.V & Home...</h4>
                    </div>

                    <div id="wearable">
                        <Image src={Wearable} roundedCircle />
                        <h4>Wearable Tech</h4>
                    </div>

                    <div id="speakers">
                        <Image src={Speakers} roundedCircle />
                        <h4>Speakers</h4>
                    </div>

                    <div id="headphones">
                        <Image src={Headphones} roundedCircle />
                        <h4>Headphones</h4>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Categories
