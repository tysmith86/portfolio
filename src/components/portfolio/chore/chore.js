import template from './chore.html';
import styles from './chore.scss';

export default {
  template,
  styles,
  controller
};

function controller() {
  this.styles = styles;
};