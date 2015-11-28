(function(angular, undefined) {
  angular.module('listsApp', ['ngMaterial']).controller('ListsController', ListsController);

  function ListsController($rootScope, $scope, $mdDialog) {
    $scope.listName = "";
    $scope.listType;

    $rootScope.wishLists = [
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'}
    ];

    var parentEl = angular.element(document.body);
    var alert = $mdDialog.alert({
        parent: parentEl,
        template:     '<md-dialog layout-padding>' +
                      '  <md-dialog-content class="createListForm">'+
                      '     <h2>Create a Wish List</h2>' + 
                      '     <form name="createListForm">' +
                      '       <md-input-container class="md-block formInput">' + 
                      '         <label>Wish List Name</label>' + 
                      '         <input name="listName" ng-model="listName">' +
                      '       </md-input-container>' + 
                      '       <md-radio-group ng-model="listType" class="md-primary">' +
                      '         <md-radio-button value="Birthday" class="md-primary formInput">Birthday</md-radio-button>' +
                      '         <md-radio-button value="Christmas" class="md-primary formInput">Christmas</md-radio-button>' + 
                      '       </md-radio-group>' + 
                      '       <md-button ng-click="addList()" class="md-primary">' +
                      '         Create!' +
                      '       </md-button>' +
                      '     </form>' + 
                      '  </md-dialog-content>' +
                      '</md-dialog>',
        clickOutsideToClose: true,
        controller: ListsController
    });

    $scope.showAlert = function(ev) {
      $mdDialog.show(alert);
    };

    $scope.closeDialog = function() {
      console.log($scope.listType);
      console.log($scope.listName);
      $mdDialog.hide(alert);

    }

    $scope.addList = function() {
        $rootScope.wishLists.push({type:$scope.listType, name:$scope.listName, dateCreated: 'Test', dateModified: 'Test'});
        $mdDialog.hide(alert);
    }
  }
})(angular);