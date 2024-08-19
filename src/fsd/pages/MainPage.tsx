import { SignUpOrSignIn } from "../widgets/sign-up-or-sign-in";
import { ModalWindow } from "../shared/ui/modalWindow/index";
import { useState } from "react";

export function MainPage() {
  const [onOrOff, setOnOrOff] = useState(false);

  return (
    <div className="some">
      <button onClick={() => setOnOrOff((e) => !e)} style={{ color: "#fff" }}>
        toggle modal Window
      </button>

      <p>
        {onOrOff && (
          <ModalWindow>
            <SignUpOrSignIn />
          </ModalWindow>
        )}
      </p>
    </div>
  );
}
