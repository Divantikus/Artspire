export const changeColorOnRed = (svg: SVGSVGElement | null) => {
  if (!svg) return;

  const svgStyle = svg.style;

  if (svgStyle.fill === "red") return;

  svgStyle.fill = "#F9DDF2";
};

export const changeColorOnTransparent = (svg: SVGSVGElement | null) => {
  if (!svg) return;

  const svgStyle = svg.style;

  if (svgStyle.fill === "red") return;

  svgStyle.fill = "";
};
