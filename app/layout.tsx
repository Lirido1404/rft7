import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";
import FlecheRemonte from "./(components)/FlecheRemonte";
import Footer from "./(components)/Footer";
import AuthProvider from "./(components)/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import AjoutNotifAuth from "./(components)/AjoutNotifAuth";
import ServNav from "./(components)/ServNav";
import {
  Sheet,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RFT | Reseau de Rasso et commerce",
  description: "Site E-Commerce et réseau social",
  icons: {
    icon: ["/favicon.icov=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className}`}>
        <AuthProvider>
          <Sheet>
            <AjoutNotifAuth />
            <FlecheRemonte />
            <div>
              <ServNav />
            </div><Separator/>
            {children}
            <Footer />
            <Toaster />
          </Sheet>
        </AuthProvider>
      </body>
    </html>
  );
}
