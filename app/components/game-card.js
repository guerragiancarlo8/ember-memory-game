import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['flip-container'],
  isFlipped: false,
  actions: {
    doCardClick(param){
      this.get('onCardClick')(param);
    },
    toggleIsFlipped() {
      this.toggleProperty('isFlipped');
    }
  }
});
