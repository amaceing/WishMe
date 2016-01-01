(function(angular, undefined) {
  "use strict";
  angular.module('listsApp', ['ngMaterial', 'ngMessages']).controller('ListsController', ListsController);

  function ListsController($scope, $mdDialog) {
    $scope.listType = "";
    $scope.listName = "";
    $scope.errorOnRequired = false;
    $scope.showAddListDialog = showAddListDialog;
    $scope.listSelected = false;
    $scope.selectedList = {};

    $scope.wishLists = [
      {
        type:'Christmas', name:'Julissa\'s Christmas', dateCreated:'11/23/2015', dateModified:'Today', 
        items: [{name:'Rocket League'}, {name:'Toothpase'}, {name:'Dog Bowls'}, {name: 'iPhone'}]
      },
      {
        type:'Birthday', name:'Ruben\'s Birthday', dateCreated:'11/23/2015', dateModified:'Today', 
        items: [{name:'Rocket League'}, {name:'Wallet'}, {name:'Watch'}]
      },
      {
        type:'Christmas', name:'Emily\'s Christmas', dateCreated:'11/23/2015', dateModified:'Today', 
        items: [{name:'Diamond'}, {name:'Purse'}, {name:'Jacket'}]
      },
      {
        type:'Birthday', name:'Mom\'s Birthday', dateCreated:'11/23/2015', dateModified:'Today', 
        items: [{name:'Boots'}, {name:'Watch'}, {name:'Bed'}]
      }
    ];

    $scope.selectList = function($list) {
      $scope.listSelected = true;
      $scope.selectedList = $list;
      console.log($list);
    }

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
