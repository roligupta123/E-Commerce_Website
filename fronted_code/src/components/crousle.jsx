import React from "react";
import Slider from "react-slick";
import Kids from '../assets/kids.webp'
import Makup from '../assets/makup.jpg'
import Men from '../assets/men.jpg'
import Electronic from '../assets/electronic.jpg'
import Women from '../assets/women.jpg'


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="mt-5">
      <Slider {...settings}>
        <div>
          <img src={Men} alt="slide1" className="rounded-lg h-[400px] w-full" />
        </div>
        <div>
          <img src={Makup} alt="slide2" className="rounded-lg h-[400px] w-full" />
        </div>
        <div>
          <img src={Kids} alt="slide3" className="rounded-lg h-[400px] w-full" />
        </div>
        <div>
          <img src={Electronic} alt="slide3" className="rounded-lg h-[400px] w-full" />
        </div>
        <div>
          <img src={Women} alt="slide3" className="rounded-lg h-[400px] w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
