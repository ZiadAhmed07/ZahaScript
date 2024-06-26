"use client"

import { Domin } from '@/api/data';
import Loader from '@/components/loader/loader';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import t from '../../../../../messages/translations';


export default function Form(){

    const [loader, setLoader] = useState(false)
    const router = useRouter()
    const pathName = usePathname()
    const [ phoneNumber , setPhoneNumber] = useState('')
    const [ message , setMessage ] = useState('')
    
    const translation = t('Index',pathName.slice(1,3))

    function funLoader(){
        if(loader){
            return(
                <Loader/>
            )
        }
    }

    function postData(e){
        e.preventDefault()
        setLoader(true)
        
        let userData = false

        if(getCookie("userData")){
            const user = JSON.parse(getCookie("userData"))
            userData = user
        }

        if(userData){
            axios({
                method:'post',
                url:`${Domin}/api/auth/create/contact`,
                headers:{
                    'Authorization': `Bearer ${userData.token}`
                },
                data:{
                    phoneNumber : phoneNumber,
                    message : message,
                    user_id : userData.id
                }
            }).then((res)=>{
                if(res.data.message === "Contact Created Successfully."){
                    setLoader(false)
                    router.replace(`${pathName.slice(0, 3)}`)
                    return toast.success(translation.contact.form.mess.label1)
                }
                else{
                    setLoader(false)
                    return toast.error(translation.contact.form.mess.label2)
                }
            }).catch((err)=>{
                setLoader(false)
                return toast.error(translation.contact.form.mess.label3)
            })
        }

        if(!userData){
            localStorage.setItem("prevUrl" , `${pathName.slice(0, 3)}/contact`)
            router.replace(`${pathName.slice(0, 3)}/user/login`)
            return toast.warn(translation.contact.form.mess.label4) 
        }

    }

    return(
        <main className="relative py-28 bg-gray-900">
        {funLoader()}
        <div className="relative z-10 max-w-screen-xl mx-auto text-600 sm:px-4 md:px-8 animation-BottonToTop">
            <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                <h3 className="text-blue-400 font-semibold">
                    {translation.contact.form.label1}
                </h3>
                <p className="text-white text-3xl font-semibold sm:text-4xl">
                {translation.contact.form.label2}
                </p>
                <p className="text-gray-300">
                {translation.contact.form.label3}
                </p>
            </div>
            <div className="mt-12 mx-auto px-4 p-8 bg-gray-700 sm:max-w-lg sm:px-8 sm:rounded-xl">
                <form
                    className="space-y-5"
                    onSubmit={(e)=>{postData(e)}}
                >
                    <div>
                        <label className="font-medium">
                        {translation.contact.form.label4}
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-300 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                        {translation.contact.form.label5}
                        </label>
                        <div className="relative mt-2">
                            <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                    <option>Eg</option>
                                </select>
                            </div>
                            <input
                                type="number"
                                onChange={(e)=>{setPhoneNumber(e.target.value)}}
                                required
                                className="w-full pl-[4.5rem] pr-3 py-2 text-gray-300 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="font-medium">
                        {translation.contact.form.label6}
                        </label>
                        <textarea required onChange={(e)=>{setMessage(e.target.value)}} className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none text-gray-200 border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                    </div>
                    <input
                        value={translation.contact.form.label7} type={"submit"} className="w-full text-gray-300 px-4 py-2 font-medium bg-gray-800 hover:bg-gray-900 active:bg-gray-900 rounded-lg duration-150"
                    />
                </form>
            </div>
        </div>
        <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
    </main>
    )
}