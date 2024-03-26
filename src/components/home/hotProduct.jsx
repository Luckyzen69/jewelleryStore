import L1 from "../../assets/hotProducts/l1.jpg";
import L2 from "../../assets/hotProducts/l2.jpg";
import L3 from "../../assets/hotProducts/l3.jpg";
import L4 from "../../assets/hotProducts/l4.jpg";
import L5 from "../../assets/hotProducts/l5.jpg";
import L6 from "../../assets/hotProducts/l6.jpg";
import L7 from "../../assets/hotProducts/l7.jpg";
import L8 from "../../assets/hotProducts/l8.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useEffect, useLayoutEffect, Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
export default function hotProduct() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  const slides = [
    {
      title: "Krishna Necklace",
      image: L1,
      price: "Rs 8099",
    },
    {
      title: "God Necklace",
      image: L2,
      price: "Rs 909",
    },
    {
      title: "Goddess Necklace",
      image: L3,
      price: "Rs 999",
    },
    {
      title: "Moti Necklace",
      image: L4,
      price: "Rs 899",
    },
    {
      title: "Gold Necklace",
      image: L5,
      price: "Rs 809",
    },
    {
      title: "Golden Necklace",
      image: L6,
      price: "Rs 809",
    },
    {
      title: "Gold Necklace",
      image: L7,
      price: "Rs 809",
    },
    {
      title: "Gold Necklace",
      image: L8,
      price: "Rs 809",
    },
  ];

  const settings = {
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
      <div>
        <h3 className="text-3xl  text-center font-mono flex justify-center ">
          Featured Jewels
        </h3>

        <Slider {...settings}>

          {slides.map((slide, index) => {
              let { title, image } = slide;
              return (
                  <>
                <div className="flex flex-row justify-center text-black  items-center ">
                  <Link to="/productdetail">
                    <div className="m-2 border border-black   " key={slide}>
                      <div className="p-1 m-2 flex justify-center items-center ">
                        <img src={image} alt="" className="h-44 w-44 " />
                      </div>
                      <div className="flex justify-center items-center">
                        <h3 className="font-bold">{title}</h3>
                      </div>
                        </div>
                    </Link>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
