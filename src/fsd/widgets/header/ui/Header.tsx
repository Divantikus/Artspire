"use client";
import { usePathname } from "next/navigation";
import settingsIcon from "@assets/header/settings.svg";
import profileIcon from "@assets/header/profile.svg";
import createIcon from "@assets/header/create.svg";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const path = usePathname();
  const isSettingsBtn = path.startsWith("/profile");
  const isCreatePage = path.startsWith("/create");

  return (
    <nav className={styles.nav}>
      <Link href={"/"} className={styles.link}>
        <div className={styles.logo}>A</div>
      </Link>
      <div className={styles.linkWrap}>
        {!isCreatePage && (
          <Link href={"/create"} className={styles.createPost}>
            <span className={styles.imgContainer}>
              <Image src={createIcon} alt={"Иконка создания приложения"} />
            </span>
          </Link>
        )}
      </div>

      {isSettingsBtn && (
        <button className={styles.profileOrSettingsBtn}>
          <Image src={settingsIcon} alt={"Иконка настроек"} />
        </button>
      )}
      {!isSettingsBtn && (
        <Link
          href={"/profile/my-works"}
          className={styles.profileOrSettingsBtn}
        >
          <Image src={profileIcon} alt={"Иконка профиля"} />
        </Link>
      )}
    </nav>
  );
};
