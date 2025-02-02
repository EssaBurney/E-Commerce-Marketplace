import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import { Button } from "./ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";

const Reviews = [
    {
      name: "Billie Eilish.",
      feedback:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
      rating: 5,
      verified: true,
      date:"Posted on August 16, 2023"

    },
    {
      name: "Abdul Qadir Rana.",
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
      rating: 5,
      verified: true,
      date:"Posted on August 16, 2023"

    },
    {
      name: "Hasnain Noman.",
      feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: false,
      date:"Posted on August 16, 2023"

    },
    {
      name: "Michael Jackson.",
      feedback:
       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 16, 2023"

    },
    {
      name: "shahrukh Khan.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 16, 2023"
    },
    {
      name: " Neha Kakkar.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 16, 2023"
      },
  ];

let star = [
    <FaStar key={1}/>,
    <FaStar key={2}/>,
    <FaStar key={3}/>,
    <FaStar key={4}/>,
    <FaStar key={5}/>,
];  
export default function Review() {
  return (
    <main className=" max-w-screen-2xl mx-auto">
        {/* top */}
        <div className="px-5 flex justify-between items-center">
      <h1 className="text-black text-xl md:text-2xl  pt-4 ml-2 text-center md:text-left text-bold">ALL REVIEWS
      </h1>
      <div className="flex items-center space-x-2 mt-4 md:mr-4">
              <div className="hidden md:block">              
              <Button className="rounded-[16px] bg-[#F0F0F0]">Latest <RiArrowDropDownLine className="ml-2 text-xl"/></Button>
              </div>
              <Button className="rounded-[16px] bg-black text-white w-[170px]">Write a Review</Button>

          
            </div>
      </div>
      {/* container */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 mt-3 md:mt-0">
            {
                Reviews.map((data)=>{
                    return (
                        <div className="border p-5 rounded-[20px]" key={data.name}>
                        <p className="flex text-yellow-400">{star}</p>
                        <h2 className="flex font-bold text-xl">{data.name} <Check className="bg-green-500 rounded-full text-white"/></h2>
                        <p className="text-sm">{data.feedback}</p>
                        <p className="mt-5 text-gray-400">{data.date}</p>

                        </div>
                    )
                })  
            }
        </div>
      </div>
    </main>
  )
}
