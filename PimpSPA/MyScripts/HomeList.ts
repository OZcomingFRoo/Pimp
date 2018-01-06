var List: TagId[] = [];

$(function ()
{
    $.get("http://localhost:61360/api/Report/GetList", function (data, status) {
        data.forEach(function (item) {
            let SD: SimpleDate = new SimpleDate(<number>item.Day, <number>item.Month, <number>item.Year);
            let obj: TagId = new TagId(SD, item.ReportNumberID);
            List.push(new TagId(SD, item.ReportNumberID));
            console.log(obj);
            //Populates the List
        });

    });
})

function SearchByID(Id: number): void
{
    let Index: TagId;
    List.forEach(function (item) {
        if (item.Id == Id)
        {
            Index = item;
            //Project the result 
            return;
        }
    });
}

function SearchAny(Line: string) {
    let words: string[] = [];
    let start: number = 0;
    for (let i = 0; i < Line.length; i++)
    {
        if (Line[i] == " ")
        {
            words.push(Line.substring(start, i).trim());
            console.log(Line.substring(start, i).trim());
            start = i;
        }
    }
    //Firsly , we saparate the words
}