import type { ReactNode } from "react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

type ServiceItemProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export function ServiceItem({ icon, title, desc }: ServiceItemProps) {
  return (
    <Item variant="outline">
      <ItemMedia>{icon}</ItemMedia>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{desc}</ItemDescription>
      </ItemContent>
    </Item>
  );
}
