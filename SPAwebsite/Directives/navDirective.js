app.directive("pimpNav", function () {
    return {
        template: "<nav class=\"navbar navbar-inverse\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" href=\"Home\">Pimp(home)</a>\n            </div>\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"Write\">Write a New Report</a></li>\n                <li><a href=\"Search\">Find Reports</a></li>\n                <li><a href=\"List\">Show All Report tags</a></li>\n                <li><a href=\"About\">About</a></li>\n            </ul>\n        </div>\n    </nav>",
        restrict: "E"
    };
});
//# sourceMappingURL=navDirective.js.map