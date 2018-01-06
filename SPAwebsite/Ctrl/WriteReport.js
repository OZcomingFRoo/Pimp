app.controller('WriteReportController', function ($scope, apiService, $timeout, $location) {
    $scope.date = new Date();
    $scope.bool = false;
    $scope.Report = new Report(NaN, "title...", new SimpleDate($scope.date.getDay(), $scope.date.getMonth() + 1, $scope.date.getFullYear()), "Content to Edit/Create...");
    $scope.SaveChanges = function () {
        alert("This function is not supported for this page");
    };
    $scope.PostReport = function () {
        console.log($scope.Report.Content);
        apiService.Post($scope.Report).then(function (response) {
            alert("successfully Post Report");
            var index = response.data;
            $location.path("Report/" + index);
        }, //Success Event
        function (response) { alert("fail"); } //Error Event
         //Error Event
        );
    };
});
//# sourceMappingURL=WriteReport.js.map