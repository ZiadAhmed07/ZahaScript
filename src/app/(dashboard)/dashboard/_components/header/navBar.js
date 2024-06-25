import Image from "next/image"
import NewOrder from "../NewOrder"
import SitbarMobile from "./sitbarMobile"
import Avatar from "/public/images/3.png"
import Logo from "/public/logo.png"

export default function Navbar() {
    return (
        <div className="bg-gray-700 w-full h-[70px] z-50 fixed top-0 right-0 flex justify-between items-center px-6 shadow-lg">
                <div className="flex gap-3">
                    <Image src={Logo} alt="..." width={60} height={30}/>
                </div>
                <div className="flex gap-6">
                    <SitbarMobile/>
                    <NewOrder/>
                    <Image src={Avatar} alt="...." width={50} height={50} className="rounded-full" />
                </div>
        </div>
    )
}
