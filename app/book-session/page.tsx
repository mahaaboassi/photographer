import BookSession from "@/components/book/bookSession"
import Heading from "@/components/heading/heading"

const BookASession = ()=>{
    return(    <main className="bg-[var(--primary)] text-white flex flex-col">
      {/* Hero Section */}
      <div
        className="h-[500px] relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bgBook.jpg')" }}
      >
        <div className="absolute inset-0 z-1 flex flex-col justify-center items-center gap-6 ">
            <Heading title="Book a Session" isCenter />
            <p className="max-w-2xl text-center text-[var(--grey-2)] px-4 sm:px-10">
            Reserve your session today and explore our curated photography services designed to bring your vision to life.
            </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)/70] to-transparent">

        </div>
      </div>
            {/* Content */}
      <div className="relative z-10 -mt-10 px-4 sm:px-10 md:px-20 py-20">
            <BookSession/>
      </div>

    </main>)
}
export default BookASession