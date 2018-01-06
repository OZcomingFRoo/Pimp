

class SimpleDate {
    constructor(public Day: number, public Month: number, public Year: number) { }
  
    public toString() {
        return `Date - ${this.Day}/${this.Month}/${this.Year}`;
    }
}

class TagId
{
    constructor(public date: SimpleDate, public Id: number) { }
}

class Report
{
    constructor(public date: SimpleDate,public text:string) { }
}
