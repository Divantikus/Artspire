"use client";
import { TagButton } from "@shared/ui/index";
import { ReactNode } from "react";
import { Tag } from "@/fsd/shared/api";
import styles from "./Tags.module.scss";

interface TagsProps {
  tags: Tag[];
}

export default function Tags({ tags }: TagsProps) {
  const buttons: ReactNode[] = [];

  for (let i = 0; i < 4; i++) {
    const tag = tags[i];

    if (!tag) break;
    buttons.push(<TagButton key={tag.id}>{tag.name}</TagButton>);
  }

  return <div className={styles.buttonContainer}>{buttons}</div>;
}
