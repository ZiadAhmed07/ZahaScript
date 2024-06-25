"use client"

import {motion} from "framer-motion"
import { usePathname } from "next/navigation"
import t from "../../../messages/translations"

export default function Feature() {

    const pathName = usePathname()

    const translation = t('Index',pathName.slice(1,3))

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            title: translation.home.feature?.label2, 
            desc: translation.home.feature?.label2f
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>,
            title: translation.home.feature?.label3,
            desc: translation.home.feature?.label3f
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: translation.home.feature?.label4,
            desc: translation.home.feature?.label4f
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: translation.home.feature?.label5,
            desc: translation.home.feature?.label5f
        },
    ]

  return (
    <section className="relative py-28 bg-gray-900" id="feature">
    <motion.div 
        className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8"
        initial={{ opacity: 0 , translateY : "-100px"}} 
        whileInView={{ opacity: 1 , translateY : "0px"}}
        transition={{duration:1}}    
    >
        <div className="max-w-xl">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                {translation.home.feature?.label1}
            </h3>
            <p className="mt-3">
                {translation.home.feature?.label1f}
            </p>
        </div>
        <div className="mt-12 lg:mt-0">
            <ul className="grid gap-8 sm:grid-cols-2">
                {
                    features.map((item, idx) => (
                        <li key={idx} className="flex gap-x-4">
                            <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-lg text-gray-100 font-semibold">
                                    {item.title}
                                </h4>
                                <p className="mt-3">
                                    {item.desc}
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </motion.div>
    <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
</section>

  )
}
