(function(){

  angular.module('Data')
  .component('categoriesList',{
    templateUrl: 'src/categoriesList.template.html',
    bindings: {
      items: '<'
    }
  });
})();
