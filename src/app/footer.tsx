import { Linkedin, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { Twitter } from "@/icons/icons"

export default function Footer() {
    return (
        <footer className=' w-full grid md:mt-28'>

            <div className='inline h-3/4 '>

                <div className=' h-full w-full  md:grid  md:grid-cols-5 '>
                    <div className=' col-span-2'>
                        <div className='h-full w-full justify-center items-center '>
                            <div className='flex text-3xl font-bold md:justify-center pl-10 md:pl-0 items-center pr-14 pt-5'>
                                <h1 className='px-2'><Link href="/">Address</Link></h1>
                            </div>
                            <div className='px-12 pt-6 font-semibold text-gray-400'>
                            Suite No. 106, 1st Floor, Clifton Broadway Building, Clifton, Karachi , Postal Code: 75600, Pakistan    
                                <div className='px-5 flex gap-x-6  text-black'>
                                    <div className='flex mt-16 w-10 h-10 bg-gray-300 cursor-pointer items-center justify-center rounded-xl'>
                                        <Link
                                            href="https://www.facebook.com/syedrazaali303?mibextid=ZbWKwL">
                                            <Facebook />
                                        </Link>
                                    </div>
                                    <div className='flex mt-16 w-10 h-10 bg-gray-300 items-center justify-center rounded-xl cursor-pointer'>
                                        <Link href="https://www.instagram.com/syedrazaalii06/"> <Instagram /></Link>
                                    </div>
                                    <div className='flex mt-16 w-10 h-10 bg-gray-300 items-center justify-center rounded-xl cursor-pointer'>
                                        <Link
                                            href="https://twitter.com/SYEDRAZAALI06">
                                            <Twitter />
                                        </Link>
                                    </div>
                                    <div className='flex mt-16 w-10 h-10 bg-gray-300 items-center justify-center rounded-xl cursor-pointer'>
                                        <Link
                                            href="https://www.linkedin.com/in/syed-raza-ali-346263308/">
                                            <Linkedin />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex  col-span-1 justify-center items-center'>
                        <div className=' h-full p-10'>
                            <div className='text-2xl px-4 font-bold text-gray-500'>Company</div>
                            <ul className='px-4 pt-4 font-semibold text-gray-400 '>
                                <li>
                                    <Link href="/About" className="cursor-pointer  hover:underline ">Why us?</Link>
                                </li>
                                <li className='cursor-pointer hover:underline'>Terms of Use</li>
                                <li className='cursor-pointer hover:underline'>Privacy Policy</li>
                                <li className='cursor-pointer hover:underline'>How it Works</li>
                                <li className='cursor-pointer hover:underline'>Contact Us</li>
                                <li className='cursor-pointer hover:underline'>Services</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className=' h-full p-10'>
                            <div className='text-2xl px-4 font-bold text-gray-500'>Support</div>
                            <ul className='px-4 pt-4  font-semibold text-gray-400'>
                                <li className='cursor-pointer hover:underline'>Support Carrer</li>
                                <li className='cursor-pointer hover:underline'>24h Service</li>
                                <li className='cursor-pointer hover:underline'>Privacy Policy</li>
                                <li className='cursor-pointer hover:underline'>Quick Chat</li>
                            </ul>
                        </div>
                    </div>
                    <div className=' col-span-1'>
                        <div className=' h-full p-10'>
                            <div className='text-2xl px-4 font-bold text-gray-500'>Contact</div>
                            <ul className='px-4 pt-4 font-semibold text-gray-400'>
                                <li className='cursor-pointer hover:underline '>Whatsapp</li>
                                <li className='cursor-pointer hover:underline'>Support 24h</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom  */}
            <div className='inline md:mt-32'>

                <div className=' border md:grid  md:grid-cols-3  w-full md:h-24 h-36'>
                    <div className='flex col-span-1 pl-8 md:pl-0 md:justify-center items-center'>
                        <div className=' px-4 h-12 items-center flex font-semibold text-gray-500 text-lg  '>
                            <p> Note : This website is only for test purpose </p>
                        </div>
                    </div>
                    <div className='flex md:justify-center pl-8 md:pl-0 items-center col-span-1'>
                        <div className=' px-4 h-12 items-center flex   text-lg  pb-2 md:pb-0'>
                            <div className='flex md:grid text-gray-500 font-semibold'> Design by.<p className='text-black'><b>SYED RAZA ALI</b></p></div>
                        </div>
                    </div>
                    <div className='flex md:justify-center pl-8 md:pl-0 items-center col-span-1'>
                        <div className=' px-4 h-12 items-center flex font-semibold text-gray-00 text-lg md:pb-0  pb-4'>
                            <div >Code by.  <Link className='hover:underline text-black font-bold' href="https://github.com/Syed-Raza-Ali">Syed-Raza-Ali</Link> on github</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
