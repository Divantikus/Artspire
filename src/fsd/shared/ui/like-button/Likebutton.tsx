import {
  useLikeButton,
  changeColorOnRed,
  changeColorOnTransparent,
} from "@shared/utils/index";
import { LikebuttonProps } from "./types";
import { FC, useRef } from "react";
import styles from "./Likebutton.module.scss";

export const Likebutton: FC<LikebuttonProps> = ({ id, isFavorite }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const addOrRemoveFavorites = useLikeButton(isFavorite, id);

  return (
    <>
      <button
        className={styles.likeBtn}
        onClick={() => addOrRemoveFavorites(svgRef.current)}
        onMouseEnter={() => changeColorOnRed(svgRef.current)}
        onMouseLeave={() => changeColorOnTransparent(svgRef.current)}
      >
        <svg
          ref={svgRef}
          width="18.0"
          height="16.0"
          viewBox="0 0 19 16.9606"
          fill={isFavorite ? "red" : "none"}
          xmlns={"http://www.w3.org/2000/svg"}
          xmlnsXlink={"http://www.w3.org/1999/xlink"}
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M9.5 3.65C11.5 -1.04 18.5 -0.54 18.5 5.46C18.5 11.46 9.5 16.46 9.5 16.46C9.5 16.46 0.5 11.46 0.5 5.46C0.5 -0.54 7.5 -1.04 9.5 3.65Z"
            stroke="#000000"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
};
