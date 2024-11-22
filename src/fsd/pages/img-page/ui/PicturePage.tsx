"use client";
import {
  Comments,
  Publication,
  ReturnButton,
  EndlessPictures,
} from "@shared/ui/index";
import { useContext, useEffect, useRef } from "react";
import { endlessPicturesProps } from "@pages/img-page/index";
import { useQueryPicturePage } from "@shared/model";
import { ModalWindowState } from "@/fsd/app/providers/ModalWindowContext";
import { SignUpOrSignIn } from "@widgets/sign-up-or-sign-in";
import { useQueryClient } from "react-query";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import styles from "./PicturePage.module.scss";

const ModalWindow = dynamic(() => import("@shared/ui/modalWindow/ModalWindow"));

export const PicturePage = () => {
  const renderCounter = useRef(0);
  const queryClient = useQueryClient();
  const { modalWindowIsVisible } = useContext(ModalWindowState);
  const id = +useParams().artId;

  const { data, isError, isLoading } = useQueryPicturePage(id);

  useEffect(() => {
    return () => {
      if (renderCounter.current === 0) {
        renderCounter.current++;
        return;
      }
      queryClient.removeQueries({ queryKey: "getImgData", exact: true });
    };
  }, []);

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
