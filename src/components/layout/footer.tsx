import { Logo } from "@/components/icons/logo";

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:gap-3">
        <Logo className="size-6" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Octogone 3D Prints™. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
