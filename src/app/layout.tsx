import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Forum } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import StoreProvider from "./components/provirer/Provider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const forum400 = Forum({
  subsets: ["latin"],
  weight: "400"
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${forum400.className}`}>
        <div className="wrapper">
          <StoreProvider>
            <Header/>
            {children}
            <Footer/>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
