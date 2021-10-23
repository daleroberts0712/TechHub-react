import React from 'react'
import { Container } from 'react-bootstrap'

function Services() {
    return (
        <section id="services">
            <Container fluid>
                <div id="content">
                    <h5><i className="far fa-motorcycle"></i> Curb-side <br/> pickup</h5>
                    <h5><i className="far fa-box"></i> Free shipping on orders over $50</h5>
                    <h5><i class="far fa-tags"></i> Low prices guaranteed</h5>
                    <h5><i className="far fa-clock"></i> Available to you 24/7</h5>
                </div>
            </Container>
        </section>
    )
}

export default Services
