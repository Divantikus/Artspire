import { SignUpOrSignIn } from "../widgets/sign-up-or-sign-in";
import { ModalWindow } from "../shared/ui/modalWindow/index";
import { useState } from "react";

export function MainPage() {
  const [modalWindowIsVisible, setModalWindowIsVisible] = useState(false);

  return (
    <div className="some">
      <button
        onClick={() => setModalWindowIsVisible((e) => !e)}
        style={{ color: "#fff" }}
      >
        toggle modal Window
      </button>

      <p>
        <ModalWindow
          closeWindow={setModalWindowIsVisible}
          windowIsVisible={modalWindowIsVisible}
        >
          <SignUpOrSignIn />
        </ModalWindow>
      </p>
    </div>
  );
}
