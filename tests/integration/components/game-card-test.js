import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('game-card', 'Integration | Component | game card', {
  integration: true
});

test('should have a symbol property defined', function(assert) {
  this.render(hbs `{{game-card symbol='anUrl'}}`);
  assert.equal(this.$('img').attr('src'), 'anUrl', 'has the URL we passed assigned');
});
