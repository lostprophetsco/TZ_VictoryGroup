import customBackgroundInputRange from './helpers/customBackgroundInputRange.js';
import numberWithSpaces from './helpers/numberWithSpaces.js';
import inputTextAutoWidth from './helpers/inputTextAutoWidth.js';
import toggleClasses from './helpers/toggleClasses.js';

import Glide, {
  Controls,
  Breakpoints,
  Swipe,
  Keyboard,
} from '@glidejs/glide/dist/glide.modular.esm';

customBackgroundInputRange('.range-default');
numberWithSpaces('.need-js-to-digits-separate');
inputTextAutoWidth('.calculator__range-input');
toggleClasses(
  '.completion-body__toggle',
  'completion-body__toggle--closed',
  '.completion-body__glide',
  'completion-body__glide--hidden',
);

const glideOptions = {
  type: 'carousel',
  startAt: 0,
  perView: 4,
  gap: 12,
  keyboard: true,
  perTouch: 1,
  breakpoints: {
    1024: {
      perView: 2,
    },
    768: {
      perView: 2,
    },
    560: {
      perView: 1,
    },
  },
};

const glideMount = { Controls, Breakpoints, Swipe, Keyboard };
const glideHeader = document.querySelector('.completion-head__glide');
const glideBody = document.querySelector('.completion-body__glide');

const firstGlide = new Glide(glideHeader, {
  ...glideOptions,
}).mount(glideMount);

const secondGlide = new Glide(glideBody, {
  ...glideOptions,
}).mount(glideMount);

function syncGlide(master, slave) {
  master.on('run', function (e) {
    slave.go(e.direction);
  });
}
syncGlide(firstGlide, secondGlide);
syncGlide(secondGlide, firstGlide);
