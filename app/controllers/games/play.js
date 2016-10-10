import Ember from 'ember';

export default Ember.Controller.extend({
  clickedCard: null,
  clickedCards: null,
  totalStored: null,
  openModal: null,

  init() {
    this._super(...arguments);
    this.set('clickedCard', '');
    this.set('clickedCards', []);
    this.set('totalStored', []);
    this.set('openModal', false);
  },
  handleTurn(clickedCards) {
    if(Ember.get(clickedCards[0], 'url') === Ember.get(clickedCards[1], 'url') &&
        Ember.get(clickedCards[0], 'orderId') !== Ember.get(clickedCards[1], 'orderId')){
      //set flipped value at isFlipped=true and make them stay that way
      //console.log('we have a matching pair!');
      Ember.set(clickedCards[0], 'isDisabled', true);
      Ember.set(clickedCards[1], 'isDisabled', true);
      this.get('totalStored').pushObject(clickedCards[0]);
      this.get('totalStored').pushObject(clickedCards[1]);
      this.set('clickedCards', []);
      //bad way of validating game finished
      if(this.get('totalStored').length === document.getElementsByClassName('front').length){
        //display the modal after we've won the game
        this.set('totalStored', []);
        this.set('openModal', true);
      }
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
    reloadGame() {
      this.get('target.router').refresh();
    },
    backToMainMenu() {
      this.set('openModal', false);
      window.location.replace("/");
    },
    handleCardClick(cardInstance) {
      //console.log(cardInstance);
      if(this.clickedCards.length === 1){
        //we know the array will have 2 cards to evaluate now.
        if(Ember.get(cardInstance, 'isDisabled') === false){
          this.set('clickedCard', cardInstance);
          this.get('clickedCards').pushObject(this.clickedCard);
          this.set('clickedCard', '');
          //we call handleTurn because we have 2 cards
          this.handleTurn(this.get('clickedCards'));
        }

      } else {
        // we just add the first clicked card to the array
        if(Ember.get(cardInstance, 'isDisabled') === false){
          this.set('clickedCard', cardInstance);
          this.get('clickedCards').pushObject(this.clickedCard);
          this.set('clickedCard', '');
        }
      }
    },
    toggleIsFlipped(cardInstance) {
      //Must fix this. toggleProperty not working for some reason
      if(Ember.get(cardInstance, 'isFlipped') === false){
        Ember.set(cardInstance, 'isFlipped', true);
      } else {
        Ember.set(cardInstance, 'isFlipped', false);
      }
    }
  }
});
