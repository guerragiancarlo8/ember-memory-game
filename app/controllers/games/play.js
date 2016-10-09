import Ember from 'ember';

export default Ember.Controller.extend({
  clickedCard: null,
  init() {
    this.set('clickedCard', '');
  },

  actions: {
    handleCardClick(someUrl) {
      if(this.clickedCard === '') {
        //we store first clicked card
        this.set('clickedCard', someUrl);
      } else if(someUrl === this.clickedCard){
        //we assume the card clicked was a match. winning pair. we reset the variable;
        console.log('we have a matching pair');
        //logic to maintain the two cards with the image flipped
        this.set('clickedCard', '');
      } else if(this.clickedCard !== '' && someUrl !== this.clickedCard){
        console.log('nope. restart');
        this.set('clickedCard', '');
        //reset the clickedCard variable;
        //we assume the second clicked card wasn't a match. so we reset
      }
    }
  }
});
