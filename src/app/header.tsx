import { Menu } from 'lucide-react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Header() {
    return (
      <header className="flex    h-24 w-full justify-between  items-center px-6 ">
        <div className="flex ">
  
          <div className="md:flex h-12 justify-center items-center w-12 mx-4 rounded-full hidden">
            {/* <Car /> */}
          </div>
          <Link className="text-4xl font-bold  cursor-pointer" href="/">Rently</Link>
        </div>
        <nav className="hidden md:block px-10">
          <ul className="flex md:gap-x-10 font-semibold ">
          <li>
              <Link href="/" className="cursor-pointer ">Home</Link>
            </li>
            <li>
              <Link href="/About" className="cursor-pointer ">About</Link>
            </li>
             <li>
              <Link href="/Contact" className="cursor-pointer">Contact</Link>
            </li>
            <li>
              <Link href="https://rently.pk/vehicles/suv-cars-on-rent" className="cursor-pointer ">Services</Link>
            </li>
          </ul>
        </nav>
        <div className=" lg:flex pr-6 hidden ">
          <Input />
  
        </div >
  
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="flex gap-2 "><Link className=" font-bold  cursor-pointer" href="/">Rently </Link> </SheetTitle>
  
              <nav className="">
                <ul className="grid m-4  font-semibold ">
                  <li className="cursor-pointer my-2">
                    <Link href="/" >Home</Link>
                  </li>
  
                  <li className="cursor-pointer my-2">
                    <Link href="/About">About</Link>
                  </li>
                    
                  <li className="cursor-pointer my-2 hover:underline">
                  <Link href="/Contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    )
  }