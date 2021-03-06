import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('games', function() {
    this.route('play', { path: '/:game_id'});
  });
});

export default Router;
