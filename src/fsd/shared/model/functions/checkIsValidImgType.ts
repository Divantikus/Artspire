export const checkIsValidImgType = (file: File | undefined): file is File => {
  if (!file) return false;

  switch (file.type) {
    case "image/jpeg":
      return true;
    case "image/webp":
      return true;
    case "image/png":
      return true;
    default:
      return false;
  }
};
