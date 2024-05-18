import TeamCom from "@/components/team/Team"
import Boss from "../../../components/Boss/Boss"




export default function Team() {

    return (
        <div className=" mt-28 p-10 ">
            <section className="py-14 relative">
                <div className='-z-10 absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
                <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                    <div className="max-w-xl mx-auto">
                        <h3 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                            المديرين
                        </h3>
                        <p className="text-gray-100 mt-3">
                            لديهم القدره على تحويل افكارك الى واقع ملموس
                        </p>
                    </div>
                    <div className="mt-12 w-full">
                        <Boss/>
                    </div>
                </div>
            </section>
            <section className="py-14 relative">
            <div className='-z-10 absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
                <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                    <div className="max-w-xl mx-auto">
                        <h3 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                            فريق العمل
                        </h3>
                        <p className="text-gray-100 mt-3">
                            فريق العمل لدينا هو مجموعه مذهله من الشباب الملهمين الذين يتمتعون بروح التعاون و الابتكار يستمتعون بالتنوع و الاحترافية , حيث يجمعون بين الخبرات المتنوعه لتحقيق أهدافنا المشتركة
                        </p>
                    </div>
                    <div className="mt-12 w-full ">
                        <TeamCom/>
                    </div>
                </div>
            </section>
        </div>
    )
}

