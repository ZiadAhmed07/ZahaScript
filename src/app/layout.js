import {Noto_Kufi_Arabic} from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer, toast } from 'react-toastify';
import Cursor from "@/components/cursor/Cursor";
import "./globals.css"
import Script from "next/script";
 
const ibm = Noto_Kufi_Arabic({
   subsets: ["arabic"],
   weight: ['100','200','300','400','500','600','700','800','900']
  });

export const metadata = {
  title: "ZaHa Script",
  description: "The best company for creating websites",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2615618117836366"
          crossorigin="anonymous"
        />
      </head>
      <body className={ibm.className}>
        <ToastContainer theme={"colored"} className="max-sm:w-[320px] top-10"/>
        <NextTopLoader height={5}/>
        {/*<Cursor/>*/}
        <div>
          {children}
        </div>
        </body>
    </html>
  );
}
