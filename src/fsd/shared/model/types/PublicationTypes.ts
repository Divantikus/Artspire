import { ReactNode } from "react";
import { Tag } from "@shared/api/index";

export interface PublicStatProps {
  watched: number;
  likes_count: number;
  created_at: string | null;
}
export interface ChildrenProps {
  children: ReactNode;
}

export interface TagsProps {
  tags: Tag[];
}
