import { AccordionDemo } from "@/components/accordion";
import { CheckboxDemo } from "@/components/checkbox";
import { Dresstype } from "@/components/dresstype";
import Casualshirts from "@/components/shirt";
import Size from "@/components/size";
import { SliderDemo } from "@/components/slider";

export default function Category() {
  return (
    <main className="flex flex-col sm:flex-row justify-center items-center space-x-6">
        {/* left */}
        <div className="w-full md:w-[295px] h-full md:h-[1200px] border rounded-[16px]">
            <AccordionDemo/>
            <SliderDemo/>
            <CheckboxDemo/>
            <Size/>
            <Dresstype/>
        </div>
        {/* right */}
        <div className="w-full md:w-[900px] h-full sm:h-[1200px]">
          <Casualshirts/>

        </div>
    </main>
  )
}
