import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerSlider from './BannerSlider';
import CarouselFood from './CarouselFood';



const FoodList = () => {
    
    return (
        <div className='main'>
            <BannerSlider/>
            <CarouselFood />
        </div>
    )
}

export default FoodList
