import Heading from "@/components/heading/heading"
import Image from "next/image"
import Link from "next/link"

const About = ()=>{
    return(<section className="grid mt-10 md:mt-0 md:grid-cols-2 gap-5 md:gap-10">
        <div className="md:flex hidden ">
            <Image className="!w-full h-[600px] object-cover" src={"/images/tools2.jpg"} width={500} height={500} alt="Tools"/>
        </div>
        <div className="flex flex-col md:items-start items-center gap-7 md:gap-10 justify-center px-5 pr-5 md:p-0 md:pr-20">
           <Heading title="Capturing Moments," secondTitle="Creating Memories" />
            <div className="flex flex-col md:items-start items-center gap-3">
                <p className="text-md md:text-start text-center text-xs md:text-sm lg:text-lg">
                    Hi, my name is Rebal Alaa Al Barouki. I am an expert professional photographer. For the past 7+ years, I've captured important moments for handreds of clients, from intimate portraits to grand weddings.
                </p>
                <p className="text-md md:text-start text-center text-xs md:text-sm lg:text-lg">
                    My approach combines technical excellence with artistic vision, ensuring every shot tells a compelling story. I believe in creating images that evoke emotion and stand the test of time.
                </p>
            </div>
            <div>
                <Link  href="https://wa.me/963956538197" target="_blank">
                    <button>Chat Me</button>
                </Link>
                
            </div>
        </div>
    </section>)
}
export default About