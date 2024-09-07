import {
  Input,
  SelectFroNext,
  GradientButton,
  CustomMultiSelect,
} from "@/fsd/shared/ui/index";
import {
  useSelectTags,
  useInputImgSettings,
  useSelectAccessRightsOptions,
} from "@pages/create-img/index";
import { Checkbox } from "@/fsd/shared/ui/index";
import magnifierIcon from "@assets/imgs/magnifier/magnifier.svg";
import styles from "./CreateImgInputs.module.scss";
import Image from "next/image";

export const CreateImgInputs = () => {
  const selectTagsProps = useSelectTags();
  const createImgSelectProps = useSelectAccessRightsOptions();
  const { InputImgNameConf, InputImgDescrConf, InputImgToolsConf, isDisabled } =
    useInputImgSettings();

  return (
    <>
      <label className={styles.label} htmlFor="imgName">
        Название
      </label>
      <Input inputProps={InputImgNameConf} />
      <label className={styles.label} htmlFor="imgDesc">
        Описание
      </label>
      <Input inputProps={InputImgDescrConf} />
      <label className={styles.label} htmlFor="imgTools">
        Инструменты
      </label>
      <Input inputProps={InputImgToolsConf} />
      <label className={styles.label}>Доступность</label>
      <SelectFroNext customSelectProps={createImgSelectProps} />
      <label className={styles.label}>Выберите категории</label>
      <div className={styles.selectListWrap}>
        <Image src={magnifierIcon} alt="Лупа" className={styles.img} />
        <CustomMultiSelect props={selectTagsProps} />
      </div>
      {!isDisabled && (
        <label htmlFor="btn" className={styles.checkLable}>
          <span className={styles.text}>Отключить комментарии</span>
          <Checkbox checkboxProps={{ id: "btn" }} />
        </label>
      )}
      <GradientButton options={{ isDisabled, customStyle: styles.submitBtn }}>
        Опубликовать
      </GradientButton>
    </>
  );
};
