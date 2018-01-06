app.controller('HomeController', function ($scope, $http, apiService) {
    $scope.LastReport;
    apiService.GetRecentReport().then(function (response) {
        var date = new SimpleDate(response.data.Date.Day, response.data.Date.Month, response.data.Date.Year);
        $scope.LastReport = new Report(response.data.Id, response.data.Title, date, response.data.Text);
    });
});
//$http.get("http://localhost:61360/api/Report/LastReport").then(
//    function (response) {
//    let date: SimpleDate = new SimpleDate(response.data.Date.Day,
//        response.data.Date.Month, response.data.Date.Year);
//    $scope.LastReport = new Report(response.data.Id,
//        date, response.data.Text);
//}); 
//# sourceMappingURL=HomeController.js.map