import { BreadcrumbDemo } from "@/components/breadcrumps"
import { Button } from "@/components/ui/button"
import { Delete, Minus, Plus } from "lucide-react"
import Image from "next/image"

interface Icart{
    imageurl:string,
    title:string,
    id:number,
    size:string,
    color:string,
    price:string,
}
const cartItem:Icart[] = [
    {
        imageurl:"product1.svg",
        title:"Gradient Graphic T-shirt",
        id:1,
        size:"large",
        color:"white",
        price:"$1200",
    },
    {
        imageurl:"product2.svg",
        title:"Gradient Graphic T-shirt",
        id:2,
        size:"large",
        color:"white",
        price:"$1200",
    },
    {
        imageurl:"product3.svg",
        title:"Gradient Graphic T-shirt",
        id:3,
        size:"large",
        color:"white",
        price:"$1200",
    },
]


export default function Cartpage() {
  return (
    <>
    <div className="pl-5">
    <BreadcrumbDemo/>
    <h1 className="text-2xl font-bold mt-2">Your Cart</h1>
    </div>
    <div className="flex-col md:flex-row flex justify-center items-center gap-3 mt-6">
      {/* left div */}
        <div className="w-full md:w-[650px] h-full md:h-[500px] rounded-[20px] border">
        {
            cartItem.map((item)=>{
                return(
                    <div className="flex justify-between mt-4 p-4 border-b"key={item.id}>
                        <div className="flex gap-3">
                        <Image src={item.imageurl} alt={item.title} className="rounded-[16px]" width={100} height={100}></Image>
                       
                                <div>
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p className="text-sm">Size: {item.size}</p>
                                    <p className="text-sm">Color: {item.color}</p>
                                    <p className="font-bold">{item.price}</p>
                                </div>
                        </div>
                            {/* add or remove */}
                           
                        <div className="flex flex-col justify-between items-center space-y-5">
                       <Delete/>
                            <div className="w-[100px] h-[40px] flex justify-between p-3 items-center  bg-[#F0F0F0] rounded-[62px] text-gray-400">
                            <Minus/>
                            1
                            <Plus/>
                            </div>
                       </div>
                     </div>
                )
            })
        }
    </div>

      {/* right div */}
    <div className="w-full md:w-[400px] h-full md:h-[450px] border rounded-[20px] flex-col justify-start items-center p-4">
            <div className="w-[90%] space-y-2">
                <h1 className="text-xl font-bold">Order Summary</h1>
                <p className="flex justify-between">Subtotal <span>$1400</span></p>
                <p className="flex justify-between">Discount-(20%) <span>-$280</span></p>
                <p className="flex justify-between">Delivery Fee <span>$1000</span></p>
                <p>Total <span>$2180</span></p>
            <div className="flex">
            <input className="py-2 px-5 bg-[#F0F0F0] w-[200px] md:w-full text-gray-600 outline-none rounded-[16px]" placeholder="Add Promo Code"/>
            <Button className="bg-black text-white  ml-1">Apply</Button>
        </div>
         <Button className="bg-black text-white w-full">Go To Checkout</Button>
        </div>

         
 


    </div>
   
    </div>
 </>
  )
}
