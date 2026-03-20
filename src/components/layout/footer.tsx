import { Logo } from "@/components/icons/logo";

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-6 md:flex-row">
        <Logo className="size-8" />
        <p className="text-xs">
          © 2025 Octogone 3D Prints™. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
