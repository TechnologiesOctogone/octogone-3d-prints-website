"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS } from "@/config/navigation";
import { Action } from "../modules/marketing/action";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer";

export function MobileNav({ className }: { className?: string }) {
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
