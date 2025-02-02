import Image from "next/image";

export default function Pose() {
  return (
    <div className="w-full h-full mt-8 sm:mt-0 sm:h-[700px] bg-[#F0F0F0] flex-col flex justify-start items-center max-w-screen-2xl mx-auto">
        {/* top div */}
        <div className="mt-2">
            <h1 className="text-3xl font-bold pl-6 sm:pl-0">BROWSE BY DRESS STYLE</h1>
        </div>
        {/* botton div */}  
        <div className=" w-[90%] h-full sm:h-[600px] mt-5 flex flex-wrap justify-center items-center pt-8">
        
         <div className="w-[400px] h-[250px] mt-1 relative ">
            <Image src={"/pose1.svg"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="pose1"></Image>
            <span className="absolute top-10 left-5 font-bold text-xl">Casual</span>
            </div>

         <div className="w-[600px] h-[250px] mt-1 relative">
         <Image src={"/pose3.svg"}  className= " w-full h-full rounded-[20px]" width={100} height={100} alt="pose2"></Image>
         <span className="absolute top-10 left-5 font-bold text-xl">formal</span>
         </div>

         <div className="w-[600px] h-[250px] mt-1 relative">
         <Image src={"/pose2.svg"}  className= " w-full h-full rounded-[20px]" width={100} height={100} alt="pose3"></Image>
         <span className="absolute top-10 left-5 font-bold text-xl">Party</span>
         </div>

         <div className="w-[400px] h-[250px] mt-1 relative">
         <Image src={"/pose4.svg"}   className=" w-full h-full rounded-[20px]" width={100} height={100} alt="pose4"></Image>
         <span className="absolute top-10 left-5 font-bold text-xl">Gym</span>
         </div>

        </div>
    </div>  
  )
}
