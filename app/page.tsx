import About from "@/sections/about/about";
import Gallery from "@/sections/gallery/gallery";
import Hero from "@/sections/hero/hero";
import Services from "@/sections/services/services";
import Testimonals from "@/sections/testimonials/testimonials";

export default function Home() {
  return (<main>

    {/* Hero Section */}
    <Hero/>
    <div className="flex flex-col gap-10 md:gap-20">
      {/* About Us */}
      <About/>
      {/* Gallery */}
      <Gallery/>
      {/* Services */}
      <Services/>
      {/* Testimonials */}
      <Testimonals/>
    </div>

  </main>
  );
}
