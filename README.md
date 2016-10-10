# Ember Memory Game

An implementation of a memory game using EmberJS. I decided to kindly nickname it "Fruity Memory", because all images and gifs within this application are fruit or vegetable related. The user is first taken to a modal where he/she has to select how many squares he/she'd like to play (4, 6, 8, 10 or 12). Afterwards, he/she is taken to the game route where the user must match pairs of fruit/veggies until all cards have been revealed. The app has been tested to run on mobile devices both inside the Chrome dev tools and in actual physical devices. This application also comes with a basic test suite to validate basic User Experience.

# End-User Considerations

While I could have easily added more cards into the game, and styled the cards to look more "normal", I took the liberty of making several assumptions about the end-user of this application. The first is that this application will mainly be used by young children who are more interested in the visual aspect of interaction than the number of cards to be completed. Thus special priority was placed in visual components such as animations and sounds as opposed to number of cards and overall game complexity.

The second consideration was for mobile device users. Since my goal was mainly the visual appeal, cards were limited to just 12. This enabled me to create bigger and more visually appealing cards for both desktop and mobile users, which were the appropriate size for both click and tap events. 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/guerragiancarlo8/ember-memory-game.git` this repository
* `cd ember-memory-game`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
