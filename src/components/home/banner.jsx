import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";

import Shop from '../../assets/banner/inside.jpg';
import Necklaces from '../../assets/banner/locket.jpg'
import Inside from '../..//assets/banner/rings.jpg'

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

    const autoScroll = true;
    let slideInterval;  
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


    function auto(){
        slideInterval = setInterval(nextSlide, 6000)
    };
    
    useEffect(()=>{
        if(autoScroll){
            auto();
        }
    },[currentIndex]);



    return( <>
    <div className="max-w-[1400px] h-[500px] w-full  m-auto py-3  px-4 group ">
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full bg-cover duration-500 rounded-2xl bg-center">
        </div>
        <div className="hidden group-hover:block absolute top-[65%] -translate-x-0 -translate-y-[50%] left-5 text-2xl  text-white hover:drop-shadow-lg hover:border">
            <IoIosArrowRoundBack onClick={prevSlide} size={30}/>
        </div>
        <div className="hidden group-hover:block absolute top-[65%] -translate-x-0 -translate-y-[50%] right-5 text-2xl text-white drop-shadow-lg hover:border">
            <IoIosArrowRoundForward onClick={nextSlide} size={30}/>
            </div>
    </div>
    </>)
  }