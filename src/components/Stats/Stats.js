
"use client"

import {motion } from "framer-motion"
import { usePathname } from "next/navigation"
import t from "../../../messages/translations"

export default function Stats() {

    const pathName = usePathname()
    const translation = t('Index',pathName.slice(1,3))

    const stats = [
        {
            data: "24+",
            title: translation.home.stats.label5
        },
        {
            data: "58+",
            title: translation.home.stats.label4
        },
        {
            data: "4.8",
            title: translation.home.stats.label3
        },
    ]

  return (
    <div>
       <section className="py-28 bg-gray-900 relative"> 
            <motion.div 
                className="max-w-screen-xl mx-auto px-4 md:px-8"
                initial={{ opacity: 0 , translateY : "-100px"}} 
                whileInView={{ opacity: 1 , translateY : "0px"}}
                transition={{duration:1}}  
            >
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        {translation.home.stats.label1}
                    </h3>
                    <p className="mt-3 text-gray-300">
                        {translation.home.stats.label2}
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="w-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto">
                                    <h4 className="text-4xl text-white font-semibold">{item.data}</h4>
                                    <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </motion.div>
        </section>
    </div>
  )
}
