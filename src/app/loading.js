import Loader from "@/components/loader/loader";
import Svg from "@/components/Svg/svg";

export default function Loading() {

    return (
        <div className="w-full h-screen absolute bg-gray-900 top-0 right-0 z-50">
              <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
              <Svg/>
            <Loader/>
        </div>
        
    )
  }