import Heading from "@/components/heading/heading"
import Image from "next/image"

const About = ()=>{
    return(<section className="grid mt-10 md:mt-0 md:grid-cols-2 gap-5 md:gap-10">
        <div className="md:flex hidden ">
            <Image className="!w-full h-[500px] object-cover" src={"/images/tools.png"} width={500} height={500} alt="Tools"/>
        </div>
        <div className="flex flex-col md:items-start items-center gap-7 md:gap-10 justify-center px-5 md:p-0">
           <Heading title="ABOUT ME" />
            <p className="text-md md:text-start text-center text-xs md:text-sm lg:text-lg">Hi, my name is Rebal Al Barouki. I am an artist and photographer. Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
            <div>
                <button>Call Me</button>
            </div>
        </div>
    </section>)
}
export default About