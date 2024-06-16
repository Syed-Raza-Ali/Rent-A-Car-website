"use client"
import Link from "next/link";
import Image from "next/image"
import { PromotionImages, femaleImages, mainImages } from "./array";
import KommunicateChat from "./chatbot"
import ContactForm from "../../components/contactform";

export default function Home() {
  return (
    <main>
      <div className="md:flex grid grid-col-12 justify-center items-center px-6">

        {/* left hand side */}

        <div className="col-span-6 h-min w-full md:w-1/2  items-center justify-center  pt-6 pb-20">

          <div className="grid justify-center items-center">
            <div className="h-12 rounded w-32 font-bold justify-center items-center flex my-4    ">  </div>


            <h1 className="pl-6 text-5xl font-bold my-5 text-start ">
              Rent A Car <br></br> With Rently  <br></br>
            </h1>
            <div className="font-semibold font-italic mt-6">
              The Rently team has extensive experience in renting cars in Karachi,<br></br> allowing us to optimise your travel needs and make it <br></br>simple for you to find the ideal vehicle for your <br></br>journey. Our team of dedicated professionals strives <br></br>to make your trip more enjoyable and is available to <br></br>you 24 hours a day, seven days a week.

              <div className="mt-4 mb-8">
                Rently Car Rental Service is widely regarded as<br></br> one of the best Car Rental Service Providers serving <br></br>not only Karachi but other major cities of Pakistan as well.

              </div>
              <div className="flex justify-end">
                <Link href="/Contact"><div className="h-16 rounded w-40 bg-black text-white font-bold justify-center items-center flex my-4 shadow shadow-black">
                  Book Your Car
                </div></Link>
              </div>
            </div>
          </div>
        </div>

        {/* right hand side */}

        <div className="col-span-6 h-min md:mt-10  pr-6 w-full  lg:w-1/2 items-center lg:block  justify-center pl-6 md:pl-20 ">

          <Image
            src="https://i.ibb.co/hdyRFDJ/car.png"
            alt="Your GIF"
            width="350"
            height="450"
            className=" w-full h-full "
          />
          <div className="h-20 w-40">{/* =========   to empty space bottom of img    ======== */} </div>

        </div>

      </div>
      <div >
        <div className="grid justify-center items-center mb-10">
          <h2 className="font-bold text-sky-700 text-center mb-4 mt-8">COLLECTIONS</h2>
          <h1 className="text-4xl font-bold mb-8 text-center">Our Demanded Cars</h1></div>
        <div className="flex justify-center">
          <div className="w-[70%] md:w-[90%] grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {
              PromotionImages.map((item) => {
                return (
                  <div className="bg-transparent transition-transform transform hover:scale-110" key={item.key} >

                    <Image src={item.image} alt="image" width={300} height={300} className="   object-cover cursor-pointer " />
                    <div className="my-5 mx-2 cursor-pointer">
                      <p>{item.title}</p>
                      <p className="text-slate-700 font-bold">{item.description}</p>

                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>
      </div>
      <div >
        <div className="grid justify-center items-center mb-16 mt-20">
          {/* <h2 className="font-bold text-sky-700 text-center  mt-8">Service</h2> */}
          <h1 className="text-4xl font-bold my-4 mx-3 text-center md:inline">What type of car are you looking for?</h1></div>
        <div className="flex justify-center">
          <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            {
              mainImages.map((item) => {
                return (
                  <div className=" bg-transparent transition-transform transform hover:scale-110 " key={item.key}>

                    <Image src={item.image} alt="image" width={200} height={400} className="w-full  object-cover cursor-pointer " />

                  </div>

                )
              })
            }
          </div>
        </div>
      </div>
      <div >
        <div className="grid justify-center items-center mb-16 mt-20">
          {/* <h2 className="font-bold text-sky-700 text-center  mt-8">Service</h2> */}
          <h1 className="text-4xl font-bold my-4 mx-3 text-center md:inline">Book your Car Now..!</h1></div>
        <div className="mt-36 mb-36 m-9 mx-9">
          <ContactForm />
        </div>
        <KommunicateChat />
      </div>
    </main>
  )
}
