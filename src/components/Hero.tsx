"use client";

import React from 'react';
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {

var settings = {
    dots: true,
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
};

const slideData = [
    {
      id: 0,
        img: "/banner-1.webp",
        title:"Trending Item",
        mainTitle: "WOMEN'S LATEST FASHION SALE",
        price: "500",
    },
    {
        id: 1,
          img: "/banner-2.webp",
          title: "Trending Accessories",
          mainTitle: "MODERN SUNGLASSES",
          price: "700",
      },
      {
        id: 2,
          img: "/banner-3.webp",
          title:"Scale Offer",
          mainTitle: "NEW FASHION SUMMER SALES",
          price: "600",
      },
      
      

]
  return (
    <div> 
    <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
          
          {slideData.map((item) => (  
            <Slide
             key={item.id}
             img={item.img}
             title={item.title}
             mainTitle={item.mainTitle}
             price={item.price}
             />
         ))}
          
           </Slider>

        
    </div>
  </div>
  );
};

export default Hero
