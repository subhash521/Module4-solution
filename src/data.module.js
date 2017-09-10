(function(){
  'use strict';
  angular.module('Data',[])
  .controller('categoriesController',categoriesController)
  .controller('categoryDetailController',categoryDetailController);

  categoriesController.$inject=['items'];
  function categoriesController(items){
    var categories=this;
    categories.items=items;

  }

  categoryDetailController.$inject=['items'];
  function categoryDetailController(items){
    var categoryDetail=this;
    categoryDetail.items=items;
    console.log(categoryDetail.items);

  }


})();
