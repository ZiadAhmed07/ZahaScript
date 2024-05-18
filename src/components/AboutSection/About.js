"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'


export default function About() {
  return (
    <div id={"about"}>
      <section 
        className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8"
      >
    <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
    <motion.div 
        className="max-w-xl mx-auto text-center relative"
        initial={{ opacity: 0 , translateY : "-100px"}} 
        whileInView={{ opacity: 1 , translateY : "0px"}}
        transition={{duration:1}}    
    >
        <div className="py-4">
            <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
                نحن شركة برمجة متخصصه في مجال إنشاء مواقع الويب و تطبيقات الموبايل
            </h3>
            <p className="text-gray-300 leading-relaxed mt-3">
                يتمثل هدفنا في تحويل أفكارك الى واقع رقمي , حيث نجمع بين الابداع والابتكار لتلبيه احتياجات عملائنا , نسعى دائما لتحقيق تجارب رقميه استثنائيه. 
            </p>
        </div>
        <div className="mt-5 items-center justify-center gap-3 sm:flex">
            <Link href="/order" className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto">
                انشئ موقعك الان
            </Link>
        </div>
    </motion.div>
</section>
    </div>
  )
}
