import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "Event Management",
  description: "discover the best events around you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <ThemeProvider>
        <main className="font-normal mx-10">
          <Header />
          {children}
          <Footer />
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
