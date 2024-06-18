import Link from "next/link";


export default function Stats({color , title ,  icon , dis , href}) {

    return (
        <Link href={href} className={`${color} h-[200px] rounded-lg flex flex-col justify-between p-6 py-10 hover:bg-gray-700`}>
            <div className="p-2 bg-gray-50/40 rounded-md w-fit">
                {icon}
            </div>
            <div className="flex gap-2">
                <p className="text-xl font-bold">{dis}</p>
                <p className="text-xl font-bold">:</p>
                <p className="text-xl font-bold">{title}</p>
            </div>
            
        </Link>
    )
}
