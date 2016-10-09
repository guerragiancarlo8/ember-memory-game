import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['flip-container'],
  click() {
    this.sendAction('action', this.symbol);
  }
});
