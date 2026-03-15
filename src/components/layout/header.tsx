"use client";

import Link from "next/link";
import { LogoFull } from "@/components/icons/logo-full";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";
import { Action } from "../modules/marketing/action";
import { buttonVariants } from "../ui/button";

export function Header() {
  return (
    <header className="fixed z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between p-4">
        <Link href="/">
          <LogoFull className="h-12" />
        </Link>
        <DesktopNav className="hidden md:flex" />
        <div className="flex items-center gap-4">
          <Action className={cn(buttonVariants(), "hidden md:flex")} />
          <MobileNav className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
