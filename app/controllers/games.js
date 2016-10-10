import Ember from 'ember';

export default Ember.Controller.extend({
  openModal: null,

  init() {
    this.set('openModal', true);
  },

  actions: {
    //disable the get started button after a game has begun.
    //when game completes, enable again.
    backToMainMenu() {
      alert('are you sure?');
      window.location.replace("/");
    },

    closeModal() {
      this.set('openModal', false);
    }
  }
});
