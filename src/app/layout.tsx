import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/providers/theme";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Octogone 3D Prints",
  description:
    "Services d'impression 3D de haute qualité pour vos projets personnels et professionnels.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
