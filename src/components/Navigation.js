import React, { useState } from 'react';
import { Button, Container, Navbar, Nav, Badge, Form, NavbarBrand, InputGroup, ListGroup, Offcanvas } from 'react-bootstrap'

function Navigation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section id="navbar">
            <Navbar id="one">
                <Container fluid>
                    <Nav>
                        <Nav.Link><i className="far fa-box"></i> Free Shipping for over 50$</Nav.Link>
                    </Nav>
                    <Nav id="right">
                        <Nav.Link href="#" id="about">About</Nav.Link>
                        <Nav.Link href="#" id="contact">Contact</Nav.Link>
                        <Nav.Link href="#" id="help-center">Help Center</Nav.Link>
                        <Nav.Link>Call Us <a href="#">123-456-7890</a></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Navbar id="two">
                <Container fluid>
                    <Nav>
                        <Navbar.Brand>TechHub</Navbar.Brand>
                        <InputGroup>
                            <Form.Control type="text" placeholder=" Search..." />
                            <Button><i className="far fa-search"></i></Button>
                        </InputGroup>
                    </Nav>

                    <Nav id="right">
                        <Nav.Link id="login"><i class="fas fa-user-circle"></i> Login</Nav.Link>
                        <Nav.Link id="fav"><i className="far fa-heart"></i> Favourites</Nav.Link>
                        <Nav.Link id="cart"><i className="far fa-shopping-cart"></i> <span className="badge">0</span></Nav.Link>
                        <Nav.Link id="bars" onClick={handleShow}><i class="fas fa-bars fa-2x"></i></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Navbar id="three">
                <Container fluid>
                    <Nav id="all">
                        <Nav.Link>Shop All</Nav.Link>
                        <Nav.Link>Computers</Nav.Link>
                        <Nav.Link>Tables</Nav.Link>
                        <Nav.Link>Drones & Cameras</Nav.Link>
                        <Nav.Link>Audio</Nav.Link>
                        <Nav.Link>Mobile</Nav.Link>
                        <Nav.Link>T.V & Home Cinema</Nav.Link>
                        <Nav.Link>Wearable Tech</Nav.Link>
                        <Nav.Link>Sale</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <section id="menu">

                <Offcanvas menuVarient="dark" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>TechHub</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <Container>

                    <ListGroup variant="flush">
                        <ListGroup.Item><i class="fas fa-user-circle"></i> Login <i className="far fa-heart"></i> Favourites <span id="menuCart"><i className="far fa-shopping-cart"></i> Cart </span></ListGroup.Item>
                        <ListGroup.Item>Shop All</ListGroup.Item>
                        <ListGroup.Item>Computers</ListGroup.Item>
                        <ListGroup.Item>Tables</ListGroup.Item>
                        <ListGroup.Item>Drones & Cameras</ListGroup.Item>
                        <ListGroup.Item>Audio</ListGroup.Item>
                        <ListGroup.Item>Mobile</ListGroup.Item>
                        <ListGroup.Item>T.V & Home Cinema</ListGroup.Item>
                        <ListGroup.Item>Wearable Tech</ListGroup.Item>
                        <ListGroup.Item>Sale</ListGroup.Item>
                    </ListGroup>
                    
                    </Container>
                </Offcanvas.Body>
                    <ListGroup id="footer">
                        <ListGroup.Item href="#">About Contact Help Center</ListGroup.Item>
                    </ListGroup>
                </Offcanvas>
                
            </section>

        </section>
    )
}

export default Navigation
