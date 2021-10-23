import React from 'react'
import { Card, Button, Container, CardGroup } from 'react-bootstrap'
import Holiday from '../img/offers/Holiday-Deals.jpg';
import justIn from '../img/offers/Just-In.jpg';

function Offers() {
    return (
        <section id="offers">
            <Container fluid>

                <CardGroup>
                    <Card>
                        <Card.Img src={Holiday} />
                        <Card.ImgOverlay>
                            <Card.Body>
                                <Card.Title>Holiday Deals</Card.Title>
                                <Card.Text>
                                    <h1>Up to</h1>
                                </Card.Text>
                                <Card.Text>
                                    <h1>30% off</h1>
                                </Card.Text>
                                <Card.Text>Selected Smartphone Brands</Card.Text>
                                <Button>Shop</Button>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>

                    <Card>
                        <Card.Img src={justIn} />
                        <Card.ImgOverlay>
                            <Card.Body>
                                <Card.Title>Just In</Card.Title>
                                <Card.Text>
                                    <h1>Take Your</h1>
                                </Card.Text>
                                <Card.Text>
                                    <h1>Sound Anywhere</h1>
                                </Card.Text>
                                <Card.Text>Top Headphone Brands</Card.Text>
                                <Button>Shop</Button>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>

            </Container>
        </section>
    )
}

export default Offers
