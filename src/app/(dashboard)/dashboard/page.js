import Stats from "./_components/Stats/Stats";
import bg1 from "/public/images/hero-background.png";
import Image from "next/image"
import Time from "./_components/time";
import CheckAdmin from "./_components/checkAdmin";
import IndexStats from "./_components/Stats/indexStats";
import NewOrder from "./_components/newOrder";


export default function Home() {
  

  const now = new Date()
  const date = (new Intl.DateTimeFormat('ar',{dateStyle:'full'})).format(now)

  return (
    <main className="flex flex-col gap-6" dir="rtl">
      <CheckAdmin/>
      <div className="relative w-full h-[220px] bg-gray-500 rounded-lg overflow-hidden">
        <Image src={bg1} alt="..." className="w-full h-full absolute rotate-"/>
        <div className="absolute w-full h-full p-6 md:p-10 z-10 text-left">
          <Time/>
          <p className={"text-gary-200 font-bold text-[20px]"}>{date}</p>
        </div>
      </div>

      <IndexStats/>
      <NewOrder/>
      
    </main>
  );
}
