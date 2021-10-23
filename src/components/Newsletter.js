import React from 'react'
import { Container, Form, FormControl, FormLabel, Button } from 'react-bootstrap'

function Newsletter() {
    return (
        <section id="newsletter">

            <Container fluid>
                <div id="header">
                    <h2>Newsletter</h2>
                    <p>Sign up to receive updates on new arrivals and special offers</p>
                </div>
                <Form>
                    <FormLabel>Email *</FormLabel>
                    <div className="d-flex">
                    <Form.Control type="text" placeholder="Your Email Here" />
                    <Button>Subscribe</Button>
                    </div>
                </Form>
            </Container>
            
        </section>
    )
}

export default Newsletter
