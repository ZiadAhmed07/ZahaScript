 "use client"
import Select from 'react-select';
import { useState } from "react"
import { getCookie } from 'cookies-next';
import axios from 'axios';
import { Domin } from '@/api/data';
import Loader from '@/components/loader/loader';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


const options = [
    { id: 1, value: 'HTML', label: 'HTML' },
    { id: 2, value: 'CSS', label: 'CSS' },
    { id: 3, value: 'JavaScript', label: 'Java Script' },
    { id: 4, value: 'React.js', label: 'React.js' },
    { id: 5, value: 'Next.js', label: 'Next.js' },
    { id: 6, value: 'Bootstrap', label: 'Bootstrap' },
    { id: 7, value: 'tailwind', label: 'tailwind' },
    { id: 8, value: 'Sass', label: 'Sass' },
    { id: 9, value: 'Vue.js', label: 'Vue.js' },
    { id: 10, value: 'Angular.js', label: 'Angular.js' },

    { id: 11, value: 'php', label: 'php' },
    { id: 12, value: 'C#', label: 'C#' },
    { id: 13, value: 'Node.js', label: 'Node.js' },
    { id: 14, value: 'Ruby', label: 'Ruby' },
    { id: 15, value: 'java', label: 'java' },
    { id: 16, value: 'python', label: 'python' },

    { id: 17, value: 'Laravel', label: 'Laravel' },
    { id: 18, value: 'Net', label: '.Net' },
    { id: 19, value: 'Express', label: 'Express' },
    { id: 20, value: 'django', label: 'django' },
    { id: 21, value: 'nest.js', label: 'nest.js' },

    { id: 22, value: 'MySQl', label: 'MySQl' },
    { id: 23, value: 'mongoDB', label: 'mongoDB' },

    { id: 24, value: 'adobeXd', label: 'adobe Xd' },
    { id: 25, value: 'figma', label: 'figma' },

    { id: 26, value: 'SEO', label: 'SEO' },
    { id: 27, value: 'Marketting', label: 'Marketting' },
    { id: 28, value: 'UiDesigner', label: 'Ui&Ux designer' },

    { id: 29, value: 'FullStack Developer', label: 'FullStack Developer' },
    { id: 30, value: 'Mobile Application Developer', label: 'Mobile Application Developer' },
    { id: 31, value: 'Flutter', label: 'Flutter' },
    { id: 32, value: 'Dart', label: 'Dart' },
    { id: 33, value: 'مهاره غير موجوده', label: 'مهاره غير موجوده' },


];

const options2 = [
    { id: 1, value: 'Ui&Ux Designer', label: 'Ui&Ux Designer' },
    { id: 2, value: 'FrontEnd Developer', label: 'FrontEnd Developer' },
    { id: 3, value: 'BackEnd Developer', label: 'BackEnd Developer' },
    { id: 4, value: 'FullStack Developer', label: 'FullStack Developer' },
    { id: 5, value: 'Mobile Application Developer', label: 'Mobile Application Developer' },
    { id: 6, value: 'Marketting', label: 'Marketting' },
    { id: 7, value: 'SEC', label: 'SEC' },
]


