import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['flip-container'],
  actions: {
    doCardClick(param){
      this.get('onCardClick')(param);
    },
    doCardFlip(param) {
      //hacky way of disabling card flip on win. gotta work on this
      if(!param.isDisabled)
        this.get('toggleIsFlipped')(param);
    }
  }
});
