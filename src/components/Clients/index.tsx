import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Logo1 from "../../assets/images/logo1.svg"
import Logo2 from "../../assets/images/logo2.svg"
import Logo3 from "../../assets/images/logo3.svg"
import Logo4 from "../../assets/images/logo4.svg"
import Logo6 from "../../assets/images/logo6.svg"
import { Img, Slide, SliderLogo, SliderTitle } from './Clients.style';


const Clients: React.FC = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          }
          // {
          //   breakpoint: 480,
          //   settings: {
          //     slidesToShow: 1,
          //     slidesToScroll: 1
          //   }
          // }
        ]
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
            <Img src={Logo6} alt=""/>
          </div>
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
            <Img src={Logo6} alt=""/>
          </div>
        </Slider>
        </SliderLogo>

        </div>
    )
}

export default Clients;