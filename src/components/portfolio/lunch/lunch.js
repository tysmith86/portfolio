import template from './lunch.html';
import styles from './lunch.scss';

export default {
  template,
  styles,
  controller
};

function controller() {
  this.styles = styles;
};