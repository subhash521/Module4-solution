(function(){
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/home.template.html'
      })

      .state('categories',{
        url: '/categories',
        templateUrl: 'src/categories.template.html',
        controller: 'categoriesController as categoryController',
        resolve:{
          items: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('choice',{
        url: '/choice/{shortName}',
        templateUrl: 'src/categotyDetail.template.html',
        controller: 'categoryDetailController as categoryDetail',
        params: {
          shortName: null
        }
        ,
        resolve:{
          items: ['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
           return MenuDataService.getItemsForCategory($stateParams.shortName);

          }]
        }
      })
  }

})();
