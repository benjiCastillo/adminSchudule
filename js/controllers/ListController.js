app.controller('ListController', ['$scope', '$firebaseArray', '$firebaseObject',function($scope, $firebaseArray, $firebaseObject){
  
  const rootRef = firebase.database().ref();
  const values = rootRef.child('parking');
  $scope.values = $firebaseArray(values);

  console.log($scope.values);

  $scope.removeTaxi = function(id) {
    var ref = values.child(id);
    var value = $firebaseObject(ref);
    value.$remove();
   };

}]);

app.filter("booleanFilter", function filtroBooleanos () {
  return function (input) {
    if(input === false || input == 0){
      return "Cerrado";
    }else if(input === true || input == 1){
      return "Disponible"
    }
  }
});

app.filter("connectedFilter", function filtroConectado () {
  return function (input) {
    if(input === false || input == 0){
      return "No";
    }else if(input === true || input == 1){
      return "Si";
    }
    return "Error";
  }
})