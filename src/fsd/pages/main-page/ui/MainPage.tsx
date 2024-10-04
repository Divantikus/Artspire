import { endlesMainPictures } from "@pages/main-page/index";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { EndlessPictures } from "@shared/ui";
import { SignUpOrSignIn } from "@widgets/sign-up-or-sign-in/index";
import { useContext } from "react";
import dynamic from "next/dynamic";
import styles from "./MainPage.module.scss";

const ModalWindow = dynamic(() => import("@shared/ui/modalWindow/ModalWindow"));

export function MainPage() {
  const { modalWindowIsVisible, setModalWindowIsVisible } =
    useContext(ModalWindowState);

  return (
    <section className={styles.section}>
      <button
        onClick={() => setModalWindowIsVisible((e) => !e)}
        style={{ color: "#000" }}
      >
        toggle modal Window
      </button>
      <EndlessPictures props={endlesMainPictures} />
      {modalWindowIsVisible && (
        <ModalWindow>
          <SignUpOrSignIn />
        </ModalWindow>
      )}
    </section>
  );
}
