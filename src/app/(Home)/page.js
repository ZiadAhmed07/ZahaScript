

import Gradients from "../../components/gradients/gradients";
import Image from "next/image";
import Link from "next/link";
import imgHeroSection from "/public/images/hero.png"
import bgHero from "/public/images/bg-pattern.webp"
import "./HomeStyle.css"
import About from "../../components/AboutSection/About";
import Feature from "../../components/Feature/Feature";
import Testimonials from "../../components/Testimonials/Testimonials";
import Stats from "../../components/Stats/Stats";
import Pricing from "../../components/Pricing/Pricing";



export default function Home() {


  return (
    <main id={"homePage"}>

      <Gradients/>
      <section id="heroSection" className="animation-BottonToTop"> 
      <div id={"DivMainTextHeroSection"}>
        <Image src={bgHero} alt="..." id={"bgHero"} width={1000} priority height={1000} />
        <div id={"textHeroSection"}>
          <span>احدث التكنولجيا في عالم الانترنت</span>
          <h2 className=" w-full md:w-[700px]">المكان الامثل لانشاء موقعك الالكتروني</h2>
          <p>اكتشف معنا كيف يمكننا تعزيز وجودك عبر الانترنت وتحقيق أهدافك التكنولوجيه</p>
          <button className="button">
            <Link href="/order" className=" w-full h-full pt-2">ابدأ موقعك الان</Link>
          </button>
        </div>
      </div> 
        <div id="imgHeroSection">
          <Image src={imgHeroSection} alt="imgHeroSection"/>
          <span></span>
        </div>
      </section>
      <About/> 

      <Feature/>      
     <Testimonials/>
      <Stats/>
      <Pricing/>
      
    </main>
  );
}
