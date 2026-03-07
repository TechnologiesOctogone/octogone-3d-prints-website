"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
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
import { ItemGroup, Item, ItemContent, ItemTitle } from "./ui/item";

const links = [
  { href: "/#about", label: "À propos" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projets" },
  { href: "/#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <>
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
                <Button key={link.href} render={<Link href={link.href} />}>
                  {link.label}
                </Button>
              ))}
            </div>
            <SheetFooter>
              <Button>Test</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
