(function(){
  var app = angular.module('store-products', []);

  app.directive('productDescription', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });
})();
