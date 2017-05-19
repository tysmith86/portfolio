import template from './portfolio.html';
import styles from './portfolio.scss';

export default {
  template,
  styles,
  controller
};

controller.$inject = ['projectService'];

function controller() {
  this.styles = styles;

  this.add = project => {
    projectService.add(project)
      .then(saved => console.log(saved))
      .catch(err => console.error(err));
  };
};