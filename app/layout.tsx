import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/navbar/nav";
import Footer from "@/sections/footer/footer";
import { ReduxProvider } from "./_app";
import BookNow from "@/components/book/book";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rebal Al Barouki Photography",
  description:
    "Rebal Al Barouki Photography – professional photography services capturing your moments with creativity and passion. Explore stunning galleries, learn about our services, and book your personalized photoshoot today.",
  keywords: [
    "photography",
    "professional photoshoot",
    "Rebal Al Barouki",
    "photography services",
    "portfolio",
    "gallery",
    "book a session"
  ].join(", "),
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Rebal Al Barouki Photography",
    description:
      "Professional photography services capturing your moments with creativity and passion. Explore galleries, services, and book your photoshoot today.",
    url: "https://rebalalbarouki.com",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased font-sans`}
      >
        <ReduxProvider>
            <Navbar/>
            {children}
            <Footer/>
            <BookNow/>
        </ReduxProvider>
        
      </body>
    </html>
  );
}
