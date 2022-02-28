# Find item in data array
How to search for a string inside an array of strings

**Demo link:** https://jsfiddle.net/akgoze/2ozcjL0n/43/


```js
function findStringInData(search_item, data_array) {

    // Find all word item that contains search_item.
    const definedSeperateCategories = data_array.map(c => c.toString().toLowerCase().split(" "));

    // Split data into words and remove duplicates.
    let seperateDataByWords =data_array.map(a => a.toString().toLowerCase().split(" ")).flat().filter((item, index, data) => data.indexOf(item) === index);

    // Search into seperateDataByWords array for search_item.
    let sliceWordsBySearchItemLength = seperateDataByWords.filter(a => a.slice(0,search_item.length) === search_item);


    // Find all data item that contains search_item.
    let resultTags = () => {
        let searchResultItems = [];

        // Find all word item that contains search_item.
        definedSeperateCategories.map(a => {
            a.filter(b => {
                if (sliceWordsBySearchItemLength.indexOf(b) > -1) {
                    // Added finded item to searchResultItems array.
                    searchResultItems.push(data_array[definedSeperateCategories.indexOf(a)]);
                }
            });
        });
        return searchResultItems;
    };

    return resultTags();
};
```
