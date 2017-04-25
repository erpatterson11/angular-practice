angular.module("practiceApp").controller("textEditorCtrl", function($scope) {

  $scope.editorShow = false;

  $scope.editMe = "Edit me!"

  $scope.toggleEditor = function(event) {
    event.stopPropagation();
    $scope.editorShow = !$scope.editorShow;
  }


  $scope.hideEditor = function() {
    $scope.editorShow = false;
  }




})
