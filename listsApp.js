angular.module('listsApp', ['ngMaterial']).controller('ListsController', function($scope, $mdDialog) {

    var wishList = this;

    wishList.test = "Type";
    wishList.name = "Name";
    wishList.dateCreated = "Date Created";
    wishList.dateModified = "Date Modified";

    wishList.wishLists = [
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Birthday', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'},
      {type:'Christmas', name:'test', dateCreated:'11/23/2015', dateModified:'Today'}
    ];

    var alert = $mdDialog.alert({
        title: "Let's create a Wish List!",
        template: '<md-content ng-controller="ListsController as wishList" flex layout-padding>' + 
                    '<h2>Create a Wish List!</h2>' + 
                    '<md-input-container class="md-block">' + 
                      '<label>Wish List Name</label>' + 
                      '<input required name="listName">' +
                    '</md-input-container>' + 
                    '<md-dialog-actions>' +
                      '<md-button ng-click="closeDialog($event)" class="md-primary">' +
                        'Create!' +
                      '</md-button>' +
                    '</md-dialog-actions>' + 
                  '</md-content>',
        clickOutsideToClose: true
      });

    $scope.showAlert = function(ev) {
      $mdDialog.show(alert);
    };

    $scope.closeDialog = function(ev) {
      console.log("test");
      $mdDialog.hide(alert);
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