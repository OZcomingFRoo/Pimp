app.directive("pimpNav", function () {
    return {
        template: `<nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="Home">Pimp(home)</a>
            </div>
            <ul class="nav navbar-nav">
                <li><a href="Write">Write a New Report</a></li>
                <li><a href="Search">Find Reports</a></li>
                <li><a href="List">Show All Report tags</a></li>
                <li><a href="About">About</a></li>
            </ul>
        </div>
    </nav>`,
        restrict: "E"
    };
});