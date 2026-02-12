import Image from "next/image"
import Style from "./hero.module.css"

const Hero = () => {
  return (
    <section>
      <div className="h-[450px] md:h-[500px] lg:h-[700px] relative overflow-hidden">
        {/* Background */}
        <Image
          src="/images/banner.jpg"
          fill
          className="object-cover"
          priority
          alt="Hero-banner"
        />

        {/* Scrolling container */}
        <div className={`flex absolute top-0 right-5 md:right-20 z-10 ${Style.wrapper}`}>
          <div className={Style.images}>
            {/* first copy */}
            <Image
              src="/images/strip_1.png"
              width={400}
              height={1200}
              alt="Gallery"
              className="w-[120px] sm:w-[200px] lg:w-[250px] xl:w-[350px]"
              priority
            />

            {/* second copy (clone) */}
            <Image
              src="/images/strip_2.png"
              width={400}
              height={1200}
              className="w-[120px] sm:w-[200px] lg:w-[250px] xl:w-[350px]"
              alt="Gallery clone"
              priority
            />
          </div>
        </div>

        {/* Cloud */}
        <div className="absolute -bottom-15 xs:-bottom-30 sm:-bottom-45 md:-bottom-50 xl:-bottom-85 z-20 -left-20 -right-20">
          <Image
            src="/images/blur.png"
            width={400}
            height={100}
            className="!w-full object-cover"
            priority
            alt="cloud"
          />
          
        </div>
        <h2  className="uppercase font-serif absolute left-0 right-0 text-center text-sm sm:text-xl md:text-2xl lg:text-4xl bottom-5 z-21 text-[var(--light)] px-2 sm:px-10 md:px-20">
          Photography that speaks without words
        </h2>
      </div>
      {/* For Mobile Size */}
        <div className={`hidden ${Style.wrapperHorizon}`}>
          <div className={Style.imagesHorizon}>
            {/* first copy */}
            <Image
              src="/images/strip_horizon_1.png"
              width={400}
              height={1200}
              alt="Gallery"
              priority
            />

            {/* second copy (clone) */}
            <Image
              src="/images/strip_horizon_2.png"
              width={400}
              height={1200}
              alt="Gallery clone"
              priority
            />
            {/* third copy */}
            <Image
              src="/images/strip_horizon_1.png"
              width={400}
              height={1200}
              alt="Gallery"
              priority
            />
          </div>
        </div>
    </section>
  )
}

export default Hero
