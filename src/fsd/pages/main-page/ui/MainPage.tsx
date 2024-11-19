import { endlesMainPictures } from "@pages/main-page/index";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { EndlessPictures } from "@shared/ui";
import { SignUpOrSignIn } from "@widgets/sign-up-or-sign-in/index";
import { PortalInBody } from "@shared/ui/Portal-in-body/PortalInBody";
import { useContext } from "react";
import dynamic from "next/dynamic";
import styles from "./MainPage.module.scss";

const ModalWindow = dynamic(() => import("@shared/ui/modalWindow/ModalWindow"));

export function MainPage() {
  const { modalWindowState, setModalWindowState } =
    useContext(ModalWindowState);

  return (
    <section className={styles.section}>
      <button
        style={{ color: "#000" }}
        onClick={() => setModalWindowState("visible")}
      >
        toggle modal Window
      </button>
      <EndlessPictures props={endlesMainPictures} />
      {modalWindowState !== "hidden" && (
        <PortalInBody>
          <ModalWindow>
            <SignUpOrSignIn />
          </ModalWindow>
        </PortalInBody>
      )}
    </section>
  );
}
