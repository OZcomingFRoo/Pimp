app.service('apiService', function ($http) {
    this.GetListOfTagReportId = function () {
        return $http.get("http://localhost:61360/api/Report/GetList");
    };
    this.GetReport = function (Id) {
        return $http.get("http://localhost:61360/api/GetReport/" + Id);
    };
    this.GetRecentReport = function () {
        return $http.get("http://localhost:61360/api/Report/LastReport");
    };
    this.SearchReport = function (str) {
        return $http.get("http://localhost:61360/api/Report/SearchByWords?words=" + str);
    };
    this.DeleteReport = function (Id) {
        return $http.delete("http://localhost:61360/api/Report/Delete/" + Id);
    };
    this.EditReport = function (Id) {
        return $http.get("http://localhost:61360/api/Report/Edit/" + Id);
    };
    this.Post = function (data) {
        var body = {
            "Title": data.Title,
            "text": data.Content,
            "Date": { "Day": data.Date.Day, "Month": data.Date.Month, "Year": data.Date.Year }
        };
        return $http.post("http://localhost:61360/api/Report/Write", body);
    };
    this.SaveChanges = function (data) {
        var body = {
            "Id": data.Id,
            "Title": data.Title,
            "text": data.Content,
            "Date": { "Day": data.Date.Day, "Month": data.Date.Month, "Year": data.Date.Year }
        };
        return $http.put("http://localhost:61360/api/Report/Update", body);
    };
});
//$http.get("http://localhost:61360/api/").then(
//    function (response) { },//Success Event
//    function (response) { }//Error Event
//);
//# sourceMappingURL=WebAPIservice.js.map