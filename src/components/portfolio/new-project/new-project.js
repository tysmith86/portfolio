import template from './new-project.html';

export default {
  template,
  bindings: {
    add: '<',
    view: '='
  },
  controller
};

function controller() {
  this.clearFields = () => {
    this.title = '';
    this.url = '';
    this.repo = '';
    this.image = '';
    this.desc = '';
  };

  this.addNew = () => {
    this.add({
      title: this.title,
      url: this.url,
      repo: this.repo,
      image: this.image,
      desc: this.desc
    });
    this.clearFields();
  };
};