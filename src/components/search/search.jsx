import { CiSearch } from "react-icons/ci";


export default function Search(){
    return ( <>
    <div >
        <form action="search" className="flex justify-center ">
            <input type="search" name="" id="" className="border sm:w-96 " />
            <CiSearch className="text-2xl  cursor-pointer border " type="button"/>
        </form>
    </div>
    </>)
}