export const changeInputStyle = (input: HTMLInputElement) => {
  if (!input.value) {
    input.style.color = "#cbced5";
    input.style.border = "1px solid #cbced5";
    return;
  }
  input.style.color = "black";
  input.style.border = "1px solid black";
};
