/**
 * Attaches an event handler to the specified elements to format the user input as a number with spaces as thousand separators.
 * @param {string} element - CSS selector of elements to attach the event handler to.
 * @example numberWithSpaces('.need-js-to-digits-separate');
 */
const numberWithSpaces = (element) => {
  const inputs = document.querySelectorAll(element);
  const eventHandler = (event) => {
    const { value } = event.target;
    event.target.value = value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  inputs.forEach((input) => {
    input.addEventListener('input', eventHandler);
  });
};

export default numberWithSpaces;
