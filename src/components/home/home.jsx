 import Banner from "./banner"
 import Category from "./category"
 import HotProduct from "./hotProduct"
 import React, { useEffect, useLayoutEffect } from 'react';

export default function Home(){
     useLayoutEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component mount
      }, []);
    return ( <>
    <div>
        <Banner/>
        <Category/>
        <HotProduct/>
    </div>
    </>)
}