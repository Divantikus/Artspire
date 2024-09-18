export const isElementVisible = (element: HTMLDivElement) => {
  const { top, bottom, left, right } = element.getBoundingClientRect();

  return {
    rightIsVisible: right > 0,
    bottomIsVisible: bottom > 0,
    topIsVisible: top < window.innerHeight,
    leftIsVisible: left < window.innerWidth,
  };
};
