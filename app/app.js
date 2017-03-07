(function(){
  var app = angular.module('gemStore', ['store-products']);

  app.controller("StoreController", function(){
    this.products = gems;
  });

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.setCurrent = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller("ReviewController", function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });


  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      images: [
        "img/gem-02.gif",
        "img/gem-05.gif",
        "img/gem-09.gif"
      ],
      reviews: [{
          stars: 5,
          body: "I love this gem!",
          author: "joe@thomas.com",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "This gem sucks.",
          author: "tim@hater.com",
          createdOn: 1397490980837
        }],
        shine: 70,
        faces: 6,
        rarity: 2
      },
      {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
        images: [
          "img/gem-07.gif",
          "img/gem-08.gif",
          "img/gem-10.gif",
        ],
        reviews: [{
            stars: 3,
            body: "I think this gem was just OK, could honestly use more shine, IMO.",
            author: "JimmyDean@sausage.com",
            createdOn: 1397490980837
          }, {
            stars: 4,
            body: "Any gem with 12 faces is for me!",
            author: "gemsRock@alyssaNicoll.com",
            createdOn: 1397490980837
        }],
        shine: 9,
        faces: 12,
        rarity: 6
      }
  ];




})();
