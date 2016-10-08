import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['flip-container'],
  actions: {
    addToArray() {
      console.log('i was clicked!');
    }
  }
});
