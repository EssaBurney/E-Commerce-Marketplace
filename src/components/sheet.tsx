"use client"
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuDemo } from "./NavigationMenu";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild  className="md:hidden">
            <Button>
            <IoMdMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>shop.co</SheetTitle>
            </SheetHeader>
            {/* navbar */}
   <ul className="">
    <li className="grid grid-cols-1 gapy-4">
        <Link href={""} ><NavigationMenuDemo/></Link>
        <Link href={""} >On Sale</Link>
        <Link href={""} >New Arrivals</Link>
        <Link href={""} >Brands</Link>
    </li>
   </ul>
        
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
