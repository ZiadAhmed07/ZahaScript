import Svg from "@/components/Svg/svg";
import Image from "next/image";
import Link from "next/link"



function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
            <Svg/>
            <div className="flex items-center gap-6 flex-col">
                <p className="font-extrabold text-7xl md:text-9xl">Error 404</p>
                <p className="text-xl font-bold">هذا المسار غير موجود </p>
                <Link className=" py-2 px-6 rounded-md bg-gray-700 hover:bg-blue-500" href={"/"}>
                    الرجوع الى الصفحه الرئيسيه
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage;