import L3 from '../../assets/hotProducts/l3.jpg'
import React, { useEffect, useLayoutEffect,useState } from 'react';
import { FaCircleInfo, FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function ProductDetail(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component mount
      }, []);

      let initalValue =1;
      let finalValue =1
      let [counterValue, setCounterValue] = useState(initalValue)
      const Add= ()=> {
        setCounterValue(counterValue + 1);
      }

      const Minus = () =>{
       
        setCounterValue(counterValue -1);
        if(counterValue<=1){
            setCounterValue(finalValue)
        }
      }

      const Cart=(e)=>{
        e.preventDefault();
        alert(` ${counterValue} product has been placed order.   `)
      }

    return ( 
        <>
        <div className='grid sm:flex grid-cols-1 m-2'>
            <img src={L3} alt="" className='h-96' />
            <div className='p-2 m-2 sm:ml-12'>
            <h2 className='text-2xl'>Necklaces</h2> 
            <p className='text-xl'>Rs 3000</p> <br /> 
            {

            }
             <button
                className={`absolute text-3xl md:hidden duration-75 delay-100 ease-in ${ CiHeart ? FaHeart : CiHeart}`}
              
                />
      
            <FaHeart />


            <div>
                <h2 className='font-mono text-xl font-bold'>Discription</h2>
                <ol role='list' className='font-serif'>
                    <li>- Handmade</li>
                    <li>- Material: panchadhatu</li>
                    <li>- Strucutre: solid</li>
                </ol>
            </div>
              
              <div className='m-2'>
                <h2 className='font-bold text-xl font-mono flex' ><FaCircleInfo className='m-1' />Product Details</h2>
                <p className='font-serif'>Panchadhatu translated from Sanskrit is a term used for a five-metal alloy of sacred importance. <br />
                     The 5 metals consist out of gold, silver, copper, lead or zinc and iron. <br /> These metals are carrying a
                      certain energy which resonance with the body so <br /> it's believed to give balance in life, good health,
                       peace of mind and fortune. <br /> The outer parts covered by silver are representing a lion. <br /> This design is
                        also available in a bracelet.</p>
              </div>
            <div>
                <form  className='m-2 flex flex-col sm:flex-row'>
                    <div className='flex'>

                <FaMinus onClick={Minus} className='m-2 border border-black p-3  text-5xl rounded-sm ' />
                <p className='text-4xl border p-1 m-1  text-center rounded-sm border-black font-mono w-16'>{counterValue}</p>
                <FaPlus onClick={Add}  className='m-2 border border-black rounded-sm p-3  text-5xl' />
                    </div>
                <button onClick={Cart} className='border border-black p-2 rounded-xl bg-slate-700 hover:bg-slate-900 text-bold text-white m-2 sm:w-96'>ADD TO CART</button>
                </form>
            </div>
            </div>
        </div>
        </>
    )
}