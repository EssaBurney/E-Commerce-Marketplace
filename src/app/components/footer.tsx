import Uptodate from "@/components/uptodate";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <main className="bg-[#F0F0F0] w-full h-full md:h-[450px] relative mt-32 max-w-screen-2xl mx-auto" >
      {/*  */}
      <span className="absolute top-[-80px]">
      <Uptodate/>
      </span>
      {/* container */}
      <div className="h-full md:h-[450px] flex-col md:flex-row flex justify-between items-start p-5 pt-[160px] sm:pt-32 broder-b ">



      {/*top div*/}
    <div className="flex flex-col justify-center items=center w-[200px]">
        <ul>
            <h2 className="text-2xl sm:text-3xl  font-extrabold">SHOP.CO</h2>
            <p className="text-sm mt-1">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            {/* icons */}
 
                <div className="flex items-center  space-x-3 mt-1">
                <FaInstagram className="text-xl"/>
                <FaFacebook className="text-xl"/>
                <FaGithub className="text-xl"/>
                <FaTwitter className="text-xl"/>
                </div>
        </ul>
    </div>
                    {/*mid div  */}
                    <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place items-center space-y-4">
                        {/* box 1 */}
                    
                        <ul className="space-y-3">
                            <h2 className="text-sm sm:text-2xl">Company</h2>
                            <li className="text-sm">About US</li>
                            <li className="text-sm">Our Services</li>
                            <li className="text-sm">Privacy Policy</li>
                            <li className="text-sm">Terms and COndition</li>
                        </ul>    
                                        
                        {/* box 2 */}

                        <ul className="space-y-3">
                            <h2 className="text-sm sm:text-2xl">Company</h2>
                            <li className="text-sm">About US</li>
                            <li className="text-sm">Our Services</li>
                            <li className="text-sm">Privacy Policy</li>
                            <li className="text-sm">Terms and COndition</li>
                        </ul>

                        {/* box3 */}
                        <ul className="space-y-3">
                            <h2 className="text-sm sm:text-2xl">Company</h2>
                            <li className="text-sm">About US</li>
                            <li className="text-sm">Our Services</li>
                            <li className="text-sm">Privacy Policy</li>
                            <li className="text-sm">Terms and COndition</li>
                        </ul>

                        {/* box4 */}
                        <ul className="space-y-3">
                            <h2 className="text-sm sm:text-2xl">Company</h2>
                            <li className="text-sm">About US</li>
                            <li className="text-sm">Our Services</li>
                            <li className="text-sm">Privacy Policy</li>
                            <li className="text-sm">Terms and COndition</li>
                        </ul>
                    </div>
                </div>
                    {/* bottom div */}
                   


                    
                    <div className="flex-col sm:flex-row flex justify-between items-center mt-3">
                        <p className="text-sm">© 2000-2021, All rights reserved</p>
                        <div className="flex items-center">
                            <Image src={"/pay1.svg"} className="w-[100px]" width={100} height={100} alt="pic"/>
                            <Image src={"/pay2.svg"} className="w-[100px]" width={100} height={100} alt="pic"/>
                            <Image src={"/pay3.svg"} className="w-[100px]" width={100} height={100} alt="pic"/>
                            <Image src={"/pay4.svg"} className="w-[100px]" width={100} height={100} alt="pic"/>
                            <Image src={"/pay5.svg"} className="w-[100px]" width={100} height={100} alt="pic"/>
                        </div>
                        </div>

                </main>
            )
            }
