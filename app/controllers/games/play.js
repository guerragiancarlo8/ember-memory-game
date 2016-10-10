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
    let winMusic = document.querySelector('#gameWin');
    let gameSound = document.querySelector('#gameSound');
    let pair = document.querySelector('#rightPair');
    if(Ember.get(clickedCards[0], 'url') === Ember.get(clickedCards[1], 'url') &&
        Ember.get(clickedCards[0], 'orderId') !== Ember.get(clickedCards[1], 'orderId')){
      //we have a matching pair!
      //set flipped value at isFlipped=true and make them stay that way
      //console.log('we have a matching pair!');
      pair.play();
      Ember.set(clickedCards[0], 'isDisabled', true);
      Ember.set(clickedCards[1], 'isDisabled', true);
      this.get('totalStored').pushObject(clickedCards[0]);
      this.get('totalStored').pushObject(clickedCards[1]);
      this.set('clickedCards', []);
      setTimeout(function () {
        pair.pause()
        pair.currentTime = 0;
      }, 1000)

      //bad way of validating game finished
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
      let winMusic = document.querySelector('#gameWin');
      let gameSound = document.querySelector('#gameSound');
      winMusic.pause();
      winMusic.currentTime = 0;
      this.get('target.router').refresh();
      gameSound.play();

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
      let pairedUp = document.querySelector('#pairedUp');
      let wrongPair = document.querySelector('#wrongPair');


      if(cardFlipSound.paused !== true && Ember.get(cardInstance, 'isDisabled') === false){
        cardFlipSound.pause();
        cardFlipSound.currentTime = 0;
        cardFlipSound.play();
      } else {
        cardFlipSound.play();
      }
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
