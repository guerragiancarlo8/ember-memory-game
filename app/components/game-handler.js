import Ember from 'ember';

export default Ember.Component.extend({

  clickedCard: null,
  clickedCards: null,

  init() {
    this._super(...arguments);
    this.set('clickedCard', '');
    this.set('clickedCards', []);
  },
  handleTurn(clickedCards) {
    if(clickedCards[0] === clickedCards[1]){
      console.log('we have a matching pair!');
      this.set('clickedCards', []);
    } else {
      console.log('no match!');
      this.set('clickedCards', []);
    }
  },
  actions: {
    handleCardClick(someUrl) {
      if(this.clickedCards.length === 1){
        //we know the array will have 2 cards to evaluate now.
        this.set('clickedCard', someUrl);
        this.clickedCards.push(this.clickedCard);
        this.set('clickedCard', '');
        //we call handleTurn because we have 2 cards
        this.handleTurn(this.clickedCards);
      } else {
        // we just add the first clicked card to the array
        this.set('clickedCard', someUrl);
        this.clickedCards.push(this.clickedCard);
        this.set('clickedCard', '');
      }
    }
  }
});
