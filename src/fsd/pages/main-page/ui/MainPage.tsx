import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { SignUpOrSignIn } from "@widgets/sign-up-or-sign-in/index";
import { ModalWindow } from "@shared/ui/modalWindow/index";
import { useContext } from "react";

export function MainPage() {
  const { setModalWindowIsVisible } = useContext(ModalWindowState);

  return (
    <div className="main-page">
      <button
        onClick={() => setModalWindowIsVisible((e) => !e)}
        style={{ color: "#000" }}
      >
        toggle modal Window
      </button>
      <p>
        <ModalWindow>
          <SignUpOrSignIn />
        </ModalWindow>
      </p>
    </div>
  );
}
