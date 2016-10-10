import Ember from 'ember';

export default Ember.Controller.extend({
  clickedCard: '',
  clickedCards: [],
  totalStored: [],
  openModal: false,

  init() {
    this._super(...arguments);
  },
  handleTurn(clickedCards) {
    console.log(this.clickedCards);
    let winMusic = document.querySelector('#gameWin');
    let gameSound = document.querySelector('#gameSound');
    let pair = document.querySelector('#rightPair');
    if(Ember.get(clickedCards[0], 'url') === Ember.get(clickedCards[1], 'url') &&
        Ember.get(clickedCards[0], 'orderId') !== Ember.get(clickedCards[1], 'orderId')){
      //we have a matching pair!
      //set flipped value at isFlipped=true and make them stay that way
      //we check to see if matching pair is not null, just in case trouble with audio file asset
      if(pair !== null){
        pair.play();
      }
      Ember.set(clickedCards[0], 'isDisabled', true);
      Ember.set(clickedCards[1], 'isDisabled', true);
      this.get('totalStored').pushObject(clickedCards[0]);
      this.get('totalStored').pushObject(clickedCards[1]);
      this.set('clickedCards', []);
      if(pair !== null){
        setTimeout(function () {
          pair.pause();
          pair.currentTime = 0;
        }, 800);
      }
      if(this.get('totalStored').length === document.getElementsByClassName('front').length){
        //display the modal after we've won the game
        this.set('totalStored', []);
        this.set('openModal', true);
        //play the music
        gameSound.pause();
        winMusic.play();
      }
    } else {
      //reset the cards to not flipped
      //we set timeout to provide a nice flip-back effect
      setTimeout(function () {
        Ember.set(clickedCards[0], 'isFlipped', false);
        Ember.set(clickedCards[1], 'isFlipped', false);
      }, 500);
      this.set('clickedCards', []);
    }
  },
  actions: {
    reloadGame() {
      let winMusic = document.querySelector('#gameWin');
      let gameSound = document.querySelector('#gameSound');
      if(winMusic !== null){
        winMusic.pause();
        winMusic.currentTime = 0;
      }
      this.get('target.router').refresh();
      if(gameSound !== null){
        gameSound.play();
      }
    },
    backToMainMenu() {
      let winMusic = document.querySelector('#gameWin');
      winMusic.pause();
      winMusic.currentTime = 0;
      this.set('openModal', false);
      window.location.replace("/");
    },
    handleCardClick(cardInstance) {
      let cardFlipSound = document.querySelector('#cardFlip');

      if(cardFlipSound.paused !== true && Ember.get(cardInstance, 'isDisabled') === false){
        cardFlipSound.pause();
        cardFlipSound.currentTime = 0;
        cardFlipSound.play();
      } else {
        cardFlipSound.play();
      }
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
      if(Ember.get(cardInstance, 'isFlipped') === false){
        Ember.set(cardInstance, 'isFlipped', true);
      } else {
        Ember.set(cardInstance, 'isFlipped', false);
      }
    }
  }
});
