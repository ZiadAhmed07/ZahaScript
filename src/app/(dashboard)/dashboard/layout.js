import "../../globals.css"
import Navbar from "./_components/header/navBar";
import Sitbar from "./_components/header/sitbar";

export const metadata = {
  title: "dashboard",
  description: "The best company for creating websites",
};

export default function RootLayout({ children }) {
  return (
    <div className="dashbordContainer">
      <Navbar/>
      <Sitbar/>
      <div className=" px-2 pt-[100px] sm:pr-[30px] md:pr-[210px] pb-[30px] sm:pl-[30px] bg-gray-900 min-h-screen">
         {children}
      </div>
     
    </div>
  );
}
