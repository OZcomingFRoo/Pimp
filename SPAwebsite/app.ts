//In here we write the NgRoute



app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/Home", {
            templateUrl: "Views/Home.html"
            ,controller: "HomeController"
        })
        .when("/List", {
            templateUrl: "Views/ListReportTag.html"
            , controller: "ListReportTagController"
        })
        .when("/Search", {
            templateUrl: "Views/Search.html"
            ,controller: "SearchController"
        })
        .when("/Write", {
            templateUrl: "Views/ReportEditor.html"
            , controller: "WriteReportController"
        })
        .when("/EditReport/:Id", {
            templateUrl: "Views/ReportEditor.html"
            , controller: "EditReportController"
        })
        .when("/Report/:Id", {
            templateUrl: "Views/ReportView.html",
            controller: "ReportViewController"
        })
        .when("/About", {
            templateUrl: "Views/About.html"
        })
        .otherwise({
            templateUrl: "Views/Home.html"
            , controller: "HomeController"
        })
    $locationProvider.html5Mode(true);
});