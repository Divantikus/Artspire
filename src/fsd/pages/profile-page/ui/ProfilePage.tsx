"use client";
import { SelectionButtons } from "@pages/profile-page/index";
import { ReactNode } from "react";
import { Profile } from "@pages/profile-page/index";
import styles from "./ProfilePage.module.scss";

export const ProfilePage = ({ children }: { children: ReactNode }) => {
  return (
    <section className={styles.profileSection}>
      <Profile />
      <SelectionButtons />
      {children}
    </section>
  );
};
