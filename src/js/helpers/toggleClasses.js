const toggleClasses = (
  masterElement,
  toggledMasterClassName,
  childElement = undefined,
  toggledChildClassName = undefined,
) => {
  const master = document.querySelector(masterElement);

  master.addEventListener('click', (event) => {
    master.classList.toggle(toggledMasterClassName);
    if (arguments.length > 2) {
      const child = document.querySelector(childElement);
      child.classList.toggle(toggledChildClassName);
    }
  });
};

export default toggleClasses;
