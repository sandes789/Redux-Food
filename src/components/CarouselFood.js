import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-elastic-carousel';
import banner1 from '../img/banner1.jpg'
import banner2 from '../img/banner2.jpg'
import banner3 from '../img/banner3.jpg'
import banner4 from '../img/banner4.jpg'

const CarouselFood = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 7 },
        { width: 768, itemsToShow: 7 },
        { width: 1200, itemsToShow: 7 }
      ];
    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <h2 className="text-center d-block w-100 pt-5 pb-5">What are you craving for?</h2>
                <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay autoPlaySpeed={1500} focusOnSelect={false}>
                    <img className="rounded-circle" src={banner1} alt="First slide" />
                    <img className="rounded-circle" src={banner2} alt="First slide" />
                    <img className="rounded-circle" src={banner3} alt="First slide" />
                    <img className="rounded-circle" src={banner4} alt="First slide" />
                    <img className="rounded-circle" src={banner2} alt="First slide" />
                    <img className="rounded-circle" src={banner1} alt="First slide" />
                    <img className="rounded-circle" src={banner2} alt="First slide" />
                    <img className="rounded-circle" src={banner3} alt="First slide" />
                    <img className="rounded-circle" src={banner4} alt="First slide" />
                    <img className="rounded-circle" src={banner2} alt="First slide" />
                    <img className="rounded-circle" src={banner1} alt="First slide" />
                    <img className="rounded-circle" src={banner2} alt="First slide" />
                    <img className="rounded-circle" src={banner3} alt="First slide" />
                    <img className="rounded-circle" src={banner4} alt="First slide" />
                    <img className="rounded-circle" src={banner2} alt="First slide" />
                    <img className="rounded-circle" src={banner1} alt="First slide" />
                    <img className="rounded-circle" src={banner2} alt="First slide" />
                    <img className="rounded-circle" src={banner3} alt="First slide" />
                    <img className="rounded-circle" src={banner4} alt="First slide" />
                    <img className="rounded-circle" src={banner2} alt="First slide" />
                </Carousel>
                </div>
            </div>
        </div>
    )
}

export default CarouselFood
