"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import t from '../../../messages/translations'

export default function About() {

  const pathName = usePathname()
  const Translation = t('Index', pathName.slice(1, 3))

  return (
    <div id={"about"}>
      <section
        className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
        <motion.div
          className="max-w-xl mx-auto text-center relative"
          initial={{ opacity: 0, translateY: "-100px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{ duration: 1 }}
        >
          <div className="py-4">
            <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
              {Translation.home.about.label1}
            </h3>
            <p className="text-gray-300 leading-relaxed mt-3">
              {Translation.home.about.label2}
            </p>
          </div>
          <div className="mt-5 items-center justify-center gap-3 sm:flex">
            <Link href={`${pathName.slice(0, 3)}/order`} className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto">
              {Translation.home.about.label3}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
