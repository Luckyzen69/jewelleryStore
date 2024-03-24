import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { BsDot } from "react-icons/bs";

import Shop from '../../assets/banner/shop.jpg';
import Necklaces from '../../assets/banner/necklaces.jpg'
import Inside from '../..//assets/banner/inside.jpg'

  export default function Banner(){
    const slides= [
        {
            url:Shop
        },
        {
            url:Necklaces
        },
        {
            url:Inside
        },
        
    ]

    const [currentIndex,setCurrentIndex]=useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex  -1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1 ;
        const newIndex = isLastSlide ?  0 : currentIndex +1;
        setCurrentIndex(newIndex);

    };
    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex);
    };



    return( <>
    <div className="max-w-[1400px] h-[500px] w-full  m-auto py-3 relative px-4 group">
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full bg-cover duration-500 rounded-2xl bg-center">

        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full bg-black text-white">
            <IoIosArrowRoundBack onClick={prevSlide} size={30}/>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full bg-black text-white">
            <IoIosArrowRoundForward onClick={nextSlide} size={30}/>
            </div>
            <div  className="flex top-4 justify-center py-2">
                {slides.map((slide,slideIndex) =>(   
                    <div key={slideIndex}  onClick={()=>{ goToSlide(slideIndex)}} className="text-3xl cursor-pointer">
                        <BsDot/>
                    </div>
                ))}
            </div>
    </div>
    </>)
  }