import { Geist, Geist_Mono } from "next/font/google";
import Hamburger from "@/components/Hamburger/Hamburger";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Farzi London - Modern Indian Restaurant",
  description: "Farzi London redefines modern Indian cuisine in the heart of Haymarket, bringing signature pan-Indian innovation to London.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Hamburger />
        {children}
      </body>
    </html>
  );
}
