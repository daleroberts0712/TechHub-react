import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from '../img/Help-Center.jpg';

function Help() {
    return (

        <>
        <section id="help">

            <div className="d-flex">

                <div id="content">
                    <h1>Need Help? Check</h1>
                    <h1>Out Our Help Center</h1>
                    <p>For assistance on anyone of our products</p>
                    <Button>Go to Help Center</Button>
                </div>

                <div id="img"><img src={Image} alt="Help Center" /></div>

            </div>
            
        </section>

        <Card id="help-card">
                    <Card.Img src={Image} alt="Help Center" />
                    <Card.ImgOverlay>
                        <Card.Body id="card-content">
                            <Card.Title><h1>Need Help? Check</h1></Card.Title>
                            <Card.Text>
                                <h1>Out Our Help Center</h1>
                            </Card.Text>
                            <Card.Text>
                                <p>For assistance on anyone of our products</p>
                            </Card.Text>
                            <Button>Go to Help Center</Button>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>

        </>
    )
}

export default Help
