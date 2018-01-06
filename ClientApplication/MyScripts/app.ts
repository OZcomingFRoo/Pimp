//$("#btn").click(function () {
//    alert("post !!");
//    $.post("http://localhost:61360/api/Report/Write", { "Text": $("#txt").val(), "Date": { "Year": 2010, "Month": 12, "Day": 12 } }, function (data, status) {
//        alert("Data: " + data + "\nStatus: " + status);
//    })
//})
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});