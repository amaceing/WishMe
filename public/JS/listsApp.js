(function (angular, undefined) {
	"use strict";
	angular.module('listsApp', ['ngMaterial']).controller('ListsController', ListsController);

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

		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				// User is signed in.
			} else {
				// User is signed out.
				console.log("signed out?");
				window.location.href = "index.html";
			}
		});
		
		//List prototypes
		$scope.wishLists = [
			new WishList(
				'Julissa\'s Christmas',
				'Christmas',
				'11/23/2015',
				'06/04/2016', [
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
			),
			new WishList('Julissa\'s Christmas',
				'Christmas',
				'11/23/2015',
				'06/04/2016', [
					new WishListItem('Rocket League', 9.99, new Date()),
					new WishListItem('Rocket League', 9.99, new Date()),
					new WishListItem('Rocket League', 9.99, new Date()),
					new WishListItem('Rocket League', 9.99, new Date()),
					new WishListItem('Rocket League', 9.99, new Date()),
					new WishListItem('Rocket League', 9.99, new Date())
				]
			),
			new WishList('Julissa\'s Christmas',
				'Christmas',
				'11/23/2015',
				'06/04/2016', [
					new WishListItem('Rocket League', 9.99, new Date()),
					new WishListItem('Rocket League', 9.99, new Date()),
					new WishListItem('Rocket League', 9.99, new Date()),
					new WishListItem('Rocket League', 9.99, new Date())
				]
			),
			new WishList(
				'Julissa\'s Christmas',
				'Christmas',
				'11/23/2015',
				'06/04/2016', [
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
			),
		];

		$scope.signUserOut = function() {
			firebase.auth().signOut().then(function() {
				// Sign-out successful.
				console.log("signed out");
				window.location.href = "index.html";
			}).catch(function(error) {
				// An error happened.
				console.log("sign out unsuccessful");
			});
		}

		//selecting list
		$scope.selectList = function ($list) {
			$scope.listSelected = true;
			$scope.selectedList = $list;
			console.log($list);
		}

		$scope.deletion = function () {
			$('.md-2-line').hover(
				function () {
					$(this).css("background-color", "#F2DEDE");
				},
				function () {
					$(this).css("background-color", "white");
				}
			)
		}

		$scope.openMenu = function ($mdOpenMenu, ev) {
			var originatorEv = ev;
			$mdOpenMenu(ev);
		}

		//dialog for adding item to list
		$scope.showAddItemDialog = function ($event) {
			var parentEl = angular.element(document.body);
			$mdDialog.show({
				parent: parentEl,
				targetEvent: $event,
				templateUrl: 'HTML/addItemDialog.html',
				clickOutsideToClose: true,
				locals: {
					selectedList: $scope.selectedList,
					itemName: $scope.itemName,
					itemPrice: $scope.itemPrice
				},
				controller: AddItemController
			});

			function AddItemController($scope, selectedList, itemName, itemPrice) {
				$scope.selectedList = selectedList;
				$scope.itemName = itemName;
				$scope.itemPrice = itemPrice;

				$scope.addItem = function () {
					console.log($scope.itemName);
					console.log($scope.itemPrice);
					var newItem = new WishListItem($scope.itemName, $scope.itemPrice, new Date());
					$scope.selectedList.wishListItems.unshift(newItem);
					$scope.closeDialog();
				}

				$scope.closeDialog = function () {
					$mdDialog.hide();
				}
			}
		}

		//dialog for adding list
		function showAddListDialog($event) {
			var parentEl = angular.element(document.body);
			$mdDialog.show({
				parent: parentEl,
				targetEvent: $event,
				templateUrl: 'HTML/addListDialog.html',
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

				$scope.closeDialog = function () {
					$mdDialog.hide();
				}

				$scope.addList = function () {
					if ($scope.listName == "") {
						$scope.errorOnRequired = true;
					} else {
						var newWishList = new WishList($scope.listName, $scope.listType, '12/31/2015', '06/03/2016', []);
						$scope.wishLists.push(newWishList);
						newWishList.saveList();
						$scope.closeDialog();
					}
				}
			}
		}
	}
})(angular);