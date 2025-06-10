import type { Metadata } from "next";
import PagesLayout from './components/layouts/PagesLayout';
import './globalStyles/normalize.css';
import "./globalStyles/null.css";
import "./globalStyles/globals.scss";

export const metadata: Metadata = {
  title: "Luxtrip | Travel Agency",
  description: "Luxtrip is a travel agency that offers a wide range of travel services, including flight bookings, hotel reservations, and vacation packages. Our mission is to provide our customers with the best travel experiences at competitive prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PagesLayout>{children}</PagesLayout>
}
