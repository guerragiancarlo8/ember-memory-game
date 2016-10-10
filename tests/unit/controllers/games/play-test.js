import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:games/play', 'Unit | Controller | games/play', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('all init variables correctly set', function(assert) {
  let controller = this.subject();
  assert.equal(controller.clickedCard, '');
  assert.equal(typeof controller.clickedCards, 'object');
  assert.equal(typeof controller.totalStored, 'object');
  assert.equal(controller.openModal, false);
});

test('handleTurn correctly assesses a correct combination of cards', function(assert) {
  let controller = this.subject();
  controller.set('clickedCards', [{url: '', orderId: '1'}, {url: '', orderId: '2'}]);
  controller.handleTurn(controller.clickedCards);
  assert.equal(controller.get('totalStored').length, 2, 'it should see that the URL is the same but different cards. Therefore a match');
});

//testing play controller's actions
