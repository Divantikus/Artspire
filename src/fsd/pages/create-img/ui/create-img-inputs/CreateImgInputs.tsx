import {
  useInputImgSettings,
  useSelectAccessRightsOptions,
} from "@pages/create-img/index";
import {
  CustomMultiSelect,
  GradientButton,
  Input,
  SelectFroNext,
} from "@/fsd/shared/ui/index";
import { Checkbox } from "@/fsd/shared/ui/index";
import styles from "./CreateImgInputs.module.scss";

export const CreateImgInputs = () => {
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
      <CustomMultiSelect />
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
