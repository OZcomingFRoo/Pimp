class SimpleDate
{
    private y: number;
    private m: number;
    private d: number;
    get Day():number
    {
        return this.d;
    }
    get Month():number {
        return this.m;
    }
    get Year():number {
        return this.y;
    }
    set Day(dayValue: number)
    {
        if (dayValue >= 1 && dayValue <= 31)
            this.d = dayValue;
    }
    set Month(monthValue: number) {
        if (monthValue >= 1 && monthValue <= 12)
            this.m = monthValue;
    }
    set Year(yearValue: number)
    {
        if (yearValue > 2006)
            this.y = yearValue;
    }
    constructor(Day: number, Month: number, Year: number)
    {
        this.Day = Day;
        this.Month = Month;
        this.Year = Year;
    }

    get ToDate(): Date
    {
        return new Date(this.Year, this.Month, this.Day);
    }
    toString()
    {
        return this.Day + "." + this.Month + "." + this.Year;
    }
}