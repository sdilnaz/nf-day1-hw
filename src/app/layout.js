import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar"
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Blog",
  description: "HW1-day1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
