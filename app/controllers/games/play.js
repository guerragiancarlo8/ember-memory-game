import Ember from 'ember';

export default Ember.Controller.extend({
  clickedCard: null,
  clickedCards: null,

  init() {
    this._super(...arguments);
    this.set('clickedCard', '');
    this.set('clickedCards', []);
  },
  handleTurn(clickedCards) {
    if(Ember.get(clickedCards[0], 'url') === Ember.get(clickedCards[1], 'url')){
      //set flipped value at isFlipped=true and make them stay that way
      //console.log('we have a matching pair!');
      Ember.set(clickedCards[0], 'isDisabled', true);
      Ember.set(clickedCards[1], 'isDisabled', true);
      this.set('clickedCards', []);
    } else {
      //reset the cards to not flipped
      //we set timeout to provide natural flip-back UI
      setTimeout(function () {
        Ember.set(clickedCards[0], 'isFlipped', false);
        Ember.set(clickedCards[1], 'isFlipped', false);
      }, 500);
      this.set('clickedCards', []);
    }
  },
  actions: {
    handleCardClick(cardInstance) {
      if(this.clickedCards.length === 1){
        //we know the array will have 2 cards to evaluate now.
        this.set('clickedCard', cardInstance);
        this.get('clickedCards').pushObject(this.clickedCard);
        this.set('clickedCard', '');
        //we call handleTurn because we have 2 cards
        this.handleTurn(this.get('clickedCards'));
      } else {
        // we just add the first clicked card to the array
        this.set('clickedCard', cardInstance);
        this.get('clickedCards').pushObject(this.clickedCard);
        this.set('clickedCard', '');
      }

    },
    toggleIsFlipped(cardInstance) {
      //Must fix this. toggleProperty not working for some reason
      if(Ember.get(cardInstance, 'isFlipped') === false)
        Ember.set(cardInstance, 'isFlipped', true);
      else {
        Ember.set(cardInstance, 'isFlipped', false);
      }
    }
  }
});
