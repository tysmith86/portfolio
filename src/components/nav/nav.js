import template from './nav.html';
import styles from './nav.scss';

export default {
  template,
  controller,
  styles
};

function controller() {
  this.styles = styles;
}