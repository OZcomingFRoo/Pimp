app.controller('EditReportController', function ($scope, apiService, $timeout, $location, $routeParams) {
    //Data-models
    $scope.date = new Date();
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
    $scope.bool = true;
    $scope.Report = new Report(NaN, "title...", new SimpleDate($scope.date.getDay(), $scope.date.getMonth() + 1, $scope.date.getFullYear()), "Content to Edit/Create...");
    //Data-models
    //Load the $scope.Report with the relevent Report
    apiService.EditReport($routeParams.Id).then(function (response) {
        $scope.Report = new Report(response.data.Id, response.data.Title, new SimpleDate(response.data.Date.Day, response.data.Date.Month, response.data.Date.Year), response.data.Text);
    }, //Success Event
    function (response) { alert("fail , check console"); } //Error Event
     //Error Event
    );
    //Saves changes of report 
    //Then redirects to the Report View page with the updated Report
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
    //This is function is also present in WriteReportController but in here it does nothing 
    $scope.PostReport = function () {
        alert("This function is not supported for this page");
    };
});
//# sourceMappingURL=EditReportController.js.map