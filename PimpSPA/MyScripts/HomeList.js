var List = [];
$(function () {
    $.get("http://localhost:61360/api/Report/GetList", function (data, status) {
        data.forEach(function (item) {
            var SD = new SimpleDate(item.Day, item.Month, item.Year);
            var obj = new TagId(SD, item.ReportNumberID);
            List.push(new TagId(SD, item.ReportNumberID));
            console.log(obj);
            //Populates the List
        });
    });
});
function SearchByID(Id) {
    var Index;
    List.forEach(function (item) {
        if (item.Id == Id) {
            Index = item;
            //Project the result 
            return;
        }
    });
}
function SearchAny(Line) {
    var words = [];
    var start = 0;
    for (var i = 0; i < Line.length; i++) {
        if (Line[i] == " ") {
            words.push(Line.substring(start, i).trim());
            console.log(Line.substring(start, i).trim());
            start = i;
        }
    }
    //Firsly , we saparate the words
}
//# sourceMappingURL=HomeList.js.map