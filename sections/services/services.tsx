"use client"
import Heading from "@/components/heading/heading"
import Style from "./style.module.css"
import { services } from "@/data/data"

const Services = ()=>{
    return(<section className={`${Style.imgBg} py-20 flex flex-col gap-7 md:gap-20`}>
            <div className="flex justify-center">
                <Heading isCenter={true} title="SERVICES" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 text-[var(--background)] p-5 sm:px-10 md:px-20 ">
            {services.map((e, i) => (
                <div
                    key={`Service_${e.name}_${i}`}
                    className="relative group flex flex-col justify-center items-center gap-4 bg-[var(--primary)] p-8 text-center overflow-hidden rounded-2xl"
                    >
                    {/* Animated luxury border */}
                    <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent" />
                    <span className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${Style.shineDiv}`}/>


                    {/* Content */}
                    <div className="text-5xl">{e.icon}</div>


                    <h3 className="font-serif font-semibold text-lg md:text-xl lg:text-2xl tracking-wide">
                    {e.name}
                    </h3>
                    <p
                    className="text-center text-xs lg:text-sm opacity-90 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: e.description }}
                    />
                    </div>
                    ))}
            </div>

    </section>)
}
export default Services