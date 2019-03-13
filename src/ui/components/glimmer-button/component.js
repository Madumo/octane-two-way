import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';

export default class GlimmerButtonComponent extends Component {
  @tracked count = 0;

  increment() {
    this.count++;
  }
}
