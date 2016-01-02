(function(angular, undefined) {
  "use strict";
  angular.module('listsApp', ['ngMaterial', 'ngMessages']).controller('ListsController', ListsController);

  function ListsController($scope, $mdDialog) {

    //list
    $scope.listType = "";
    $scope.listName = "";
    $scope.errorOnRequired = false;
    $scope.showAddListDialog = showAddListDialog;
    $scope.listSelected = false;
    $scope.selectedList = {};

    //item
    $scope.itemName = "";
    $scope.itemPrice = "";

    //List prototypes
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

    //selecting list
    $scope.selectList = function($list) {
      $scope.listSelected = true;
      $scope.selectedList = $list;
      console.log($list);
    }

    $scope.addItemToList = function() {
      console.log("test");
    }

    $scope.openMenu = function($mdOpenMenu, ev) {
      var originatorEv = ev;
      $mdOpenMenu(ev);
    }

    //dialog for adding item to list
    $scope.showAddItemDialog = function($event) {
      console.log("test");
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        targetEvent : $event,
        template:     '<md-dialog layout-padding>' +
                      '  <md-dialog-content class="createListForm">'+
                      '     <h2>Add Item</h2>' +
                      '     <form name="addItemForm">' +
                      '       <div layout-gt-sm="row">' +
                      '         <md-input-container class="md-block formInput" flex-gt-sm>' + 
                      '           <label>Item Name</label>' + 
                      '           <input required name="itemName" ng-model="itemName">' +
                      '           <div ng-if="$scope.errorOnRequired">' +
                      '             <div ng-message="required">This is required.</div>' +
                      '           </div>' +
                      '         </md-input-container>' + 
                      '         <md-input-container class="md-block formInput" flex-gt-sm>' + 
                      '           <label>Item Price</label>' + 
                      '           <input required type="number" step="0.01" name="itemPrice" ng-model="itemPrice">' +
                      '           <div ng-if="$scope.errorOnRequired">' +
                      '             <div ng-message="required">This is required.</div>' +
                      '           </div>' +
                      '         </md-input-container>' + 
                      '         </div>' +
                      '       <md-radio-group ng-model="listType" class="md-primary">' +
                      '         <md-radio-button value="Birthday" class="md-primary formInput">Birthday</md-radio-button>' +
                      '         <md-radio-button value="Christmas" class="md-primary formInput">Christmas</md-radio-button>' + 
                      '       </md-radio-group>' + 
                      '       <md-button ng-click="test()" class="md-primary">' +
                      '         Create!' +
                      '       </md-button>' +
                      '     </form>' + 
                      '  </md-dialog-content>' +
                      '</md-dialog>',
        clickOutsideToClose: true,
        locals: {
          itemName: $scope.itemName,
          itemPrice: $scope.itemPrice
        },
        controller: AddItemController
      });

      function AddItemController($scope, itemPrice) {
        $scope.itemPrice = itemPrice;

        $scope.test = function() {
          console.log($scope.itemPrice);
        }

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

    //dialog for adding list
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
