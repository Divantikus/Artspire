import { RefObject } from "react";

export const FolderIcon = ({
  svgRef,
}: {
  svgRef: RefObject<SVGPathElement>;
}) => {
  return (
    <svg
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip11_473">
          <rect
            id="File / Folder_Upload"
            width="23.000000"
            height="23.000000"
            transform="translate(0.500000 0.500000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip11_473)">
        <path
          ref={svgRef}
          id="Vector"
          d="M12 16L12 10M9 12L12 10L15 12M3 6L12 6L17.79 6C18.91 6 19.48 6 19.9 6.21C20.28 6.4 20.59 6.71 20.78 7.09C21 7.51 21 8.07 21 9.19L21 16.79C21 17.91 21 18.48 20.78 18.9C20.59 19.28 20.28 19.59 19.9 19.78C19.48 20 18.92 20 17.8 20L6.19 20C5.07 20 4.51 20 4.09 19.78C3.71 19.59 3.4 19.28 3.21 18.9C3 18.47 3 17.92 3 16.79L3 6C3 4.89 3.89 4 5 4L8.67 4C9.16 4 9.4 4 9.63 4.05C9.84 4.1 10.03 4.18 10.21 4.29C10.41 4.41 10.59 4.59 10.93 4.93L12 6"
          stroke="#cbced5"
          strokeOpacity="1.000000"
          strokeWidth="1.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
