var SimpleDate = (function () {
    function SimpleDate(Day, Month, Year) {
        this.Day = Day;
        this.Month = Month;
        this.Year = Year;
    }
    SimpleDate.prototype.toString = function () {
        return "Date - " + this.Day + "/" + this.Month + "/" + this.Year;
    };
    return SimpleDate;
}());
var TagId = (function () {
    function TagId(date, Id) {
        this.date = date;
        this.Id = Id;
    }
    return TagId;
}());
//# sourceMappingURL=class.js.map