import { ChevronsRight } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import { LogoFull } from "@/components/icons/logo-full";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Logo } from "@/components/icons/logo";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";

const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
      className="${inter.variable} scroll-smooth"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="fixed w-full z-50 bg-background border-b">
            <div className="container mx-auto h-16 flex justify-between items-center">
              <Link href="/">
                <LogoFull className="h-12" />
              </Link>
              <Navigation />
              <Button
                nativeButton={false}
                render=<Link href="mailto:info@octogone3dprints.com" />
              >
                Imprimez
                <ChevronsRight />
              </Button>
            </div>
          </nav>

          <div className="h-16" />
          {children}

          <footer className="py-6 border-t">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
              <Logo className="size-8" />
              <p className="text-xs">
                © 2025 Octogone 3D Prints™. Tous droits réservés.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
