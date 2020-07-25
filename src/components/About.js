import React from 'react'
import pizza from '../img/banner33.jpg'
import about from '../img/aabout-us.png'

const About = () => {
    return (
        <div className='main'>
            <div className="inner-banner">
                <img src={pizza} alt=""/>
                <div className="content">
                    <h2>Who we are.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="overlay"></div>
            </div>
            <div className="container pt-5 pb-5 about-us">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Who We Are</h2>
                        <p>
                            Do you hate to travel everyday in a stuffed bus with the inconvenience of carrying a 10kg
                            laptop bag with an an added baggage of lunch? Do you wish you could just keep it simple and
                            just get the lunch bag delivered at your workplace? Are you aware of the Dabbawalas of
                            kathmandu and always wished for such a service in valley? Worry no more because
                            we've got it covered! Being the first of its kind, Fresh Cook brings you the fabled
                            of the diffrent verities in kathmandu. This efficient service, coupled with fast
                            delivery is going to take the numerous office goers of Silicon City one step closer to a healthy
                            and sustainable lifestyle.
                        </p>
                        <p>
                            We at Fresh Cook deliver meals cooked with love from your home to your workplace, served
                            hot. We also save you from the hassle of carrying back the empty boxes of savored food by
                            picking it up from your office and delivering it back home. Register with us as a user and get
                            meals delivered at your workplace in minimal time by our delivery ninjas pacing their way
                            through kathmandu traffic. Fresh Cook offers weekly and monthly plans, well suited for your
                            convenience and budget. We at Fresh Cook are an enthusiastic bunch, with a motto of
                            promoting health in a pocket friendly way. We strive to help you in maintaining your diet
                            preferences and are especially a favourite amongst mothers as we are fulfilling their desire to
                            serve hot, lip smacking home cooked food.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={about} alt="about"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
