import Image from "next/image";
import Link from "next/link";
import bgHero from "/public/images/bg-pattern.webp";
import "./HomeStyle.css";
import Gradients from "@/components/gradients/gradients";
import About from "@/components/AboutSection/About";
import Feature from "@/components/Feature/Feature";
import Stats from "@/components/Stats/Stats";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import { useTranslations } from 'next-intl';

export default function Home({ params }) {
  const t = useTranslations('Index');

  return (
    <main id="homePage">
      <Gradients />
      <section id="heroSection" className="animation-BottonToTop">
        <div id="DivMainTextHeroSection">
          <Image src={bgHero} alt="..." id="bgHero" width={1000} priority height={1000} />
          <div id="textHeroSection">
            <span>{t("home.heroSection.1")}</span>
            <h2 className="w-full md:w-[700px]">{t("home.heroSection.2")}</h2>
            <p>{t("home.heroSection.3")}</p>
            <button className="button">
              <Link href={`/${params.locale}/order`} className="w-full h-full pt-2">
                {t("home.heroSection.4")}
              </Link>
            </button>
          </div>
        </div>
        <div id="imgHeroSection" className="flex items-center justify-center flex-col">
          <video controls autoPlay muted loop className="w-full h-full border-gray-200 border-solid border-[10px] sm:border-[13px] md:border-[20px]  rounded-2xl">
            <source src="/video1.mp4" type="video/mp4" />
          </video>
          <div className="w-[130px] rounded-3xl sm:w-[180px] lg:w-[200px] border-[50px] sm:border-[70px] border-red-500/0 border-b-gray-200 -translate-y-[50px] sm:-translate-y-[70px]">
          </div>
        </div>
      </section>
      <About />
      <Feature />
      <div id="Testimonials">
        <Testimonials />
      </div>
      <Stats />
      <Pricing />
    </main>
  );
}
