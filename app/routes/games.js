import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('game');
  },
  setupController(controller, model) {
    controller.set('model', model);
  },
  actions: {
    showModal() {
      window.onload = function () {
        document.getElementById('#startModal').modal('show');
      };
    }
  }
});
