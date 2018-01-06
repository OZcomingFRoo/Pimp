app.factory('GetLast', function ($http) {
    return {
        Foo: function () {
            $http.get("http://localhost:61360/api/Report/LastReport").then(function (response) {
                var date = new SimpleDate(response.data.Date.Day, response.data.Date.Month, response.data.Date.Year);
                return new Report(response.data.Id, date, response.data.Text);
            });
        }
    };
});
//# sourceMappingURL=RecentReport.js.map