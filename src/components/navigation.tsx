"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const links = [
  { href: "/#about", label: "À propos" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projets" },
  { href: "/#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <div className="flex items-center justify-between w-full">
      {/* Desktop */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
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

      {/* Mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            }
          />
          <SheetContent side="right" className="w-64">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
