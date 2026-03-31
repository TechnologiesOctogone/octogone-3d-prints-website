"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoFull } from "@/components/icons/logo-full";
import { LINKS } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer";
import { Action } from "./action";

function MobileNav({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Drawer>
        <DrawerTrigger
          className={buttonVariants({ variant: "secondary", size: "icon-lg" })}
        >
          <Menu />
        </DrawerTrigger>
        <DrawerContent className="h-full">
          <div className="grid gap-3 p-4">
            {LINKS.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <DrawerFooter>
            <Action
              className={buttonVariants({ variant: "default", size: "lg" })}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export function DesktopNav({
  className,
  active,
}: {
  className?: string;
  active: string;
}) {
  return (
    <nav className={`flex items-center gap-3 ${className ?? ""}`}>
      {LINKS.map((link) => (
        <Link
          key={link.id}
          href={`#${link.id}`}
          className={buttonVariants({
            variant: active === link.id ? "default" : "ghost",
          })}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function Header() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }),
      { rootMargin: "-50% 0px -50% 0px" },
    );

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed z-50 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between p-4">
          <Link href="/">
            <LogoFull className="h-12" />
          </Link>
          <MobileNav className="md:hidden" />
          <DesktopNav className="hidden md:flex" active={activeId} />
          <Action className={cn(buttonVariants(), "hidden md:flex")} />
        </div>
      </header>
      <div className="h-16" />
    </>
  );
}
