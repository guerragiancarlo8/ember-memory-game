import Ember from 'ember';

export default Ember.Route.extend({
  shuffle(array) {
    var m = array.length, t, i;

  // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  },

  model(params) {

    return this.store.findRecord('game', params.game_id);
    //return this.store.findAll('game');
    //return this.shuffle(this.store.findRecord('game', params.game_id));
  }
});
