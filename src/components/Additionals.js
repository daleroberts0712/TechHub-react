import React from 'react'
import { Container } from 'react-bootstrap'

function Additionals() {
    return (
        <section id="additionals">

            <Container>

                <div id="links">

                    <div id="location">
                        <h4>Store Location</h4>
                        <p>500 Terry Roberts Street</p>
                        <p>Cape Town, RSA 7764</p>
                        <p>info@TechHub.com</p>
                        <p>123-456-7890</p>

                        <div id="socials">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>

                    <div id="shop">
                        <h4>Shop</h4>
                        <p><a href="#">Shop All</a></p>
                        <p><a href="#">Computers</a></p>
                        <p><a href="#">Tablets</a></p>
                        <p><a href="#">Drones & Cameras</a></p>
                        <p><a href="#">Audio</a></p>
                        <p><a href="#">Mobile</a></p>
                        <p><a href="#">T.V & Home Cinema</a></p>
                        <p><a href="#">Wearable Tech</a></p>
                        <p><a href="#">Sale</a></p>
                    </div>

                    <div id="support">
                        <h4>Customer Support</h4>
                        <p><a href="#">Contact Us</a></p>
                        <p><a href="#">Help Center</a></p>
                        <p><a href="#">About Us</a></p>
                        <p><a href="#">Careers</a></p>
                    </div>

                    <div id="policy">
                        <h4>Policy</h4>
                        <p><a href="#">Shipping & Returns</a></p>
                        <p><a href="#">Terms & Conditions</a></p>
                        <p><a href="#">Payment Methods</a></p>
                        <p><a href="#">FAQ</a></p>
                    </div>

                </div>

                <hr></hr>

            </Container>
            
        </section>
    )
}

export default Additionals
