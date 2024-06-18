import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";


import "../../globals.css"


export const metadata = {
  title: "ZaHa Script",
  description: "The best company for creating websites",
};

export default function RootLayout({ children }) {
  return (
      <div>
        <Header/>
        <div className="container">
          {children}
        </div>
        <Footer/>
      </div>
  );
}
