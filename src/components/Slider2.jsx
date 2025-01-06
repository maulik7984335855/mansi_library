import React from "react";
import Slider from "react-slick";
import img from "../assets/silder_img.png";

const Slider2 = () => {
  // Array of slide data
  const slides = [
    {
      name: "Horlicks",
      price: 34.0,
      description: "Sweet method milk hot drinks",
      imgSrc: img,
    },
    {
      name: "Boost",
      price: 25.0,
      description: "Energy drink for active lifestyle",
      imgSrc: img,
    },
    {
      name: "Bournvita",
      price: 30.0,
      description: "Nutritional chocolate drink",
      imgSrc: img,
    },
    {
      name: "Complan",
      price: 28.0,
      description: "Complete planned nutrition",
      imgSrc: img,
    },
    {
      name: "Milo",
      price: 32.0,
      description: "Chocolate malt beverage",
      imgSrc: img,
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider className="flex" {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="slide bg-pink-300 w-[30%] rounded-xl flex items-center flex-col pt-3">
              {/* Slide Image */}
              <div className="bg-pink-400 w-fit p-2 rounded-full">
                <img src={slide.imgSrc} alt={slide.name} className="w-20" />
              </div>
              {/* Slide Details */}
              <div className="bg-white m-1 mt-5 rounded-xl p-4">
                <div className="flex justify-between">
                  <h2 className="font-medium text-[18px]">{slide.name}</h2>
                  <span className="text-pink-500">${slide.price.toFixed(2)}</span>
                </div>
                <span className="font-normal text-[10px]">{slide.description}</span>
                <button className="mt-4 p-2 text-[15px] rounded-xl border border-pink-400">
                  View Book Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider2;
