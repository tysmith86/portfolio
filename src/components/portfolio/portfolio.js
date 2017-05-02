import template from './portfolio.html';
import styles from './portfolio.scss';

export default {
  template,
  styles,
  controller
};

function controller() {
  this.styles = styles;
};