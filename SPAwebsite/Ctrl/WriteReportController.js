app.controller('WriteReportController', function ($scope, apiService, $timeout, $location) {
    //data models
    //Day Select option
    $scope.days = [];
    for (var i = 1; i <= 31; i++) {
        $scope.days.push(i);
    }
    ;
    //Day Select option
    //Month Select option
    $scope.months = [];
    for (var i = 1; i <= 12; i++) {
        $scope.months.push(i);
    }
    ;
    //Month Select option
    $scope.date = new Date();
    $scope.bool = false;
    $scope.Report = new Report(NaN, "", new SimpleDate($scope.date.getDate(), $scope.date.getMonth() + 1, $scope.date.getFullYear()), "");
    //data models
    //This is function is also present in WriteReportController but in here it does nothing
    $scope.SaveChanges = function () {
        alert("This function is not supported for this page");
    };
    //When User clicks the 'create' button. this function will post his report
    //and navigate him to the report view of his new report.
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
//# sourceMappingURL=WriteReportController.js.map