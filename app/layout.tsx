import type { Metadata } from "next";
import { Inter } from "next/font/google";
// styles
import "./globals.css";

// components
import Footer from "@/components/Layout/Footer/index";
// providers
import { ThemeProvider } from "@/components/Providers/ThemeProvider/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bogduto | portfolio",
  description: "My own portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem={true}>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
