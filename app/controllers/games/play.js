import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    proveImAlive(someUrl) {
      console.log('Im aliiiiveeee' + someUrl);
    }
  }
});
