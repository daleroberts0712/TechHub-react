import React from 'react'
import { Card, CardGroup, Container, Button, Badge } from 'react-bootstrap'
import Fitboot from '../img/sellers/Fitboot.jpg'
import Laptop from '../img/sellers/JP-gaming-laptop.jpg'
import Drone from '../img/sellers/HKI-Drone.jpg'
import Smartphone from '../img/sellers/Z-Pixel-Max.jpg'
import Earbuds from '../img/sellers/In-Ear-Earbuds.jpg'
import Headset from '../img/sellers/Safay-VR-headset.jpg'

function Sellers() {
    return (
        <section id="sellers">
            <Container fluid>

                <h2>Best Sellers</h2>

                <CardGroup>

                    <Card>
                        <span className="badge">SALE</span>
                        <Card.Img src={Fitboot} />
                        <Card.Body>
                            <Card.Text>
                                Fitboot Inspire Fitness Tracker With Heart Rate Tracking
                            </Card.Text>
                            <Card.Text>
                                <del>$85.00</del> $70.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <span className="badge">SALE</span>
                        <Card.Img src={Laptop} />
                        <Card.Body>
                            <Card.Text>
                                JP Gaming Laptop 15.6" Laptop 256GB
                            </Card.Text>
                            <Card.Text>
                                <del>$85.00</del> $70.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img src={Drone} />
                        <Card.Body>
                            <Card.Text>
                                HKI Tech Quadcopter Drone With 360 Camera & Controller
                            </Card.Text>
                            <Card.Text>
                                $85.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <span className="badge">SALE</span>
                        <Card.Img src={Smartphone} />
                        <Card.Body>
                            <Card.Text>
                                Smartphone Z Pixel Max 128GB Unlocked
                            </Card.Text>
                            <Card.Text>
                                <del>$85.00</del> $70.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <span className="badge">SALE</span>
                        <Card.Img src={Earbuds} />
                        <Card.Body>
                            <Card.Text>
                                In-Ear Noise Cancelling & Isolating Wireless Earbuds
                            </Card.Text>
                            <Card.Text>
                                <del>$85.00</del> $70.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img src={Headset} />
                        <Card.Body>
                            <Card.Text>
                                Safay GEN 2 256GB VR headset With Touch Controllers
                            </Card.Text>
                            <Card.Text>
                                $85.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardGroup>

                <Button>View All</Button>

            </Container>
        </section>
    )
}

export default Sellers
