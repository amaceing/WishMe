(function(angular, undefined) {
  "use strict";
  angular.module('listsApp', ['ngMaterial', 'ngMessages']).controller('ListsController', ListsController);

  function ListsController($scope, $mdDialog) {
    $scope.listType = "";
    $scope.listName = "";
    $scope.errorOnRequired = false;
    $scope.showAddListDialog = showAddListDialog;

    $scope.wishLists = [
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'}
    ];

    function showAddListDialog($event) {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        targetEvent : $event,
        template:     '<md-dialog layout-padding>' +
                      '  <md-dialog-content class="createListForm">'+
                      '     <h2>Create a Wish List</h2>' +
                      '     <form name="createListForm">' +
                      '       <md-input-container class="md-block formInput">' + 
                      '         <label>Wish List Name</label>' + 
                      '         <input required name="listName" ng-model="listName">' +
                      '         <div ng-if="$scope.errorOnRequired">' +
                      '           <div ng-message="required">This is required.</div>' +
                      '         </div>' +
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
        locals: {
          lists: $scope.wishLists,
          listName: $scope.listName,
          reqError: $scope.errorOnRequired,
          listType: $scope.listType
        },
        controller: AddListController
      });

      function AddListController($scope, $mdDialog, lists, listName, reqError, listType) {
        $scope.wishLists = lists;
        $scope.listName = listName;
        $scope.errorOnRequired = reqError;
        $scope.listType = listType;

        $scope.closeDialog = function() {
          $mdDialog.hide();
        }

        $scope.addList = function() {
          if ($scope.listName == "") {
            $scope.errorOnRequired = true;
          } else {
            $scope.wishLists.push({type: $scope.listType, name: $scope.listName, dateCreated: '12/31/2015', dateModified: 'Yesterday'});
            $scope.closeDialog();
          }
        }
      }
    }
  }
})(angular);
