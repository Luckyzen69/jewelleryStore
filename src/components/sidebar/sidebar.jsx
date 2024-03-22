import SidebarOption from './sidebarOption'
import { BsFillCartFill } from "react-icons/bs";
import Necklace from "../../assets/logo.png"
    function Sidebar(){
        return (
            <>
            <section className='m-1'>    
            
            <div className='sm:flex   sm:justify-between'>
                <div>
                <img src={Necklace} alt="logo" className='h-32' />
                </div>
                <div className='space-x-5'>

                <p className='underline p-2'>+977 987654321</p>
                <button className='hover:text-slate-700'><BsFillCartFill/></button>
                <button>Login</button>
                <button className='border p-2 rounded-md'>Sign in</button>
                </div>
            </div>
            <div className='sm:flex sm:justify-center space-x-3'>
                <SidebarOption  text="Home" />
                <SidebarOption  text="Products" />
                <SidebarOption  text="Location" />
                <SidebarOption  text="Contact Us" />
            </div>
            </section>
            </>
        )
    }
    

    export  default Sidebar;