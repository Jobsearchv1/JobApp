import React from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
 import './slide.css'

const slide = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="I"
                    src={img1}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>Up to 10% off Voucher</h3>
                    <p>Shop Now</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="I"
                    src={img2}
                    alt="Second slide"
                />
                {/* <Carousel.Caption>
                    <h3>JBL XTREME 3 WATERPROOF</h3>
                    <p>by now</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="I"
                    src={img3}
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <h3>SOFRA TEXTILE </h3>
                    <p>BETTER QUALITY</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
};

export default slide;
