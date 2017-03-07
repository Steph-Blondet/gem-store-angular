(function(){
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.products = gems;
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
            canPurchase: false
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
            canPurchase: false
        }
    ];

    app.controller("PanelController", function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

})();
