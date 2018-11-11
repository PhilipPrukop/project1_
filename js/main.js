$(document).ready(function() {

    //on click, set searchTerm's value to user input
    var searchTerm;
    var stateSelected;
    var categorySelected;
    var subSecSelected;
    $("#searchBtn").click(function(){
        searchTerm = $("#searchBar").val();
        //get selector values if user used filter
        stateSelected = $("#state").val();
        categorySelected = $("#ntee").val();
        subSecSelected = $("#subSec").val();
        console.log(searchTerm);
        console.log(stateSelected);
        console.log(categorySelected);
        console.log(subSecSelected);
    });



});

