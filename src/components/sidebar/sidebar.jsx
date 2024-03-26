import SidebarOption from './sidebarOption'
import { BsFillCartFill } from "react-icons/bs";
import Necklace from "../../assets/logos/sringar.png"
import Search from '../search/search';
import { Link } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { TbUser } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import '../../index.css'
import Category from './../home/category';
    function Sidebar(){
        const [showSideBar, setShowSideBar] = useState(true);
        const toggleSidebar = () => {
            setShowSideBar(!showSideBar);
        };
        const [isOpen,setIsOpen] = useState(false);
        const handleMouseEnter =()=>{
            setIsOpen(true);
        }
        const handleMouseLeave=()=>{
            setIsOpen(false);
        }
      
        return (
            <>
            <section className='  bg-white'>   
            <nav className='flex  p-2 justify-end  '>
              
                <div className='space-x-5 sm:space-x-6 flex text-center justify-center items-center '>
                <Link to="/home" className='sm:mr-96'><img src={Necklace} alt="logo" className=' h-12  sm:h-20 ' /></Link>
                  <Link to='/wishlist'>  <CiHeart className='text-2xl'/> </Link>
                
                <button className='hover:text-slate-700 text-xl'><BsFillCartFill/></button>
                <Link to="/login" className='hover:text-zinc-700 flex'>Login<TbUser className='text-2xl' /></Link>
                </div>

            </nav>
                <div className='flex sm:justify-end sm:items-center flex-col '>
                <Search className="flex justify-end" />
                </div>

            <div className='flex flex-col'>


                <CgMenuRight
                className={`absolute top-2 text-3xl md:hidden duration-75 delay-100 ease-in ${showSideBar ? 'hidden' : ''}`}
                onClick={toggleSidebar}
                />
            <RxCross2
                className={`absolute top-2 text-3xl md:hidden duration-75 delay-100 ease-out ${showSideBar ? '' : 'hidden'}`}
                onClick={toggleSidebar}
                />
                </div>
            <div className={`md:flex justify-center space-x-3 md:flex-row md:items-center 	transition-all ${showSideBar ? '' : 'hidden'} `}  >
            <div id='sidebar ' className='bg-white p-4  flex flex-col md:flex-row'>
               <Link to="/home"> <SidebarOption  text="Home" /></Link>
               {/* <Link to="/products"> <SidebarOption  text="Products" /></Link> */}
               <div onClick={()=>{setIsOpen((prev )=> !prev)}} className='relative hover:border p-2'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <span className='cursor-pointer   flex  items-center hover:text-emerald-600	    '>Jewelery<MdKeyboardArrowDown /></span>
                            {isOpen && (
                                <div className='sm:absolute bg-white border shadow-md rounded-md p-2 top-11 text-black  sm:w-96'>
                                    <Link to="/necklaces" className='block p-2 hover:text-emerald-600'>Necklace</Link>
                                    <Link to="/bracelets" className='block p-2 hover:text-emerald-600'>Bracelets</Link>
                                    <Link to="/Earrings" className='block p-2  hover:text-emerald-600'>Earrings</Link>
                                    <Link to="/Rings" className='block p-2 hover:text-emerald-600'>Rings </Link>
                                    <Link to="/luxury" className='block p-2 hover:text-emerald-600'>Luxury Collections  </Link>
                                    <Link to="/other" className='block p-2 hover:text-emerald-600'>Other </Link>
                                </div>
                            )}
                              </div>
               <Link to="/location"> <SidebarOption  text="Location" /></Link>
               <Link to="/aboutus"> <SidebarOption  text="About" /></Link>
               <Link to="/aboutus"> <SidebarOption  text="Contact" /></Link>
              
            </div>
            </div>
                </section>
            </>
        )
    }
    

    export  default Sidebar;