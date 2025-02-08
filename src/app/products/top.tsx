import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface Iporducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string
    img_url:string
}

let product:Iporducts[] = [
    
    {
        title:"FADED SKINNY JEANS",
        id:5,
        price:"$80000",
        img_url:"/product8.svg"
    },
    
    {
        title:"COURAGE GRAPHIC T-SHIRT",
        id:6,
        price:"$23000",
        img_url:"/product6.svg",
        old_price:"$125000"
    },
    
    {
    
        title:"LOOSE FIT BERMUDA SHORTS",
        id:7,
        price:"$25000",
        img_url:"/product7.svg"
    },

    
    
    {
        title:"VERTICAL STRIPED SHIRT",
        id:8,
        price:"$19000",
        img_url:"/product5.svg"
    },
  ]

  let star = [
      <FaStar key={1}/>,
      <FaStar key={2}/>,
      <FaStar key={3}/>,
      <FaStar key={4}/>,
      <FaStar key={5}/>,
  ];


export default function Top_sell() {
  return(  
    <div className="w-full h-full sm:h-[500px] mt-10 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl md: text4xl font-bold text-center">TOP SELLING</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {
          product.map((data)=>{
                return(
                 <div key={data.id}>
                    <Link href={`/products/${data.id}`}>
                      <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                    <Image src={data.img_url} alt={data.title}
                    className="w-full h-full rounded-[20px]"
                     width={100} height={100}></Image>
                      </div>
                </Link>

            <div>
             <p className="text-xl mt-2 font-bold">{data.title}</p>
             <div className="flex text-yellow-400">
                                    {star.map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                    ))}
                                </div>
                                <p className="font-bold mt-1">{data.price}<span className="text-gray font-bold line-through">{data.old_price}</span></p>
                    </div>
                   
                  </div>
                )
                
        })
      }
      </div>
    </div>
  )
}
