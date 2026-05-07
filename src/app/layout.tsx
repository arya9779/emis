import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EMIS Texas | Minimally Invasive Vascular Specialists – DFW",
  description: "EMIS Texas offers advanced outpatient care through minimally invasive procedures with lower risks, reduced pain, and shorter recovery times. Serving the greater DFW Metroplex. Board-certified interventional radiologists.",
  keywords: "interventional radiology, minimally invasive, DFW, Dallas, Irving, fibroid embolization, prostate embolization, vascular specialists",
  openGraph: {
    title: "EMIS Texas | Experienced Leaders in Minimally Invasive Care",
    description: "Board-certified interventional radiologists serving the DFW Metroplex. Advanced outpatient procedures for fibroids, prostate, knee pain, and more.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
