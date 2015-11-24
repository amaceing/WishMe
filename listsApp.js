angular.module('listsApp', ['ngMaterial']).controller('ListsController', function($scope, $mdDialog) {

    // var wishList = this;
    $scope.listName = "";
    $scope.listType;

    $scope.wishLists = [
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'}
    ];

    var alert = $mdDialog.alert({
        title: "Let's create a Wish List!",
        template: '<md-content class="createListForm" ng-controller="ListsController" flex layout-padding>' + 
                    '<h2>Create a Wish List</h2>' + 
                    '<md-input-container class="md-block formInput">' + 
                      '<label>Wish List Name</label>' + 
                      '<input required ng-model="listName">' +
                    '</md-input-container>' + 
                    '<md-radio-group class="formInput" ng-model="listType">' +
                      '<md-radio-button value="Birthday" class="md-primary">Birthday</md-radio-button>' +
                      '<md-radio-button value="Christmas" class="md-primary">Christmas</md-radio-button>' +
                    '</md-radio-group>' +
                    '<md-dialog-actions>' +
                      '<md-button ng-click="addList()" class="md-primary">' +
                        'Create!' +
                      '</md-button>' +
                    '</md-dialog-actions>' + 
                  '</md-content>',
        clickOutsideToClose: true
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

    // var todoList = this;
    // todoList.todos = [
    //   {text:'learn angular', done:true},
    //   {text:'build an angular app', done:false}];
 
    // todoList.addTodo = function() {
    //   todoList.todos.push({text:todoList.todoText, done:false});
    //   todoList.todoText = '';
    // };
 
    // todoList.remaining = function() {
    //   var count = 0;
    //   angular.forEach(todoList.todos, function(todo) {
    //     count += todo.done ? 0 : 1;
    //   });
    //   return count;
    // };
 
    // todoList.archive = function() {
    //   var oldTodos = todoList.todos;
    //   todoList.todos = [];
    //   angular.forEach(oldTodos, function(todo) {
    //     if (!todo.done) todoList.todos.push(todo);
    //   });
    // };
  });