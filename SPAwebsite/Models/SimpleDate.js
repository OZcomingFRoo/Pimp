var SimpleDate = (function () {
    function SimpleDate(Day, Month, Year) {
        this.Day = Day;
        this.Month = Month;
        this.Year = Year;
    }
    Object.defineProperty(SimpleDate.prototype, "Day", {
        get: function () {
            return this.d;
        },
        set: function (dayValue) {
            if (dayValue >= 1 && dayValue <= 31)
                this.d = dayValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleDate.prototype, "Month", {
        get: function () {
            return this.m;
        },
        set: function (monthValue) {
            if (monthValue >= 1 && monthValue <= 12)
                this.m = monthValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleDate.prototype, "Year", {
        get: function () {
            return this.y;
        },
        set: function (yearValue) {
            if (yearValue > 2006)
                this.y = yearValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleDate.prototype, "ToDate", {
        get: function () {
            return new Date(this.Year, this.Month, this.Day);
        },
        enumerable: true,
        configurable: true
    });
    SimpleDate.prototype.toString = function () {
        return this.Day + "." + this.Month + "." + this.Year;
    };
    return SimpleDate;
}());
//# sourceMappingURL=SimpleDate.js.map