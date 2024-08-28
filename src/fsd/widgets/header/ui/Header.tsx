"use client";
import { usePathname } from "next/navigation";
import notificationIcon from "@assets/header/notification.svg";
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
      {!isCreatePage && (
        <Link href={"/create"} className={styles.createPost}>
          <Image src={createIcon} alt={"Иконка создания приложения"} />
          <span className={styles.text}>Создать</span>
        </Link>
      )}
      <div className={styles.otherButtons}>
        <button>
          <Image src={notificationIcon} alt={"Иконка колокольчика"} />
        </button>
        {isSettingsBtn && (
          <button>
            <Image src={settingsIcon} alt={"Иконка настроек"} />
          </button>
        )}
        {!isSettingsBtn && (
          <Link href={"/profile"}>
            <Image src={profileIcon} alt={"Иконка профиля"} />
          </Link>
        )}
      </div>
    </nav>
  );
};
