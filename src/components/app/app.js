import template from './app.html';
import styles from './app.scss';

export default {
  template,
  styles,
  controller
};

function controller() {
  this.styles = styles;
};