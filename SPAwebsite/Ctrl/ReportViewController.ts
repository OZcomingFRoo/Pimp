app.controller('ReportViewController', function ($scope, apiService, $routeParams, $timeout, $location)
{
    $scope.ID = <number>$routeParams.Id;
    $scope.Report = new Report(-1, "title...", new SimpleDate(11, 11, 11), "Text...");
    $scope.EditReport = function ()
    {
        $location.path("/EditReport/" + $scope.ID);
    }
    $scope.DeleteReport = function ()
    {
        var DeleteSuccessed;
        apiService.DeleteReport($scope.ID).then(
            function (response) {
                console.log(response.status);
                $timeout(function () { $location.path("List"); }, 1000);
            },//Success Event
            function (response) { alert("Error Occurred") }//Error Event
            );
        
    }

    apiService.GetReport($scope.ID).then(
        function (response) {
            if (response.status == 200)
            {
                $scope.Report = new Report($scope.ID, response.data.Title,
                    new SimpleDate(response.data.Date.Day, response.data.Date.Month, response.data.Date.Year)
                    , response.data.Text);
                $("#txt").html($scope.Report.Content);
            }
        },//success event
        function (response) { alert("Error , check the console "); }//error event
    );
});