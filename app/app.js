(function(){
  var app = angular.module('gemStore', []);

  app.directive('productDescription', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });

  app.controller("StoreController", function(){
    this.products = gems;
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
        }]
      },
      {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
        images: [
          "img/gem-01.gif",
          "img/gem-03.gif",
          "img/gem-04.gif",
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
        }]
      }
  ];




})();
