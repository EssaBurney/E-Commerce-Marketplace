"use client"
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import Review from "@/components/review";
import P2products from "@/components/p2products";
import { BreadcrumbDemo } from "@/components/breadcrumps";


let star = [
    <FaStar key={1}/>,
    <FaStar key={2}/>,
    <FaStar key={3}/>,
    <FaStar key={4}/>,
    <FaStar key={5}/>,
];

interface Iporducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string
    img_url:string
    img1:string;
    img2:string;
    img3:string
}

let product:Iporducts[] = [
    

    {
        title:"SLEEVE STRIPED T-SHIRT",
        id:1,
        price:"$11000",
        img_url:"/product4.svg",
        img1:"/detail1.svg",
        img2:"/detail2.svg",
        img3:"/product4.svg",
    },
    
    {

        title:"CHECKERED SHIRT",
        id:2,
        price:"$13000",
        img_url:"/product3.svg",
        img1:"/detail1.svg",
        img2:"/detail2.svg",
        img3:"/product3.svg",
    },

    
    
    {
        title:"SKINNY FIT JEANS",
        id:3,
        price:"$14000",
        img_url:"/product2.svg",
        img1:"/detail1.svg",
        img2:"/detail2.svg",
        img3:"/product2.svg",
    },
    
    {
        title:"T-SHIRT WITH TAPE DETAILS",
        id:4,
        price:"$12000",
        img_url:"/product1.svg",
        img1:"/detail1.svg",
        img2:"/detail2.svg",
        img3:"/product1.svg",
    },

    {
      title:"VERTICAL STRIPED SHIRT",
      id:5,
      price:"$19000",
      img_url:"/product5.svg",
      img1:"/detail1.svg",
      img2:"/detail2.svg",
      img3:"/product5.svg",
  },

  {
    title:"COURAGE GRAPHIC T-SHIRT",
    id:6,
    price:"$23000",
    img_url:"/product6.svg",
    old_price:"$125000",
    img1:"/detail1.svg",
    img2:"/detail2.svg",
    img3:"/product6.svg",
},

{
  title:"FADED SKINNY JEANS",
  id:7,
  price:"$80000",
  img_url:"/product8.svg",
  img1:"/detail1.svg",
  img2:"/detail2.svg",
  img3:"/product8.svg",
},

{
  title:"LOOSE FIT BERMUDA SHORTS",
  id:8,
  price:"$25000",
  img_url:"/product7.svg",
  img1:"/detail1.svg",
  img2:"/detail2.svg",
  img3:"/product7.svg",
},



{
  title:"GREEN STRIPED SHIRT",
  id:9,
  price:"$19000",
  img_url:"/product5.svg",
  img1:"/detail1.svg",
  img2:"/detail2.svg",
  img3:"/product5.svg",
},

{
  title:"COURAGE DOG T-SHIRT",
  id:10,
  price:"$23000",
  img_url:"/product6.svg",
  img1:"/detail1.svg",
  img2:"/detail2.svg",
  img3:"/product6.svg",
},

{   
  title:"FADED SKINNY PEAT JEANS",
  id:11,
  price:"$80000",
  img_url:"/product8.svg",
  img1:"/detail1.svg",
  img2:"/detail2.svg",
  img3:"/product8.svg",
},

{
  title:"LOOSE FIT CHADDA SHORTS",
  id:12,
  price:"$25000",
  img_url:"/product7.svg",
  img1:"/detail1.svg",
  img2:"/detail2.svg",
  img3:"/product7.svg",
},

]


export default function Product_Detail(){
  const params = useParams(); 
   const id = params.id // dynamic id is here

console.log("params.id:", params.id);  // i have  added temporary from chgpt

   const item = product.find((item)=> item.id  === Number (id))
   if(!item){
    return <h1>product not found</h1>
   }

  return (
    <>
      <BreadcrumbDemo/>
    <div className="flex flex-col md:flex-row justify=center sm:justify-evenly sm:mt-10 p-5 sm:p-0  max-w-screen-2xl mx-auto">
      {/* left   */}


    <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
      {/* images */}


    <Image src={item.img1} className="w-[100p] sm:w-full  h-[100px] sm:h-[150px] " alt="product detail"width={100} height={100} ></Image>
    <Image src={item.img2} className="w-[100p] sm:w-full  h-[100px] sm:h-[150px] sm:mt-3" alt="product detail"width={100} height={100} ></Image>
    <Image src={item.img3} className="w-[100p] sm:w-full  h-[100px] sm:h-[150px] sm:mt-3" alt="product detail"width={100} height={100} ></Image>
    </div>
    {/* mid div */}


    <div className="w-[full] sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0  order-1 sm:order-2">
    <Image src={item.img3} alt="product detail" className="w-full h-[95%]" width={100} height={100} ></Image>
    </div>
    {/*right div */}



    <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
      <h1 className="text-2xl md:text-3xl font-bold">{item.title}-</h1>
      <div className="flex text-yellow-400">
                                            {star.map((icon, index) => (
                                                <span key={index}>{icon}</span>
                                            ))}
                                        </div>
      <p className="font-bold mt-2">{item.price} <span>{item.old_price}</span>   </p>
      <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
      {/* select color */}


      <div className="mt-8">
      <p className="text-gray-500">Select Color</p>
    <div className="flex space-x-3 mt-2 ">
      <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full relative flex justify-center items-center"><Check className="text-white aboslute opacity-0 hover:opacity-100 cursor -pointer"/></div>
      <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full relative flex justify-center items-center"><Check className="text-white aboslute opacity-0 hover:opacity-100 cursor -pointer"/></div>
      <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full relative flex justify-center items-center"><Check className="text-white aboslute opacity-0 hover:opacity-100 cursor -pointer"/></div>
   </div>
  </div>
   {/* choose size */}


  <div className="mt-8">
    <p className="text-gray-500">Choose Size</p>
    <div className="flex space-x-3 mt-2">
      <div className="w-[80px] h-[40px] flex justify-center items-center  bg-[#F0F0F0] rounded-[62px] text-gray-400">Small</div>
      <div className="w-[90px] h-[40px] flex justify-center items-center  bg-[#F0F0F0] rounded-[62px] text-gray-400">Medium</div>
      <div className="w-[80px] h-[40px] flex justify-center items-center  bg-[#F0F0F0] rounded-[62px] text-gray-400">Large</div>
      <div className="w-[90px] h-[40px] flex justify-center items-center  bg-[#F0F0F0] rounded-[62px] text-gray-400">X-Large</div>
   </div>
  </div>
  {/* buttons */}


  <div className="flex justify-start items-center mt-7 space-x-4">
  <div className="w-[100px] h-[40px] flex justify-between p-3 items-center  bg-[#F0F0F0] rounded-[62px] text-gray-400">
    <Minus/>
    1
    <Plus/>
  </div>
  <Button className="bg-black text-white w-[300px]" onClick={() => window.location.href = "/cart"}>Add To Cart</Button>
  </div>
</div>


</div>
<Review/>
<P2products/>
</>
  )
}
