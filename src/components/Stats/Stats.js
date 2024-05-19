
"use client"

import {motion } from "framer-motion"

export default function Stats() {

    const stats = [
        {
            data: "24+",
            title: "العملاء"
        },
        {
            data: "58+",
            title: "المشاريع"
        },
        {
            data: "30+",
            title: "كل التقيمات"
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
                        كن من المحظوظين بتعاملك معنا
                    </h3>
                    <p className="mt-3 text-gray-300">
                        أنضم الى عائلة ZaHa Script
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
