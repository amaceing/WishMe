(function(angular, undefined) {
  angular.module('listsApp', ['ngMaterial']).controller('ListsController', ListsController);

  function ListsController($scope, $mdDialog) {
    $scope.listName = "";
    $scope.listType;

    $scope.wishLists = [
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'}
    ];

    var parentEl = angular.element(document.body);
    var alert = $mdDialog.alert({
        parent: parentEl,
        title: "Let's create a Wish List!",
        template:     '<md-dialog layout-padding>' +
                      '  <md-dialog-content class="createListForm">'+
                      '     <h2>Create a Wish List</h2>' + 
                      '     <md-input-container class="md-block formInput">' + 
                      '       <label>Wish List Name</label>' + 
                      '       <input required ng-model="listName">' +
                      '     </md-input-container>' + 
                      '     <md-list-item class="md-3-line md-no-proxy ng-scope" ng-repeat="list in wishLists">' +
                      '       <div class="md-list-item-text">' +
                      '         <h3>{{list.name}}</h3>' +
                      '  </md-dialog-content>' +
                      '</md-dialog>',
        clickOutsideToClose: true,
        locals: {
           wishLists: $scope.wishLists
        },
        controller: ListsController
    });

    $scope.showAlert = function(ev) {
      $mdDialog.show(alert);
    };

    $scope.closeDialog = function() {
      console.log("test");
      $mdDialog.hide(alert);
    }

    $scope.addList = function() {
      $scope.$apply(function(){
        wishLists.push({type:$scope.listType, name:$scope.listName, dateCreated: 'Test', dateModified: 'Test'});
      });
    }
  }
})(angular);