export default function Form() {

    const [name , setName] = useState('')
    const [phoneNumber , setPhoneNumber] = useState('')
    const [qualification , setQualification] = useState('')
    const [address , setAddress] = useState('')
    const [yearsOfExperience , setyearsOfExperience] = useState("")
    const [jobs, setJobs] = useState(null);
    const [skills, setSkills] = useState(null);
    const [loader, setLoader] = useState(false)
    const router = useRouter()

    function funLoader(){
        if(loader){
            return(
                <Loader/>
            )
        }
    }

    function postData(e) {
        e.preventDefault()
        setLoader(true)

        let userData = false
        if (getCookie("userData")) {
            const user = JSON.parse(getCookie("userData"))
            userData = user
        }

        let countSkills = skills.length
        let arrToStrOfSkills = ""
        for(let i = 0; i < countSkills; i++){
            arrToStrOfSkills += `${skills[i].value} `
        }

        if(userData){
            axios({
                method:"post",
                url:`${Domin}/api/auth/create/job`,
                headers:{
                    "Authorization": `Bearer ${userData.token}`
                },
                data:{
                    user_id : userData.id,
                    realName : name,
                    phoneNumber : phoneNumber,
                    qualification : qualification,
                    address : address,
                    yearsOfExperience : yearsOfExperience,
                    job : jobs.value,
                    skills : arrToStrOfSkills
                }
            }).then((res)=>{
                if(res.data.message === "Job Created Successfully."){
                    setLoader(false)
                    router.replace('/')
                    return toast.success('تم ارسال طلبك بنجاح')
                }
                else{
                    setLoader(false)
                    return toast.error('حدث حطأ ما! حاول مجددا')
                }
            }).catch((err)=>{
                setLoader(false)
                return toast.error('حدث خطأ ما! حاول مجددا')
            })
        }

        if(!userData){
            localStorage.setItem("prevUrl" , "/jobs")
            router.replace("user/login")
            return toast.warn('ينبغى عليك التسجيل اولا') 
        }


    }

    return (
        <form onSubmit={postData} >
            {funLoader()}
            <div className="mt-8 space-y-4">

                <div>
                    <label htmlFor="hs-cover-with-gradient-form-text-1" className="sr-only">الاسم بالكامل</label>
                    <div className="relative">
                        <input type="text" onChange={(e)=>{setName(e.target.value)}} required id="hs-cover-with-gradient-form-text-1" className="py-3 ps-11 pe-4 block w-full bg-gray-700 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11" placeholder="الاسم بالكامل" />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="hs-cover-with-gradient-form-number-1" className="sr-only">الهاتف</label>
                    <div className="relative">
                        <input type="number" onChange={(e)=>{setPhoneNumber(e.target.value)}} required minLength={8} id="hs-cover-with-gradient-form-number-1" className="py-3 ps-11 pe-4 block w-full bg-gray-700 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11" placeholder="الهاتف" />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="hs-cover-with-gradient-form-text-2" className="sr-only">المؤهل الدراسي</label>
                    <div className="relative">
                        <input type="text" onChange={(e)=>{setQualification(e.target.value)}} required id="hs-cover-with-gradient-form-text-2" className="py-3 ps-11 pe-4 block w-full bg-gray-700 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11" placeholder="المؤهل الدراسي" />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-backpack4" viewBox="0 0 16 16">
                                <path d="M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                                <path d="M8 0a2 2 0 0 0-2 2H3.5a2 2 0 0 0-2 2v1c0 .52.198.993.523 1.349A.5.5 0 0 0 2 6.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.5a.5.5 0 0 0-.023-.151c.325-.356.523-.83.523-1.349V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2-2m0 1a1 1 0 0 0-1 1h2a1 1 0 0 0-1-1M3 14V6.937q.24.062.5.063h4v.5a.5.5 0 0 0 1 0V7h4q.26 0 .5-.063V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m9.5-11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="hs-cover-with-gradient-form-text-3" className="sr-only">العنوان </label>
                    <div className="relative">
                        <input type="text" onChange={(e)=>{setAddress(e.target.value)}} required id="hs-cover-with-gradient-form-text-3" className="py-3 ps-11 pe-4 block w-full bg-gray-700 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11" placeholder="العنوان" />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-house-add" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="hs-cover-with-gradient-form-number-2" className="sr-only">سنوات الخبرة </label>
                    <div className="relative">
                        <input type="number" onChange={(e)=>{setyearsOfExperience(e.target.value)}} required min={0} max={10} id="hs-cover-with-gradient-form-number-2" className="py-3 ps-11 pe-4 block w-full bg-gray-700 border-white/20 text-white placeholder:text-white rounded-lg text-sm focus:border-white/30 focus:ring-white/30 sm:p-4 sm:ps-11" placeholder="سنوات الخبرة " />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-diamond" viewBox="0 0 16 16">
                                <path d="M7.987 16a1.53 1.53 0 0 1-1.07-.448L.45 9.082a1.53 1.53 0 0 1 0-2.165L6.917.45a1.53 1.53 0 0 1 2.166 0l6.469 6.468A1.53 1.53 0 0 1 16 8.013a1.53 1.53 0 0 1-.448 1.07l-6.47 6.469A1.53 1.53 0 0 1 7.988 16zM7.639 1.17 4.766 4.044 8 7.278l3.234-3.234L8.361 1.17a.51.51 0 0 0-.722 0M8.722 8l3.234 3.234 2.873-2.873c.2-.2.2-.523 0-.722l-2.873-2.873zM8 8.722l-3.234 3.234 2.873 2.873c.2.2.523.2.722 0l2.873-2.873zM7.278 8 4.044 4.766 1.17 7.639a.51.51 0 0 0 0 .722l2.874 2.873z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div id="ButSelect">
                    <div className='my-5 '>
                        <Select
                            placeholder={"الوظيفة : FronEnd Developer"}
                            defaultValue={jobs}
                            onChange={setJobs}
                            options={options2}
                            isClearable={true}
                            className="text-right"
                            required
                        />
                    </div>

                    <div >
                        <Select
                            required
                            placeholder={"المهارات.... : js css html"}
                            defaultValue={skills}
                            onChange={setSkills}
                            options={options}
                            isMulti
                            isClearable={true}
                            className="text-right"
                        />
                    </div>
                </div>

                <div className="grid">
                    <button type="submit" className="sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        تقديم طلب وظيفه
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div>
                <div className="bg-blue-600 py-3 text-xl rounded-lg">
                    <p>باقى التفاصيل في المقابله الشخصيه</p>
                </div>
            </div>
        </form>
    )
}
