(function(){
'use strict';
angular.module('Data')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

MenuDataService.$inject=['$http','ApiBasePath'];
function MenuDataService($http,ApiBasePath){
  var service=this;
  var categories;
  var responsedata;
  service.getAllCategories=function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (response) {
      return response.data;
    });

  };


    service.getItemsForCategory=function(shortName){
      return $http({
        method: "GET",
        url: (ApiBasePath+"/menu_items.json"),
        params:{
          category: shortName
        }
      }).then(function(response){
        return response.data;

      });

    };

}




})();
