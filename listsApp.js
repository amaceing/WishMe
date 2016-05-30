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
    $scope.itemName;
    $scope.itemPrice;

    //List prototypes
    $scope.wishLists = [
      {
        type:'Christmas', name:'Julissa\'s Christmas', dateCreated:'11/23/2015', dateModified:'Today', 
        items: [
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date())
        ]
      },
      {
        type:'Birthday', name:'Ruben\'s Birthday', dateCreated:'11/23/2015', dateModified:'Today', 
        items: [
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date())
        ]
      },
      {
        type:'Christmas', name:'Emily\'s Christmas', dateCreated:'11/23/2015', dateModified:'Today', 
        items: [
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date())
        ]
      },
      {
        type:'Birthday', name:'Mom\'s Birthday', dateCreated:'11/23/2015', dateModified:'Today', 
        items: [
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date()),
          new WishListItem('Rocket League', 9.99, new Date())
        ]
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

    $scope.deletion = function() {
      $('.md-2-line').hover(
        function() {
          $(this).css("background-color", "#F2DEDE");
        },
        function() {
          $(this).css("background-color", "white");
        }
      )
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
        templateUrl: 'addItemDialog.html',
        clickOutsideToClose: true,
        locals: {
          selectedList: $scope.selectedList,
          itemName: $scope.itemName,
          itemPrice: $scope.itemPrice
        },
        controller: AddItemController
      });

      function AddItemController($scope, selectedList, itemName, itemPrice) {
        console.log(itemName);
        console.log(itemPrice);
        $scope.selectedList = selectedList;
        $scope.itemName = itemName;
        $scope.itemPrice = itemPrice;

        $scope.test = function() {
          $scope.selectedList.items.unshift({name: $scope.itemName, dateAdded: new Date(), price:$scope.itemPrice});
          $scope.closeDialog();
        }

        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      }
    }

    //dialog for adding list
    function showAddListDialog($event) {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        targetEvent : $event,
        templateUrl: 'addListDialog.html',
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
