/**
 * Attaches an event handler to the specified elements to update the 'size' attribute of input fields.
 * @param {string} element - CSS selector of elements to attach the event handler to.
 * @example inputTextAutoWidth('.calculator__range-input');
 */
const inputTextAutoWidth = (element) => {
  const inputs = document.querySelectorAll(element);

  if (!inputs.length) return;
  const eventHandler = (event) => {
    event.target.size = event.target.value.replace(/\D/g, ' ').length;
    //event.target.style.width = event.target.value.length + 'ch';
  };

  inputs.forEach((input) => {
    input.addEventListener('input', eventHandler);
  });
};

export default inputTextAutoWidth;
