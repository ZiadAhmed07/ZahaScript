
import img1 from "/public/icon/icons8-facebook-94.png"
import img2 from "/public/icon/icons8-whatsapp-94.png"
import img3 from "/public/icon/icons8-linked-in-94.png"
import img4 from "/public/icon/icons8-google-94.png"
import Image from "next/image"
import Link from "next/link"
import Form from "./form"



export default function page() {


    return (
        <div>

            <div className="py-28 bg-gray-900 mt-28">
                <div className="animation-BottonToTop max-w-screen-xl mx-auto px-4 flex-wrap gap-x-12 justify-center lg:justify-between items-center md:flex md:px-8 lg:flex-nowrap ">
                    <div className="max-w-xl space-y-3">
                        <h3 className="text-blue-400 text-sm font-semibold">
                            مواقع التواصل الاجتماعى
                        </h3>
                        <p className="text-white text-3xl font-semibold sm:text-4xl">
                            تواصل معنا عبر مواقع التواصل الاجتماعى
                        </p>
                        <p className="text-gray-300">
                            سارع في التواصل معنا , موقعك لا يتحمل الكثير من الانتظار
                        </p>
                    </div>
                    <div className="flex-none mt-12 text-white lg:mt-0">
                        <ul className="grid grid-cols-2 gap-2 items-center justify-center [&>*]:bg-gray-700 [&>*]:w-full [&>*]:h-20 [&>*]:flex sm:[&>*]:px-14">
                            {
                                [
                                    { img: img1, link: "https://www.facebook.com/profile.php?id=100064055737356" },
                                    { img: img2, link: "https://api.whatsapp.com/send?phone+201287972828&amp;text=hello" },
                                    { img: img3, link: "#" },
                                    { img: img4, link: "mailto:ziad07139@gamil.com" }
                                ].map((el,idx) => {
                                    return (
                                        <li key={idx}>
                                            <Link
                                                href={el.link}
                                                target={"_blank"}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}>
                                                <Image width={60} height={60} src={el.img} alt="..." />
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <Form/>

        </div>
    )
}
