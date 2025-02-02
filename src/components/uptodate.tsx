import { MdEmail } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function Uptodate() {
  return (
      <main className="w-full flex justify-center items-center md:pl-20  max-w-screen-2xl mx- auto">
        <div className="w-[95%] h-full sm:h-[150px] bg-black text-white flex flex-col sm:flex-row items-center p-5 rounded-[20px] ">
          <h1 className="text2xl sm:text-4xl font-xtrabold ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
          <div className="space-y-3">
            <div className="flex justify-start items-center sm:w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
              <MdEmail className="text-xl ml-2 text-black"/>
              <input placeholder="search item..." className="w-full h-full outline-none rounded-[62px] bg-[#F0F0F0]"></input>
           </div>
              <div className="flex justify-center items-center sm:w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
           <p className="text-black">Subscribe To Newsletter</p>
            </div> 
          
          
          </div>
        </div>
      </main>
  )
}
