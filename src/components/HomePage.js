import React from 'react';
import './HomePage.css';
import Header from './Header';
import Slider from 'react-slick';
import background from '../images/backround.jpeg';
import background2 from '../images/background2.jpeg';
import background3 from '../images/background3.jpg';


const HomePage = () => {

    return (
        <div className="container">
             <Header/>     
             <div className="slider-container">
                <span className="title-home">Are you experienced?</span>
                <Slider className="slider" autoplay={true} arrows={false}
                 draggable={false} touchMove={false} pauseOnHover={false} fade={true}
                 autoplaySpeed={4000}>
                    <div>
                        <img src={background} alt=''/>
                    </div>
                    <div>
                        <img src={background2} alt=''/>
                    </div>
                    <div>
                        <img src={background3} alt=''/>
                    </div>
                </Slider>
             </div>
        </div>
    )


}

export default HomePage;