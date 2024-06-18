import Svg from "@/components/Svg/svg"


export default function page() {

  const Arr1 = [
    {
      name: "يعمل علي جميع الاجهزة",
      icon: <svg class="mx-auto h-auto w-7 md:w-9 text-gray-100 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
    },
    {
      name: "قابل التعديل في اى وقت",
      icon: <svg class="mx-auto h-auto w-7 md:w-9 text-gray-100 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg>
    },
    {
      name: "تفاعلى مع المستخدم",
      icon: <svg class="mx-auto h-auto w-7 md:w-9 text-gray-100 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
    },
  ]

  return (
    <div >

      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-20 bg-gray-900" >
        <div className="animation-BottonToTop">

        <Svg/>

        <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center" >
          <h2 class="text-3xl lg:text-4xl text-gray-50 font-bold dark:text-gray-200">
            أستكشف الاعمال
          </h2>
          <p class="mt-3 text-gray-100 dark:text-gray-200">
            تتميز مشاريعنا ب التالى :
          </p>
        </div>

        <div class="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">

          {
            Arr1.map((el)=>{
              return(
                <div class="col-span-6 col-start-4 sm:col-span-4 text-center">
                {el.icon}
                <div class="mt-2 sm:mt-6">
                  <h3 class="text-lg font-semibold text-gray-50 dark:text-gray-200">
                    {el.name}
                  </h3>
                </div>
              </div>
              )
            })
          }
        </div>
        </div>
      </div>

      <main className="relative py-20 bg-gray-900 ">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto animation-BottonToTop" >
          <div class="grid lg:grid-cols-3 gap-6">
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return (
                  <a class="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                      <img class="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Image Description" />
                    </div>

                    <div class="absolute top-0 inset-x-0 z-10">
                      <div class="p-4 flex flex-col h-full sm:p-6">

                        <div class="flex items-center">
                          <div class="flex-shrink-0">
                            <img class="size-[46px] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                          </div>
                          <div class="ms-2.5 sm:ms-4">
                            <h4 class="font-semibold text-white">
                              Gloria
                            </h4>
                            <p class="text-xs text-white/[.8]">
                              May 30, 2021
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div class="absolute bottom-0 inset-x-0 z-10">
                      <div class="flex flex-col h-full p-4 sm:p-6">
                        <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                          What CFR (Conversations, Feedback, Recognition) really is about
                        </h3>
                        <p class="mt-2 text-white/[.8]">
                          For a lot of people these days, Measure What Matters.
                        </p>
                      </div>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}
