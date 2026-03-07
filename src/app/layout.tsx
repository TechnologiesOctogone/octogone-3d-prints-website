import { ChevronsRight, Menu } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import { LogoFull } from "@/components/icons/logo-full";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Octogone 3D Prints",
  description:
    "Services d'impression 3D de haute qualité pour vos projets personnels et professionnels.",
};

export function Action() {
  return (
    <Button
      nativeButton={false}
      render=<Link href="mailto:info@octogone3dprints.com" />
    >
      Imprimez
      <ChevronsRight />
    </Button>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const links = [
    { href: "/#about", label: "À propos" },
    { href: "/#services", label: "Services" },
    { href: "/#projects", label: "Projets" },
    { href: "/#contact", label: "Contact" },
  ];

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
          <header className="fixed w-full z f-50 bg-background border-b">
            <div className="container mx-auto h-16 flex justify-between items-center">
              <Link href="/">
                <LogoFull className="h-12" />
              </Link>
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="gap-3">
                  {links.map((link) => (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        render={<Link href={link.href} />}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger render={<Button variant="ghost" size="icon" />}>
                    <Menu />
                  </SheetTrigger>
                  <SheetContent showCloseButton={false}>
                    <div className="grid gap-6 p-4">
                      {links.map((link) => (
                        <Button
                          key={link.href}
                          render={<Link href={link.href} />}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                    <SheetFooter>
                      <Action />
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
              <Action />
            </div>
          </header>

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
