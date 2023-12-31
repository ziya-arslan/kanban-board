import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Script from "next/script";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        <Sidebar />
        <div className="p-4 sm:ml-60">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
