import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { SignUpOrSignIn } from "@widgets/sign-up-or-sign-in/index";
import { ModalWindow } from "@shared/ui/modalWindow/index";
import { useContext } from "react";
import { ImgCard } from "@widgets/img-card/index";

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
      <ImgCard id={1} slug={"go"} img={""} />
    </div>
  );
}
