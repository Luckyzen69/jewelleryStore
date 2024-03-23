import SidebarOption from './sidebarOption'
import { BsFillCartFill } from "react-icons/bs";
import Necklace from "../../assets/sringar.png"
import Search from '../search/search';
import { Link } from 'react-router-dom';
    function Sidebar(){
        return (
            <>
            <section className='m-1'>    
            
            <div className='sm:flex   sm:justify-between'>
                <div>
                <Link to="/home"><img src={Necklace} alt="logo" className='h-20' /></Link>
                </div>
                <div className='space-x-2 '>

                <p className='underline p-1'>+977 987654321</p>
                <button className='hover:text-slate-700'><BsFillCartFill/></button>
                <Link to="/login" className='hover:text-slate-450'>Login</Link>
                <Link to="/signup" className='border p-2 rounded-md'>Sign in</Link>
                </div>

            </div>
                <Search/>
            <div className='sm:flex sm:justify-center space-x-3'>
               <Link to="/home"> <SidebarOption  text="Home" /></Link>
               <Link to="/home"> <SidebarOption  text="Products" /></Link>
               <Link to="/home"> <SidebarOption  text="Location" /></Link>
               <Link to="/home"> <SidebarOption  text="Contact Us" /></Link>
            </div>
            </section>
            </>
        )
    }
    

    export  default Sidebar;