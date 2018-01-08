app.controller('ListReportTagController', function ($scope, apiService)
{
    //data models
    $scope.data = [];
    $scope.List = [];
    $scope.Day = NaN;
    $scope.Month = NaN;
    $scope.Year = NaN;
    //data models

    //Loads $scope.data with all ReportTags (Id, date and title).
    apiService.GetListOfTagReportId().then(
        function (response) {
            var data: ReportTag[] = [];
            for (let i = 0; i < response.data.length; i++)
            {
                data.push(new ReportTag(response.data[i].Title,response.data[i].ReportNumberID, new SimpleDate(response.data[i].Day,
                        response.data[i].Month, response.data[i].Year)));
            }
            $scope.data = data;

            for (let j = 0; j < data.length; j += 3)
            {
                $scope.List.push({ First: data[j], Second: data[j + 1], Third: data[j + 2] });
            }
        },//Success Event
        function (response) {
            alert("Error occured");
        }//Error Event
    );

    //This was the replacement of Filter "dateFilter". 
    //saerches for the relevent Report given by date and title
    $scope.Search = function ()
    {
        let FilterList = $scope.data;
        if (!isNaN($scope.Year) && $scope.Year != null)
        {
            FilterList = (<ReportTag[]>FilterList).filter(item => item.date.Year == $scope.Year)
            if (<number>$scope.Month != null && !isNaN($scope.Month))
            {
                FilterList = (<ReportTag[]>FilterList).filter(item => item.date.Month == $scope.Month)
                if (<number>$scope.Day != null && !isNaN($scope.Day))
                {
                    FilterList = (<ReportTag[]>FilterList).filter(item => item.date.Day == $scope.Day)
                }
            }
        }
        $scope.List = [];
        for (let i = 0; i < FilterList.length; i += 3) {
            $scope.List.push({ First: FilterList[i], Second: FilterList[i + 1], Third: FilterList[i + 2] });
        }
    }
});