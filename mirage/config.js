export default function() {
  this.namespace = '/api';
  function shuffle(array) {
    var m = array.length, t, i;

    while (m) {

      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  };
  let games = [
    {
      id: '4',
      type: 'games',
      attributes: {
        cards: [
          {
            url: "../assets/images/apple.jpg"
          }, {
            url: "../assets/images/apple.jpg"
          }, {
            url: "../assets/images/banana.png"
          }, {
            url: "../assets/images/banana.png"
          }]
      }
    },
    {
      id: '6',
      type: 'games',
      attributes: {
        cards: [
          {
            url: "../assets/images/apple.jpg"
          }, {
            url: "../assets/images/apple.jpg"
          }, {
            url: "../assets/images/banana.png"
          }, {
            url: "../assets/images/banana.png"
          }, {
            url: "../assets/images/broccoli.jpg"
          }, {
            url: "../assets/images/broccoli.jpg"
          }]
      }
    },
    {
      id: '8',
      type: 'games',
      attributes: {
        cards: [
          {
            url: "../assets/images/apple.jpg"
          }, {
            url: "../assets/images/apple.jpg"
          }, {
            url: "../assets/images/banana.png"
          }, {
            url: "../assets/images/banana.png"
          }, {
            url: "../assets/images/broccoli.jpg"
          }, {
            url: "../assets/images/broccoli.jpg"
          }, {
            url: "../assets/images/celery.png"
          }, {
            url: "../assets/images/celery.png"
          }]
      }
    },
    {
      id: '10',
      type: 'games',
      attributes: {
        cards: [
          {
            url: "../assets/images/apple.jpg"
          }, {
            url: "../assets/images/apple.jpg"
          }, {
            url: "../assets/images/banana.png"
          }, {
            url: "../assets/images/banana.png"
          }, {
            url: "../assets/images/broccoli.jpg"
          }, {
            url: "../assets/images/broccoli.jpg"
          }, {
            url: "../assets/images/celery.png"
          }, {
            url: "../assets/images/celery.png"
          }, {
            url: "../assets/images/orange.jpg"
          }, {
            url: "../assets/images/orange.jpg"
          }]
      }
    },
    {
      id: '12',
      type: 'games',
      attributes: {
        cards: [
          {
            url: "../assets/images/apple.jpg"
          }, {
            url: "../assets/images/apple.jpg"
          }, {
            url: "../assets/images/banana.png"
          }, {
            url: "../assets/images/banana.png"
          }, {
            url: "../assets/images/broccoli.jpg"
          }, {
            url: "../assets/images/broccoli.jpg"
          }, {
            url: "../assets/images/celery.png"
          }, {
            url: "../assets/images/celery.png"
          }, {
            url: "../assets/images/orange.jpg"
          }, {
            url: "../assets/images/orange.jpg"
          }, {
            url: "../assets/images/tomato.png"
          }, {
            url: "../assets/images/tomato.png"
          }]
      }
  }];

  this.get('/games', function (db, request) {
    return {data: games}
  })
  this.get('/games/:id', function (db, request) {
    var game = games.find((game) => request.params.id === game.id);
    var cardsShuffled = shuffle(game.attributes.cards);
    game.attributes.cards = cardsShuffled;
    return {data: game};
    //return {data: games.find((game) => request.params.id === game.id)}

  });
}
