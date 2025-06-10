"use client";
import { Forum } from "next/font/google";
import StoreProvider from "../../components/provirer/Provider";
import Layout from "./Layout";

const forum400 = Forum({
  subsets: ["latin"],
  weight: "400",
});

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${forum400.className}`}>
        <div className="wrapper">
          <StoreProvider>
            <Layout>
                {children}
            </Layout>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
};

export default PagesLayout;
