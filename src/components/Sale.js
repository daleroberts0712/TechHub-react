import React from 'react'
import { Container, Card, CardGroup, Button } from 'react-bootstrap';
import Smartwatch from '../img/sale/Space-Moon-Smartwatch.jpg';
import Smartphone from '../img/sale/OVE-Smartphone.jpg';
import Laptop from '../img/sale/Pilates-touch-screen-laptop.jpg';
import Speaker from '../img/sale/Turn5-portable-speaker.jpg';
import Headset from '../img/sale/Journey-Glass-Xd.jpg';
import Camera from '../img/sale/H1C-Security-Camera.jpg';

function Sale() {
    return (
        <section id="onSale">

            <Container fluid>

                <h2>On Sale</h2>

                <CardGroup>

                    <Card>
                        <span className="badge">SALE</span>
                        <Card.Img src={Smartwatch} />
                        <Card.Body>
                            <Card.Text>
                                Space Moon Smartwatch With Charger
                            </Card.Text>
                            <Card.Text>
                                <del>$85.00</del> $70.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <span className="badge">SALE</span>
                        <Card.Img src={Smartphone} />
                        <Card.Body>
                            <Card.Text>
                                OVE Light Space 5G 128GB
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
                                Pilates 16" Touch Screen Laptop 24GB Memory
                            </Card.Text>
                            <Card.Text>
                                <del>$85.00</del> $70.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <span className="badge">SALE</span>
                        <Card.Img src={Speaker} />
                        <Card.Body>
                            <Card.Text>
                                Turn5 Portable Bluetooth Speaker
                            </Card.Text>
                            <Card.Text>
                                <del>$85.00</del> $70.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <span className="badge">SALE</span>
                        <Card.Img src={Headset} />
                        <Card.Body>
                            <Card.Text>
                                Journey Glass XD Virtual Reality Headset
                            </Card.Text>
                            <Card.Text>
                                <del>$85.00</del> $70.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <span className="badge">SALE</span>
                        <Card.Img src={Camera} />
                        <Card.Body>
                            <Card.Text>
                                H1C Indoor Wireless 1080p Network Security Camera
                            </Card.Text>
                            <Card.Text>
                                <del>$85.00</del> $70.00
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardGroup>

                <Button>View All</Button>

            </Container>
            
        </section>
    )
}

export default Sale
