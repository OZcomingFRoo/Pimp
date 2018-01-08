app.controller('ListReportTagController', function ($scope, apiService) {
    //data models
    $scope.data = [];
    $scope.List = [];
    $scope.Day = NaN;
    $scope.Month = NaN;
    $scope.Year = NaN;
    //data models
    //Loads $scope.data with all ReportTags (Id, date and title).
    apiService.GetListOfTagReportId().then(function (response) {
        var data = [];
        for (var i = 0; i < response.data.length; i++) {
            data.push(new ReportTag(response.data[i].Title, response.data[i].ReportNumberID, new SimpleDate(response.data[i].Day, response.data[i].Month, response.data[i].Year)));
        }
        $scope.data = data;
        for (var j = 0; j < data.length; j += 3) {
            $scope.List.push({ First: data[j], Second: data[j + 1], Third: data[j + 2] });
        }
    }, //Success Event
    function (response) {
        alert("Error occured");
    } //Error Event
     //Error Event
    );
    //This was the replacement of Filter "dateFilter". 
    //saerches for the relevent Report given by date and title
    $scope.Search = function () {
        var FilterList = $scope.data;
        if (!isNaN($scope.Year) && $scope.Year != null) {
            FilterList = FilterList.filter(function (item) { return item.date.Year == $scope.Year; });
            if ($scope.Month != null && !isNaN($scope.Month)) {
                FilterList = FilterList.filter(function (item) { return item.date.Month == $scope.Month; });
                if ($scope.Day != null && !isNaN($scope.Day)) {
                    FilterList = FilterList.filter(function (item) { return item.date.Day == $scope.Day; });
                }
            }
        }
        $scope.List = [];
        for (var i = 0; i < FilterList.length; i += 3) {
            $scope.List.push({ First: FilterList[i], Second: FilterList[i + 1], Third: FilterList[i + 2] });
        }
    };
});
//# sourceMappingURL=ListReportTagController.js.map