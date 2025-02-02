"use client";
import { useRouter } from 'next/navigation';
import { SheetSide } from "@/components/sheet";
import { FaUserAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

import Link from "next/link";
import { NavigationMenuDemo } from "@/components/NavigationMenu";


export default function Header() {
    const router = useRouter();   
  
    const handleCartClick = () => {
      router.push("/cart");
    };

  return (
   <header className="w-full h-[60px] bg-white flex justify-between items-center max-w-screen-2xl mx-auto" >
    {/* left */}
    
   <div className="flex jsutify-center items-center">
     <SheetSide/>
    <h1 className="text-xl sm:text-3xl  font-bold pl-2">SHOP.CO</h1>
   </div>
   {/* navbar */}
   <ul className="hidden md:block">
    <li className="space-x-5 flex item center">
        <Link className="ml-3" href={"/"} ><NavigationMenuDemo/></Link>
        <Link className="ml-3" href={"/"} >On Sale</Link>
        <Link className="ml-3" href={"/products"} >New Arrivals</Link>
        <Link className="ml-3" href={"/"} >Brands</Link>
    </li>
   </ul>
   {/* search iput */}
    <div className="hidden md:block">
      <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
    <IoIosSearch className="text-xl ml-2"/>
    <input placeholder="search item..." className="w-full h-full outline-none rounded-[62px] bg-[#F0F0F0]"></input>
    </div>
    </div>

   {/* cart */}
   <div className="flex items-center mr-3 space-x-5">
   <IoIosSearch className="text-xl ml-2 md:hidden"/>
   <FaShoppingCart className="text-xl cursor-pointer" onClick={handleCartClick}/>
   <FaUserAlt className="text-xl"/>
   </div>
   </header>
  );
}