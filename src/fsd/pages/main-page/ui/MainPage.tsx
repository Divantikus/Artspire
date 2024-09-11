import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { SignUpOrSignIn } from "@widgets/sign-up-or-sign-in/index";
import { useContext } from "react";
import dynamic from "next/dynamic";

export function MainPage() {
  const { modalWindowIsVisible, setModalWindowIsVisible } =
    useContext(ModalWindowState);

  const ModalWindow = dynamic(
    () => import("@shared/ui/modalWindow/ModalWindow")
  );

  return (
    <div className="main-page">
      <button
        onClick={() => setModalWindowIsVisible((e) => !e)}
        style={{ color: "#000" }}
      >
        toggle modal Window
      </button>
      <p>
        {modalWindowIsVisible && (
          <ModalWindow>
            <SignUpOrSignIn />
          </ModalWindow>
        )}
      </p>
    </div>
  );
}
