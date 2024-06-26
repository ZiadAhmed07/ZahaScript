import Svg from "@/components/Svg/svg"
import Form from "./form"
import "./orderStyle.css"
import {useTranslations} from 'next-intl';

export default function page() {

    const t = useTranslations('Index');

    return (
        <div id="order">
            <div id={"textOrder"}>
                <h3>{t("order.main.1")}</h3>
                <p>{t("order.main.2")}</p>

                <div>
                    <div className="sm:flex sm:justify-center sm:items-center text-center sm:text-start my-10">
                        <div className="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">

                            <div className="flex justify-center -space-x-3">
                                <img loading="lazy" className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                <img loading="lazy" className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                <img loading="lazy" className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80" alt="Image Description" />
                                <img loading="lazy" className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                                <span className="inline-flex items-center justify-center size-8 rounded-full ring-2 ring-white bg-gray-800 dark:bg-gray-900 dark:ring-gray-800">
                                    <span className="text-xs font-medium leading-none text-white uppercase">7k+</span>
                                </span>
                            </div>

                        </div>

                        <div className="border-t sm:border-t-0 sm:border-s border-gray-50 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0"></div>

                        <div className="pt-5 sm:pt-0 sm:ps-5">
                            <div className="text-lg font-semibold text-gray-100 dark:text-gray-200">{t("order.main.3")}</div>
                            <div className="text-sm text-gray-400">{t("order.main.4")}</div>
                        </div>
                    </div> 
                </div>
                <Form/>
                <Svg/>
            </div>


            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mt-20 mx-auto">
                <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
                    <h3 style={{fontSize:"30px"}}>{t("order.conditions.main")}</h3>
                </div>
                <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-50">
                    {[
                        {
                            titel:t("order.conditions.1.titel"),
                            dis:t("order.conditions.1.dis")
                        },
                        {
                            titel:t("order.conditions.2.titel"),
                            dis:t("order.conditions.2.dis")
                        },
                        {
                            titel:t("order.conditions.3.titel"),
                            dis:t("order.conditions.3.dis")
                        },
                        {
                            titel:t("order.conditions.4.titel"),
                            dis:t("order.conditions.4.dis")
                        },
                        {
                            titel:t("order.conditions.5.titel"),
                            dis:t("order.conditions.5.dis")
                        },
                        {
                            titel:t("order.conditions.6.titel"),
                            dis:t("order.conditions.6.dis")
                        },
                        {
                            titel:t("order.conditions.7.titel"),
                            dis:t("order.conditions.7.dis")
                        },
                        {
                            titel:t("order.conditions.8.titel"),
                            dis:t("order.conditions.8.dis")
                        },
                    ].map((el , idx)=>{
                        return(
                        <div key={idx} className="py-8 first:pt-0 last:pb-0">
                            <div className="flex gap-x-5">
                                <svg className="flex-shrink-0 mt-1 size-6 text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
    
                                <div>
                                    <h3 className="md:text-lg font-semibold text-gray-200 dark:text-gray-200">
                                        {el.titel}
                                    </h3>
                                    <p className="mt-1 text-gray-400">
                                       {el.dis}
                                    </p>
                                </div>
                            </div>
                        </div>
                        )
                    })}


                </div>
            </div>


        </div>
    )
}
