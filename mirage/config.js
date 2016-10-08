export default function() {
  this.namespace = '/api';

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
            url: "assets/images/celery.png"
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
    return {data: games.find((game) => request.params.id === game.id)};
  });

  /*
  this.get('/games', function () {
    return {
      data: [{
        id: 4,
        type: 'games',
        attributes: {
          cards: [
            {
              url: "assets/images/apple.jpg"
            }, {
              url: "assets/images/apple.jpg"
            }, {
              url: "assets/images/banana.png"
            }, {
              url: "assets/images/banana.png"
            }]
        }
      }, {
        id: 6,
        type: 'games',
        attributes: {
          cards: [
            {
              url: "assets/images/apple.jpg"
            }, {
              url: "assets/images/apple.jpg"
            }, {
              url: "assets/images/banana.png"
            }, {
              url: "assets/images/banana.png"
            }, {
              url: "assets/images/broccoli.jpg"
            }, {
              url: "assets/images/broccoli.jpg"
            }]
        }
      }, {
        id: 8,
        type: 'games',
        attributes: {
          cards: [
            {
              url: "assets/images/apple.jpg"
            }, {
              url: "assets/images/apple.jpg"
            }, {
              url: "assets/images/banana.png"
            }, {
              url: "assets/images/banana.png"
            }, {
              url: "assets/images/broccoli.jpg"
            }, {
              url: "assets/images/broccoli.jpg"
            }, {
              url: "assets/images/celery.png"
            }, {
              url: "assets/images/celery.png"
            }]
        }
      }, {
        id: 10,
        type: 'games',
        attributes: {
          cards: [
            {
              url: "assets/images/apple.jpg"
            }, {
              url: "assets/images/apple.jpg"
            }, {
              url: "assets/images/banana.png"
            }, {
              url: "assets/images/banana.png"
            }, {
              url: "assets/images/broccoli.jpg"
            }, {
              url: "assets/images/broccoli.jpg"
            }, {
              url: "assets/images/celery.png"
            }, {
              url: "assets/images/celery.png"
            }, {
              url: "assets/images/orange.jpg"
            }, {
              url: "assets/images/orange.jpg"
            }]
        }
      }, {
        id: 12,
        type: 'games',
        attributes: {
          cards: [
            {
              url: "assets/images/apple.jpg"
            }, {
              url: "assets/images/apple.jpg"
            }, {
              url: "assets/images/banana.png"
            }, {
              url: "assets/images/banana.png"
            }, {
              url: "assets/images/broccoli.jpg"
            }, {
              url: "assets/images/broccoli.jpg"
            }, {
              url: "assets/images/celery.png"
            }, {
              url: "assets/images/celery.png"
            }, {
              url: "assets/images/orange.jpg"
            }, {
              url: "assets/images/orange.jpg"
            }, {
              url: "assets/images/tomato.png"
            }, {
              url: "assets/images/tomato.png"
            }]
        }
      }]
    };
  });
  */
}
