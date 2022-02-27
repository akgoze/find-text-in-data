/** DATA ARRAY */
const categories = ["Search Engine Optimization (SEO)", "Interface Development", "Interface Design", "Information Architecture", "Digital Marketing", "Conversion Optimization", "E-commerce", "Accessibility", "Interaction Design", " Entrepreneurship", "Google Analytics", "Growth Hacking", "Content Marketing", "Content Strategy", "Innovation", "User Research", "User Experience (UX)", "UX Writing", "User Testing", "Usability", "Brand Experience", "Methodology", "Mobile and Tablet", "Customer Experience (CX)", "Internet of Things (IoT)", "Readability", "Gamification", "Project Management", "Prototyping", "Virtual Reality (VR)", "Systems-Oriented Thinking", "Sustainability", "Design and Psychology", "Typography", "Product and Service Design", "Data Analytics", " Productivity", "Artificial Intelligence (AI)", "Software"];


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
