import SidebarOption from './sidebarOption'
import { BsFillCartFill } from "react-icons/bs";
import Necklace from "../../assets/sringar.png"
import Search from '../search/search';
import { Link } from 'react-router-dom';
import Category from './../home/category';
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
               <Link to="/home"> <SidebarOption  text="Location" /></Link>
               <Link to="/aboutus"> <SidebarOption  text="About Us" /></Link>
            </div>
            </section>
            </>
        )
    }
    

    export  default Sidebar;