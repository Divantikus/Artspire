import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { SignUpOrSignIn } from "@widgets/sign-up-or-sign-in/index";
import { ModalWindow } from "@shared/ui/modalWindow/index";
import { Likebutton } from "@shared/ui";
import { useContext } from "react";

export function MainPage() {
  const { setModalWindowIsVisible } = useContext(ModalWindowState);

  return (
    <div className="main-page">
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
      <Likebutton isFavorite={true} id={1} />
    </div>
  );
}
