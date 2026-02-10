import Image from "next/image"

const Navbar = ()=>{
    return(<nav className="fixed z-1000 left-0 right-0 p-5 sm:px-10 md:px-20  ">
        <div className="">
            <Image width={150} height={100} className="w-[120px] h-fit" src={"/logo.png"} alt="logo" />
        </div>
    </nav>)
}
export default Navbar