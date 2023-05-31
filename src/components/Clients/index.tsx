import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Logo1 from "../../assets/images/client_logo_1.svg"
import Logo2 from "../../assets/images/client_logo_2.svg"
import Logo3 from "../../assets/images/client_logo_3.svg"
import Logo4 from "../../assets/images/client_logo_4.svg"
import Logo5 from "../../assets/images/client_logo_5.svg"
import Logo6 from "../../assets/images/client_logo_6.svg"
import Logo7 from "../../assets/images/client_logo_7.svg"
import Logo8 from "../../assets/images/client_logo_8.svg"
import { Img, Slide, SliderLogo, SliderTitle } from './Clients.style';


const Clients: React.FC = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear"
  };
    return (
        <div id="clients">
        <SliderTitle>
          <h1>NOS CLIENTS</h1>
        </SliderTitle>
        <SliderLogo>
        <Slider {...settings}>
          <div>
            <Img src={Logo1} alt=""/>
          </div>
          <div>
            <Img src={Logo2} alt=""/>
          </div>
          <div>
            <Img src={Logo3} alt=""/>
          </div>
          <div>
            <Img src={Logo4} alt=""/>
          </div>
          <div>
            <Img src={Logo5} alt=""/>
          </div>
          <div>
            <Img src={Logo6} alt=""/>
          </div>
          <div>
            <Img src={Logo7} alt=""/>
          </div>
          <div>
            <Img src={Logo8} alt=""/>
          </div>
        </Slider>
        </SliderLogo>

        </div>
    )
}

export default Clients;