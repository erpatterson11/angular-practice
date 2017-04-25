angular.module('practiceApp').controller('orderFormCtrl', function($scope) {

    $scope.services = [
      {
        'name':'Web Development',
        'price': 300
      },
      {
        'name':'Design',
        'price': 400
      },
      {
        'name':'Integration',
        'price': 250
      },
      {
        'name':'Training',
        'price': 220
      }
    ];

    $scope.toggleActive = function(service) {
      service.active = !service.active;
    }

    $scope.total = function() {
      var total = 0;
      angular.forEach($scope.services, function(service) {
        if (service.active) {
          total += service.price;
        }
      })
      return total;
    }



})
