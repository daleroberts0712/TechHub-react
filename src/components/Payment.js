import React from 'react'
import { Container } from 'react-bootstrap'
import Visa from '../img/payment/Visa.jpg';
import masterCard from '../img/payment/Mastercard.jpg';
import americanExpress from '../img/payment/American-Express.jpg';
import unionPay from '../img/payment/Union-Pay.jpg';
import JCB from '../img/payment/JCB.jpg';
import dinersClub from '../img/payment/Diners-Club.jpg';
import Discovery from '../img/payment/Discovery.jpg';
import payPal from '../img/payment/PayPal.jpg';

function Payment() {
    return (
        <section id="payment">

            <Container>

                <p>We accept the following paying methods</p>

                <div id="methods">

                    <img src={Visa} alt="Visa" />
                    <img src={masterCard} alt="MasterCard" />
                    <img src={americanExpress} alt="AmericanExpress" />
                    <img src={unionPay} alt="UnionPay" />
                    <img src={JCB} alt="JCB" />
                    <img src={dinersClub} alt="DinersClub" />
                    <img src={Discovery} alt="Discovery" />
                    <img src={payPal} alt="PayPal" />

                </div>

            </Container>
            
        </section>
    )
}

export default Payment
