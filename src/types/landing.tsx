import type { ReactNode } from "react";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  pictures: string[];
};

export type Stat = {
  icon: ReactNode;
  value: string;
  label: string;
};

export type Service = {
  icon: ReactNode;
  title: string;
  desc: string;
};
