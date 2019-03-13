import Component from '@ember/component';

export default class ClassicButtonComponent extends Component {
  tagName = 'button';

  click() {
    this.set('count', this.count + 1);
  }
}
