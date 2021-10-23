import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from '../img/Best-Price.jpg';

function Price() {
    return (
        <>

        <section id="bestPrice">

                <div className="d-flex" id="best">
                    <div id="img"><img src={Image} alt="Best Price" /></div>

                    <div id="content">
                        <h1>Save up to $150</h1>
                        <h2>on selected laptop & tablets brands</h2>
                        <p>Terms and conditions apply</p>
                        <Button>Shop</Button>
                    </div>
                </div>

                <Card id="card">
                    <Card.Img src={Image} alt="Best Price" />
                    <Card.ImgOverlay>
                        <Card.Body id="card-content">
                            <Card.Title><h1>Save up to $150</h1></Card.Title>
                            <Card.Text>
                                <h2>on selected laptop & tablets brands</h2>
                            </Card.Text>
                            <Card.Text>
                                <p>Terms and conditions apply</p>
                            </Card.Text>
                            <Button>Shop</Button>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>


        </section>

        </>
    )
}

export default Price
