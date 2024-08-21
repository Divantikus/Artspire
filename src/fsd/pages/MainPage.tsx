import { ModalWindowState } from "../app/providers/ModalWindowContext";
import { SignUpOrSignIn } from "../widgets/sign-up-or-sign-in";
import { ModalWindow } from "../shared/ui/modalWindow/index";
import { useContext } from "react";

export function MainPage() {
  const { setModalWindowIsVisible } = useContext(ModalWindowState);

  return (
    <div className="some">
      <button
        onClick={() => setModalWindowIsVisible((e) => !e)}
        style={{ color: "#fff" }}
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
