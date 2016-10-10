import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleGameMusic() {
      let gameSound = document.querySelector('#gameSound');
      if(gameSound.paused !== true){
        gameSound.pause();
        gameSound.currentTime = 0;
      } else if(gameSound.paused === true){
        gameSound.play();
      }
    },
    backToMainMenu() {
      alert('are you sure?');
      window.location.replace("/");
    }
  }
});
