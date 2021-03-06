app.controller('SearchController', function ($scope, $http, $location, apiService, $timeout) {
    //Data Models
    $scope.text = "";
    $scope.ListResult = [];
    $scope.Report = new Report(-1, "title...", new SimpleDate(1, 1, 1), "");
    //Data Models
    //Refreshed the ListResult array with new data 
    $scope.SearchReports = function () {
        $scope.ListResult = [];
        apiService.SearchReport($scope.text).then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                $scope.ListResult.push(new Report(response.data[i].Id, response.data[i].Title, new SimpleDate(response.data[i].Date.Day, response.data[i].Date.Month, response.data[i].Date.Year), response.data[i].Text));
            }
        }, //Success Event
        function (response) { alert("Error occurred !"); } //Error Event
         //Error Event
        );
    };
    //Pops a model window
    //Showing the selected report.
    $scope.ShowReport = function (Id) {
        var ArrResult = $scope.ListResult;
        $scope.Report = ArrResult.filter(function (item) { return item.Id == Id; }).pop();
        $("#text").html($scope.Report.Content);
    };
    //Navigates to View Report Page
    $scope.ViewReport = function () {
        $("#cls").click();
        $timeout(function () {
            $location.path("Report/" + $scope.Report.Id);
        }, 1000);
    };
});
//# sourceMappingURL=SearchController.js.map