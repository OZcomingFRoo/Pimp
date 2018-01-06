app.controller('EditReportController', function ($scope, apiService, $timeout, $location, $routeParams) {
    $scope.date = new Date();
    $scope.bool = true;
    $scope.Report = new Report(NaN, "title...", new SimpleDate($scope.date.getDay(), $scope.date.getMonth() + 1, $scope.date.getFullYear()), "Content to Edit/Create...");
    apiService.EditReport($routeParams.Id).then(function (response) {
        $scope.Report = new Report(response.data.Id, response.data.Title, new SimpleDate(response.data.Date.Day, response.data.Date.Month, response.data.Date.Year), response.data.Text);
    }, //Success Event
    function (response) { alert("fail , check console"); } //Error Event
     //Error Event
    );
    $scope.SaveChanges = function () {
        apiService.SaveChanges($scope.Report).then(function (response) {
            alert("successfully Updated Report");
            var index = response.data;
            $location.path("Report/" + index);
        }, //Success Event
        function (response) { alert("Error: Check console"); } //Error Event
         //Error Event
        );
    };
    $scope.PostReport = function () {
        alert("This function is not supported for this page");
    };
});
//# sourceMappingURL=EditReportController.js.map