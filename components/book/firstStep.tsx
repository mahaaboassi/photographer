import { services } from "@/data/data"
import { ReactNode, useEffect, useState } from "react"
type Service = {
    name: string,
    description: string,
    icon:ReactNode
}
const FirstStep = ({returnService}:{returnService:(service: Service) =>void})=>{
    const [ service, setService ] = useState<Service>({
        name: "",
        description: "",
        icon: <></>
    })
    useEffect(()=>{
        if(!service) return
        returnService(service)
    },[service])
    return(<div className="flex gap-10 flex-col items-center">
        <h2 className="text-lg md:text-2xl font-bold text-center">Choose Your Service</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                services.map((ele,idx)=>{
                    return(<div onClick={()=>setService(ele)} key={`Service_Form_${idx}`} className={`flex flex-col justify-center items-center p-5 border ${(service.name== ele.name ) ? "border-[var(--main)]" : "border-[var(--light)]" } `}>
                        <div>{ele.icon}</div>
                        <h2>{ele.name}</h2>
                    </div>)
                })
            }

        </div>

    </div>)
}
export default FirstStep