import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from '../img/Camera-Drones.jpg';

function Specials() {
    return (
        <>
        <section id="specials">

                <div className="d-flex">

                    <div id="content">
                        <span className="badge">Today's Special</span>
                        <h1>30% OFF</h1>
                        <h3>on professional camera drones</h3>
                        <p>Limited quantities. See product detail pages for availability</p>
                        <Button>Shop</Button>
                    </div>

                    <div id="img"><img src={Image} alt="Drones" /></div>

                </div>
        </section>

        <Card id="card">
                    <Card.Img src={Image} alt="Drones" />
                    <Card.ImgOverlay>
                        <Card.Body id="card-content">
                            <span className="badge">Today's Special</span>
                            <Card.Title><h1>30% OFF</h1></Card.Title>
                            <Card.Text>
                                <h3>on professional camera drones</h3>
                            </Card.Text>
                            <Card.Text>
                                <p>Limited quantities. See product detail pages for availability</p>
                            </Card.Text>
                            <Button>Shop</Button>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
        </>
    )
}

export default Specials
