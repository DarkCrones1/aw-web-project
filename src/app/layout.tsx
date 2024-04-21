import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import NavBar from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mundo Artesano® 🗿",
  description: "Bienvenido a Mundo Artesano, de nuestras mano hasta tu hogar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
