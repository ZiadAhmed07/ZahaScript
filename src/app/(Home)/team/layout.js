

export const metadata = {
  title: "ZaHa Script - Team",
  description: "The best company for creating websites",
};

export default function RootLayout({ children }) {
  return (
    <div className="dashbordContainer">
      {children}
    </div>
  );
}
