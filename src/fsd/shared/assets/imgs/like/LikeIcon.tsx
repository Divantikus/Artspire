import { FC, LegacyRef } from "react";

interface LikesCounterProps {
  width?: number;
  height?: number;
  isFavorite?: boolean;
  svgRef?: LegacyRef<SVGSVGElement>;
}

export const LikeIcon: FC<LikesCounterProps> = ({
  width,
  height,
  svgRef,
  isFavorite,
}) => {
  return (
    <svg
      ref={svgRef}
      width={width || 18}
      height={height || 16}
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
        stroke="#888888"
        strokeOpacity="1.000000"
        strokeWidth="1.000000"
        strokeLinejoin="round"
      />
    </svg>
  );
};
