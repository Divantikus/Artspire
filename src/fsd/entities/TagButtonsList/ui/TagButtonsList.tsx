import { TagButton } from "@/fsd/shared/ui/tag-button/index";
import styles from "./TagButtonsList.module.scss";

export const TagButtonsList = () => {
  const some = () => {
    console.log("1");
  };

  const data = [
    { id: 1, imgUrl: "go", text: "gogo" },
    { id: 2, imgUrl: "go", text: "gogo" },
    { id: 3, imgUrl: "go", text: "gogo" },
  ];

  return (
    <ul className={styles.ul}>
      {data.map((item) => {
        return (
          <TagButton key={item.id} onClickHandler={some}>
            {item.text}
          </TagButton>
        );
      })}
    </ul>
  );
};
