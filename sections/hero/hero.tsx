import Image from "next/image"
import Style from "./hero.module.css"

const Hero = () => {
  return (
    <section>
      <div className="h-[700px] relative overflow-hidden">
        {/* Background */}
        <Image
          src="/images/banner_large.jpg"
          fill
          className="object-cover"
          priority
          alt="Hero-banner"
        />

        {/* Scrolling container */}
        <div className={`absolute top-0 right-20 z-10 ${Style.wrapper}`}>
          <div className={Style.images}>
            {/* first copy */}
            <Image
              src="/images/strip_border.png"
              width={400}
              height={1200}
              alt="Gallery"
              priority
            />

            {/* second copy (clone) */}
            <Image
              src="/images/strip_border.png"
              width={400}
              height={1200}
              alt="Gallery clone"
              priority
            />
          </div>
        </div>

        {/* Cloud */}
        <div className="absolute -bottom-30 z-20 left-0 right-0">
          <Image
            src="/images/cloud.png"
            width={400}
            height={100}
            className="w-full object-cover"
            priority
            alt="cloud"
          />
          
        </div>
        <h2 className="font-serif absolute left-0 right-0 text-center text-5xl bottom-5 z-21 text-[var(--light)]">Photography that speaks without words</h2>
      </div>
    </section>
  )
}

export default Hero
