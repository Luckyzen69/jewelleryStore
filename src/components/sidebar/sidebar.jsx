import SidebarOption from './sidebarOption'
import { BsFillCartFill } from "react-icons/bs";
import Necklace from "../../assets/logos/sringar.png"
import Search from '../search/search';
import { Link } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import '../../index.css'
import Category from './../home/category';
    function Sidebar(){
        const [showSideBar, setShowSideBar] = useState(false);
        const toggleSidebar = () => {
            setShowSideBar(!showSideBar);
        };
        return (
            <>
            <section className='sticky top-0  bg-white'>   
            <nav className='flex  p-2 justify-between  '>
              
                <Link to="/home"><img src={Necklace} alt="logo" className='h-20' /></Link>
                <div className='space-x-2 '>

                <p className='underline p-2 m-2'>+977 987654321</p>
                <button className='hover:text-slate-700 text-x  xl'><BsFillCartFill/></button>
                <Link to="/login" className='hover:text-zinc-700 '>Login</Link>
                <Link to="/signup" className='border p-2 rounded-md hover:bg-zinc-400 hover:text-white'>Sign In</Link>
                </div>

            </nav>
            </section>

            <div className='flex flex-col'>

                <Search/>

                <CgMenuRight
                className={`absolute text-3xl md:hidden duration-75 delay-100 ease-in ${showSideBar ? 'hidden' : ''}`}
                onClick={toggleSidebar}
                />
            <RxCross2
                className={`absolute  text-3xl md:hidden duration-75 delay-100 ease-out ${showSideBar ? '' : 'hidden'}`}
                onClick={toggleSidebar}
                />
                </div>
            <div className={`md:flex justify-center space-x-3 md:flex-row md:items-center 	transition-all ${showSideBar ? '' : 'hidden'} `}  >
            <div id='sidebar ' className='bg-white p-4 sm:1/4 flex flex-col md:flex-row'>
               <Link to="/home"> <SidebarOption  text="Home" /></Link>
               <Link to="/products"> <SidebarOption  text="Products" /></Link>
               <Link to="/home"className='sm:hover:border sm:rounded-sm p-2  text-xl'>  <select name="home" id="home" className="capitalize text-secondary">
            <option value="home" className='hidden' fixed>
              Category
            </option>
            <option value="product">Bracelets</option>
            <option value="product">Necklace Sets</option>
            <option value="product">Rings</option>
            <option value="product">Tilhari</option>
            <option value="product">Earrings</option>
            <option value="product">Luxury Collection</option>
          </select>
          </Link>
               <Link to="/location"> <SidebarOption  text="Location" /></Link>
               <Link to="/aboutus"> <SidebarOption  text="About Us" /></Link>
            </div>
            </div>
            </>
        )
    }
    

    export  default Sidebar;