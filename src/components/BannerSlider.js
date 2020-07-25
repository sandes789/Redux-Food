import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../img/banner1.jpg'
import banner2 from '../img/banner2.jpg'
import banner3 from '../img/banner3.jpg'
import banner4 from '../img/banner4.jpg'

const BannerSlider = () => {
    return (
        <div className='banner-slider'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-fluid"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1><b>Ready to cook, fresh to eat</b></h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-fluid"
                    src={banner2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1><b>Power-up breakfast</b></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-fluid"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1><b>Making it fresh, making it safe</b></h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerSlider
