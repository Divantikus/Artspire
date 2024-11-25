"use client";
import {
  Comments,
  Publication,
  ReturnButton,
  EndlessPictures,
} from "@shared/ui/index";
import { useContext } from "react";
import { endlessPicturesProps } from "@pages/img-page/index";
import { useQueryPicturePage } from "@shared/model";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { SignUpOrSignIn } from "@widgets/sign-up-or-sign-in";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import styles from "./PicturePage.module.scss";

const ModalWindow = dynamic(() => import("@shared/ui/modalWindow/ModalWindow"));

export const PicturePage = () => {
  const { modalWindowIsVisible } = useContext(ModalWindowState);
  const id = +useParams().artId;

  const { data, isError, isLoading } = useQueryPicturePage(id);

  if (isLoading) return <p>loading...</p>;

  if (isError || !data) return <div>error (</div>;

  return (
    <article className={styles.article}>
      <ReturnButton />
      <Publication />
      <Comments postId={data.id} />
      <EndlessPictures props={endlessPicturesProps} />
      {modalWindowIsVisible && (
        <ModalWindow>
          <SignUpOrSignIn />
        </ModalWindow>
      )}
    </article>
  );
};
