/* This is of no use in this application
- Why you ask ? this it the limit use of the Filter feature in AngularJS Development

- The problem/issue: the filter will self recursion itself until error pops and crushes the the client side

- Possible Solutions : from what I researched you need to create a shallow copy of filtered object.
  Did not help in my situation

- why do I keep this "obsolete code"?: To show the limitation of AngularJS which is probably not support
  as the new Angular version.

*/
app.filter('dateFilter', function () {
    return function (array, parameter) {
        if (parameter != null) {
            var Arr = [];
            for (var i = 0; i < array.length; i++) {
                Arr.push(array[i]);
            }
            //Create Shallow copy of array due to infinite loop issue in filter of AngularJS 
            var filterResults = [];
            for (var i = 0; i < Arr.length; i++) {
                if (Arr[i].First != null)
                    filterResults.push(Arr[i].First);
                if (Arr[i].Second != null)
                    filterResults.push(Arr[i].Second);
                if (Arr[i].Third != null)
                    filterResults.push(Arr[i].Third);
            }
            var List = [];
            for (var i = 0; i < filterResults.length; i += 3) {
                List.push({ First: filterResults[i], Second: filterResults[i + 1], Third: filterResults[i + 2] });
            }
            return List;
        }
        else
            return array;
    };
});
//# sourceMappingURL=dateFilter.js.map