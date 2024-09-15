/**
 * Attaches an event handler to the specified elements to update the `background` property
 * of a range input as the user interacts with it, creating a custom progress bar effect.
 * @param {string} element - CSS selector of elements to attach the event handler to.
 * @example customBackgroundInputRange('.range-default');
 */
const customBackgroundInputRange = (element) => {
  const rangeElements = document.querySelectorAll(element);

  if (rangeElements.length) {
    rangeElements.forEach((element) => {
      element.addEventListener('input', (event) => {
        const progress = (event.target.value / element.max) * 100;

        element.style.background = `linear-gradient(to right, var(--default-range-track-active-color) ${progress}%, var(--default-range-track-color) ${progress}%)`;
      });
    });
  }
};

export default customBackgroundInputRange;
