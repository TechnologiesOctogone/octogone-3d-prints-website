import { Badge } from "@/components/ui/badge";

export function PrinterStatusBadge() {
  return (
    <Badge className="mb-6" variant="secondary">
      <span className="relative mr-1 size-2 rounded-full bg-emerald-400 before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-emerald-400" />
      2 imprimantes en ligne
    </Badge>
  );
}
