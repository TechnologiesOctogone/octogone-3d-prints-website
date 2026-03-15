import { ChevronsRight } from "lucide-react";
import Link from "next/link";

export function Action({ className }: { className?: string }) {
  return (
    <Link href="mailto:info@octogone3dprints.com" className={className}>
      Imprimez
      <ChevronsRight />
    </Link>
  );
}
