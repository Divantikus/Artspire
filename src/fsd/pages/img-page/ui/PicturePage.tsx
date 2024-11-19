"use client";
import {
  Comments,
  Publication,
  ReturnButton,
  EndlessPictures,
} from "@shared/ui/index";
import { endlessPicturesProps } from "@pages/img-page/index";
import { useQueryPicturePage } from "@shared/model";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { SignUpOrSignIn } from "@widgets/sign-up-or-sign-in";
import { PortalInBody } from "@shared/ui/Portal-in-body/PortalInBody";
import { useContext } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import styles from "./PicturePage.module.scss";

const ModalWindow = dynamic(() => import("@shared/ui/modalWindow/ModalWindow"));

export const PicturePage = () => {
  const { modalWindowState } = useContext(ModalWindowState);
  const id = +useParams().artId;

  const { isError, isLoading } = useQueryPicturePage(id);

  if (isError) return <div>error (</div>;

  if (isLoading) return <p>loading...</p>;

  return (
    <article className={styles.article}>
      <ReturnButton />
      <Publication />
      <Comments />
      <EndlessPictures props={endlessPicturesProps} />
      {modalWindowState !== "hidden" && (
        <PortalInBody>
          <ModalWindow>
            <SignUpOrSignIn />
          </ModalWindow>
        </PortalInBody>
      )}
    </article>
  );
};
