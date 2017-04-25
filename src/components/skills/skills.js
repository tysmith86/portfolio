import template from './skills.html';
import styles from './skills.scss';

export default {
  template,
  styles,
  controller
};

function controller(){
  this.styles = styles;
}