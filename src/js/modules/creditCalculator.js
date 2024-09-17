/**
 * Function to calculate credit value and monthly payment
 * @param {string} totalPriceEl - CSS selector of element, which contains total price value
 * @param {string} creditValueEl - CSS selector of element, which contains credit value
 * @param {string} rangeInputs - CSS selector of range inputs
 * @param {string} inputInputs - CSS selector of input elements
 * @param {string} monthlyPaymentEl - CSS selector of element, which contains monthly payment value
 * @param {string} monthlyPaymentDecrementBtn - CSS selector of button, which decrements monthly payment value
 * @param {string} monthlyPaymentIncrementBtn - CSS selector of button, which increments monthly payment value
 */
const creditCalculator = (
  totalPriceEl,
  creditValueEl,
  rangeInputs,
  inputInputs,
  monthlyPaymentEl,
  monthlyPaymentDecrementBtn,
  monthlyPaymentIncrementBtn,
) => {
  const totalPriceElement = document.querySelector(totalPriceEl);
  const creditValueElement = document.querySelector(creditValueEl);

  const creditRanges = document.querySelectorAll(rangeInputs);
  const firstPaymentRange = creditRanges[0];
  const termPaymentRange = creditRanges[1];

  const creditInputs = document.querySelectorAll(inputInputs);
  const firstPaymentInput = creditInputs[0];
  const termPaymentInput = creditInputs[1];

  const monthlyPaymentElement = document.querySelector(monthlyPaymentEl);
  const monthlyPaymentDecrementBtnEl = document.querySelector(monthlyPaymentDecrementBtn);
  const monthlyPaymentIncrementBtnEl = document.querySelector(monthlyPaymentIncrementBtn);

  /**
   * Trims spaces and ' ' characters from given string
   * @param {string} value - string to trim
   * @returns {string} trimmed string
   */
  const trimSpacesAndRubles = (value) => {
    return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '');
  };

  let monthlyPaymentValue = 0;
  let firstPaymentValue = 0;
  let termPaymentValue = 0;
  let totalPriceValueNumber = Number(
    trimSpacesAndRubles(document.querySelector(totalPriceEl).textContent),
  );
  const bankPercentInterest = 20;

  /**
   * Updates the background of a range input and the size of its related text input.
   * @param {HTMLInputElement} [inputRangeElement=null] - range input element to update
   * @param {HTMLInputElement} [inputTextElement=null] - text input element to update
   */
  const updateInputRangeBackgroundAndInputTextSize = (
    inputRangeElement = null,
    inputTextElement = null,
  ) => {
    const inputRangeValue = inputRangeElement.value;
    const inputTextValue = inputTextElement.value;

    inputRangeElement.style.background = `linear-gradient(to right, var(--default-range-track-active-color) ${inputRangeValue}%, var(--default-range-track-color) ${inputRangeValue}%)`;
    inputTextElement.size = inputTextValue.length;
  };

  /**
   * Updates the credit value element with the current total price value
   * each time there is a change event in the document.
   * The credit value is formatted as a string with a locale of 'ru'
   * and appended with ' ' symbol.
   * After the credit value is updated, the monthly payment value
   * is also updated by calling the `setMonthlyPayment` function.
   */
  const getCreditValue = () => {
    document.addEventListener('change', () => {
      totalPriceValueNumber = Number(trimSpacesAndRubles(totalPriceElement.textContent));
      creditValueElement.textContent = totalPriceValueNumber.toLocaleString('ru') + ' ₽';
      setMonthlyPayment();
    });
  };

  /**
   * Updates the value of a range input and a text input (first payment) when either of them changes,
   * and updates the monthly payment value.
   * @returns {void}
   */
  const getRangeFirstPaymentValue = () => {
    firstPaymentRange.addEventListener('input', () => {
      firstPaymentInput.value = (totalPriceValueNumber / 100) * 0.9 * firstPaymentRange.value;
      firstPaymentValue = trimSpacesAndRubles(firstPaymentInput.value);
      firstPaymentInput.value = firstPaymentValue;
      firstPaymentInput.value = firstPaymentValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      updateInputRangeBackgroundAndInputTextSize(firstPaymentRange, firstPaymentInput);
      setMonthlyPayment();
    });

    firstPaymentInput.addEventListener('input', () => {
      let firstPaymentInputValue = Number(trimSpacesAndRubles(firstPaymentInput.value));
      /*
       * no more power to produce this bullshit, sorry )))
       */
      if (firstPaymentInputValue === totalPriceValueNumber * 0.9) {
        firstPaymentRange.value = 100;
      } else {
        firstPaymentRange.value = (firstPaymentInputValue / totalPriceValueNumber) * 100;
      }
      firstPaymentInput.value = firstPaymentInput.value
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      updateInputRangeBackgroundAndInputTextSize(firstPaymentRange, firstPaymentInput);
      setMonthlyPayment();
    });
  };

  /**
   * Updates the value of a range input and a text input (term of payment) when either of them changes,
   * and updates the monthly payment value.
   * @param {number} inputPaymentValue - an optional value to set the input and range
   *   values to, if provided.
   * @returns {void}
   */
  const getRangeTermPaymentValue = (inputPaymentValue) => {
    if (inputPaymentValue) {
      termPaymentValue = inputPaymentValue;
      termPaymentInput.value = inputPaymentValue;
      termPaymentRange.value = inputPaymentValue;

      updateInputRangeBackgroundAndInputTextSize(termPaymentRange, termPaymentInput);
      setMonthlyPayment();
    }

    termPaymentRange.addEventListener('input', () => {
      termPaymentInput.value = termPaymentRange.value;
      termPaymentValue = trimSpacesAndRubles(termPaymentInput.value);

      updateInputRangeBackgroundAndInputTextSize(termPaymentRange, termPaymentInput);
      setMonthlyPayment();
    });

    termPaymentInput.addEventListener('input', () => {
      let termPaymentInputValue = Number(trimSpacesAndRubles(termPaymentInput.value));
      termPaymentRange.value = termPaymentInputValue;
      termPaymentValue = termPaymentInputValue;

      updateInputRangeBackgroundAndInputTextSize(termPaymentRange, termPaymentInput);
      setMonthlyPayment();
    });
  };

  /**
   * Calculates and sets the value of the monthly payment element based on the
   * total price, first payment, term of payment and bank interest.
   * @returns {void}
   */
  const setMonthlyPayment = () => {
    //if (monthlyPaymentValue === 0) return;
    monthlyPaymentValue = Math.round(
      (totalPriceValueNumber -
        firstPaymentValue +
        ((totalPriceValueNumber - firstPaymentValue) / 100) * bankPercentInterest) /
        (termPaymentValue || 1),
    );
    monthlyPaymentElement.textContent = Number(monthlyPaymentValue).toLocaleString('ru') + ' ₽';
  };

  /**
   * Changes the value of the term payment and updates the monthly payment element,
   * based on whether the count symbol is true or false.
   * Also updates the term payment input and range values.
   *
   * @param {boolean} [countSymbol=true], [countSymbol=false] - Whether to increment or decrement
   *   the term payment value.
   * @param {number} [inputPaymentValue=termPaymentValue] - The value of the term payment. Get it from the variable termPaymentValue
   * @returns {void}
   */
  const changeMonthlyPayment = (countSymbol, inputPaymentValue = Number(termPaymentValue)) => {
    if (countSymbol) {
      inputPaymentValue++;
    } else if (inputPaymentValue !== 0 && countSymbol === false) {
      inputPaymentValue--;
    }
    getRangeTermPaymentValue(inputPaymentValue);
  };

  monthlyPaymentDecrementBtnEl.addEventListener('click', () => {
    changeMonthlyPayment(false);
  });
  monthlyPaymentIncrementBtnEl.addEventListener('click', () => {
    changeMonthlyPayment(true);
  });

  document.addEventListener('DOMContentLoaded', () => {
    getRangeFirstPaymentValue();
    getRangeTermPaymentValue(0);
    getCreditValue();
    setMonthlyPayment();
    creditValueElement.textContent = totalPriceValueNumber.toLocaleString('ru') + ' ₽';
    monthlyPaymentElement.textContent = Number(monthlyPaymentValue).toLocaleString('ru') + ' ₽';
  });
};

export default creditCalculator;
