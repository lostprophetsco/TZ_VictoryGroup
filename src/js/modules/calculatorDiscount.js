/**
 * Function for calculating the total discount amount and final price
 * given a group of checkboxes with discount values.
 *
 * @param {string} checkboxesClass - CSS class of all discount checkboxes.
 * @param {string} totalDiscountClass - CSS class of element to display total discount.
 * @param {string} finalDiscountPriceClass - CSS class of element to display final price.
 * @param {string} startPriceClass - CSS class of element with initial price.
 */
const calculatorDiscount = (
  checkboxesClass,
  totalDiscountClass,
  finalDiscountPriceClass,
  startPriceClass,
) => {
  const checkboxes = document.querySelectorAll(checkboxesClass);
  const totalDiscountElement = document.querySelector(totalDiscountClass);
  const finalDiscountPriceElement = document.querySelector(finalDiscountPriceClass);
  const startPrice = Number(document.querySelector(startPriceClass).dataset.price);
  let discount = 0;

  finalDiscountPriceElement.textContent = startPrice.toLocaleString('ru') + ' ₽';

  if (checkboxes.length) {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        discount += checkbox.checked
          ? Number(checkbox.dataset.discount)
          : -Number(checkbox.dataset.discount);
        totalDiscountElement.textContent = discount.toLocaleString('ru') + ' ₽';
        finalDiscountPriceElement.textContent = (startPrice - discount).toLocaleString('ru') + '₽';
      });
    });
  }
};

export default calculatorDiscount;
