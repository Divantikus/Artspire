import likeIcon from "@assets/like/lik.svg";
import Image from "next/image";

export const Likebutton = () => {
  return (
    <button>
      <Image src={likeIcon} alt={"Иконка лайка"} />
    </button>
  );
};
