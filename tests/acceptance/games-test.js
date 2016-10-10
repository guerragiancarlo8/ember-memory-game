import { test } from 'qunit';
import moduleForAcceptance from 'testground/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | games');


test('should redirect to games route', function(assert) {
  visit('/');
  andThen(function () {
    assert.equal(currentURL(), '/games', 'should redirect automatically');
  });
});

test('should have a toggle music button and a back to menu button', function(assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.uibutton').length, 2, 'Both should be of class uibutton');
  });
});
test('game music starts on page load', function(assert){

  visit('/games');
  andThen(function () {
    let sound = $('#gameSound').attr('autoplay');
    assert.equal(sound, "autoplay", 'game music is playing on app start');
  });
});



test('User must be provided with 5 possible game options', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.gamesizebutton').length, 5);
  });
});

test('When user clicks a gamesizebutton, should be taken to game of correct size', function (assert) {
  visit('/games');
  click('button:contains("4")');
  andThen(function () {
    assert.equal(currentURL(), '/games/4', 'should navigate to appropriate game level URL');
    assert.equal(find('.front').length, 4, 'four game cards must have been created');
  });
});
