import template from './about.html';
import styles from './about.scss';

export default {
  template,
  controller,
  styles
};

function controller() {
  this.styles = styles;
};