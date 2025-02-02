import CustomerCarousel from "@/components/carosel";
import Font from "./components/fonts";
import Hero from "./components/hero";
import Pose from "./components/pose";
import Products from "./products/page";
import Top_sell from "./products/top";

export default function Home() {
  return (
    <div>
     
      <Hero/>      
      <Font/>
      <Products/>
      <Top_sell/>
      <Pose/>
      <CustomerCarousel/>
    
      
      
      
    </div>
  );
}