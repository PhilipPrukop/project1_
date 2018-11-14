var getClickedEin;



$(document).ready(function() {
var searchName;
var searchState;
var searchCategory;
var einNumber = 0;
var queryURL;
var crossOriginURL = "https://cors-ut-bootcamp.herokuapp.com/";
var organizationName;

function einNumberSearch(ein){
    queryURL = crossOriginURL + "https://projects.propublica.org/nonprofits/api/v2/organizations/" + ein + ".json";
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
 
        console.log(response.organization.name);

        //display details on targeted modal
        $("#displayDetails").modal("show");
        $("#detailedResultsTitle").html(response.organization.name);
        $("#detailedResultsMsg").html("<h5>Placeholder</h5>")
        $("#detailedResultsMsg").append("<h5>Rating</h5><p id='ratingHere'></p>");
        
        $("#detailedResultsMsg").append("<h5>Tax Filing PDF: </h5>");
        
        //check to see if there is any pdf at all
        if(response.filings_with_data.length > 0){
            //populate tax year buttons with links lead to respective pdf file
            for(i=0; i < response.filings_with_data.length; i++){
                $("#detailedResultsMsg").append("<a href='" + response.filings_with_data[i].pdf_url +"' target='_bland' class='btn btn-outline-info' role='button' aria-pressed='true'>" + response.filings_with_data[i].tax_prd_yr + "</a>");
                console.log(response.filings_with_data[i].tax_prd_yr);
                console.log(response.filings_with_data[i].pdf_url);
            };
        } else {
            //let user know there is no pdf found
            $("#detailedResultsMsg").append("<p>No Tax pdfs were found!</p>");
        }
    });
    //call getRating function to populate rating and url link
    getRating(ein);
 };

 function getRating(ein){
    var queryURL = "https://api.data.charitynavigator.org/v2/Organizations/" + ein + "?app_id=ceaf5661&app_key=1775b257fabc9f4b810868930ac20f80";
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (results) {
        // console.log(results);
        console.log(results.currentRating.score);
        console.log(results.websiteURL);
        $("#ratingHere").html(results.currentRating.score);
        $("#detailedResultsMsg").append("</br><a href='" + results.websiteURL + "' target='_blank'>Visit this organization's website</a></br>");

    })
       .fail(function(err) {
           throw err;
           });
};

getClickedEin = function(einNumber){
    var einNumber;
    console.log(einNumber);
    
    einNumberSearch(einNumber);
    
};
 
   

function initialSearch(searchT, state, category){
   var searchName = searchT;
   var searchState = state;
   var searchCategory = category;
   function populateList(response) {
       for (var i = 0; i <= 20; i++){
           einNumber = response.organizations[i].ein;
           organizationName = response.organizations[i].name;
           console.log(einNumber);
           console.log(organizationName);
           console.log(response.organizations[i].subseccd);
           //output result to html
           $("#resultDisplay").append("<button type='button' class='list-group-item list-group-item-action' onClick='getClickedEin(" + einNumber + ")' id='" + einNumber +"'>" + organizationName + "</button>")
       };
   }

   queryURL = crossOriginURL + "https://projects.propublica.org/nonprofits/api/v2/search.json?q=" + searchName + "&state%5Bid%5D=" + searchState + "&ntee%5Bid%5D=" + searchCategory + "&c_code%5Bid%5D=" + searchSubSec;

   console.log(queryURL);

   $.ajax({
       url: queryURL,
       method: "GET"
   }).then(function(response) {
       //only display up to 20 results on the page
       if (response.total_results >= 20) {
           $("#numOfResults").html("Displaying 20 of " + response.total_results + " results. <p>Please be more specific with your search term to narrow down the results!</p>")
           populateList(response);
       } else {
           $("#numOfResults").html("Displaying " + response.total_results + " of " + response.total_results + " results.")
           populateList(response);
       }
   });

};

    

     


    var usStates = [
        { name: '', abbreviation: ''},
        { name: 'ALABAMA', abbreviation: 'AL'},
        { name: 'ALASKA', abbreviation: 'AK'},
        { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
        { name: 'ARIZONA', abbreviation: 'AZ'},
        { name: 'ARKANSAS', abbreviation: 'AR'},
        { name: 'CALIFORNIA', abbreviation: 'CA'},
        { name: 'COLORADO', abbreviation: 'CO'},
        { name: 'CONNECTICUT', abbreviation: 'CT'},
        { name: 'DELAWARE', abbreviation: 'DE'},
        { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
        { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
        { name: 'FLORIDA', abbreviation: 'FL'},
        { name: 'GEORGIA', abbreviation: 'GA'},
        { name: 'GUAM', abbreviation: 'GU'},
        { name: 'HAWAII', abbreviation: 'HI'},
        { name: 'IDAHO', abbreviation: 'ID'},
        { name: 'ILLINOIS', abbreviation: 'IL'},
        { name: 'INDIANA', abbreviation: 'IN'},
        { name: 'IOWA', abbreviation: 'IA'},
        { name: 'KANSAS', abbreviation: 'KS'},
        { name: 'KENTUCKY', abbreviation: 'KY'},
        { name: 'LOUISIANA', abbreviation: 'LA'},
        { name: 'MAINE', abbreviation: 'ME'},
        { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
        { name: 'MARYLAND', abbreviation: 'MD'},
        { name: 'MASSACHUSETTS', abbreviation: 'MA'},
        { name: 'MICHIGAN', abbreviation: 'MI'},
        { name: 'MINNESOTA', abbreviation: 'MN'},
        { name: 'MISSISSIPPI', abbreviation: 'MS'},
        { name: 'MISSOURI', abbreviation: 'MO'},
        { name: 'MONTANA', abbreviation: 'MT'},
        { name: 'NEBRASKA', abbreviation: 'NE'},
        { name: 'NEVADA', abbreviation: 'NV'},
        { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
        { name: 'NEW JERSEY', abbreviation: 'NJ'},
        { name: 'NEW MEXICO', abbreviation: 'NM'},
        { name: 'NEW YORK', abbreviation: 'NY'},
        { name: 'NORTH CAROLINA', abbreviation: 'NC'},
        { name: 'NORTH DAKOTA', abbreviation: 'ND'},
        { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
        { name: 'OHIO', abbreviation: 'OH'},
        { name: 'OKLAHOMA', abbreviation: 'OK'},
        { name: 'OREGON', abbreviation: 'OR'},
        { name: 'PALAU', abbreviation: 'PW'},
        { name: 'PENNSYLVANIA', abbreviation: 'PA'},
        { name: 'PUERTO RICO', abbreviation: 'PR'},
        { name: 'RHODE ISLAND', abbreviation: 'RI'},
        { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
        { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
        { name: 'TENNESSEE', abbreviation: 'TN'},
        { name: 'TEXAS', abbreviation: 'TX'},
        { name: 'UTAH', abbreviation: 'UT'},
        { name: 'VERMONT', abbreviation: 'VT'},
        { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
        { name: 'VIRGINIA', abbreviation: 'VA'},
        { name: 'WASHINGTON', abbreviation: 'WA'},
        { name: 'WEST VIRGINIA', abbreviation: 'WV'},
        { name: 'WISCONSIN', abbreviation: 'WI'},
        { name: 'WYOMING', abbreviation: 'WY' }
    ];

    for(var i = 0;i<usStates.length;i++){
        var option = document.createElement("option");
        option.text = usStates[i].name+' '+usStates[i].abbreviation+'';
        option.value = i;
        var select = document.getElementById("state");
        select.appendChild(option);
    }



    var charityCategory = [
        { ntee: '', nteeID: ''},
        { ntee: 'Arts, Culture & Humanities', nteeID: '1'},
        { ntee: 'Education', nteeID: '2'},
        { ntee: 'Environment and Animals', nteeID: '3'},
        { ntee: 'Health', nteeID: '4'},
        { ntee: 'Health Services', nteeID: '5'},
        { ntee: 'International, Foreign Affairs', nteeID: '6'},
        { ntee: 'Public, Societal Benefit', nteeID: '7'},
        { ntee: 'Religion Related', nteeID: '8'},
        { ntee: 'Mutual/Membership Benefit', nteeID: '9'},
        { ntee: 'Unknown, Unclassified', nteeID: '10'},
        
    ];

    for(var i = 0;i<charityCategory.length;i++){
        var option = document.createElement("option");
        option.text = charityCategory[i].ntee;
        option.value = i;
        var select = document.getElementById("ntee");
        select.appendChild(option);
    }


    var subSec = [
        { taxSec: '', tsID: ''},
        { taxSec: '501(c)(2)', tsID: '2'},
        { taxSec: '501(c)(3)', tsID: '3'},
        { taxSec: '501(c)(4)', tsID: '4'},
        { taxSec: '501(c)(5)', tsID: '5'},
        { taxSec: '501(c)(6)', tsID: '6'},
        { taxSec: '501(c)(7)', tsID: '7'},
        { taxSec: '501(c)(8)', tsID: '8'},
        { taxSec: '501(c)(9)', tsID: '9'},
        { taxSec: '501(c)(10)', tsID: '10'},
        { taxSec: '501(c)(11)', tsID: '11'},
        { taxSec: '501(c)(12)', tsID: '12'},
        { taxSec: '501(c)(13)', tsID: '13'},
        { taxSec: '501(c)(14)', tsID: '14'},
        { taxSec: '501(c)(15)', tsID: '15'},
        { taxSec: '501(c)(16)', tsID: '16'},
        { taxSec: '501(c)(17)', tsID: '17'},
        { taxSec: '501(c)(18)', tsID: '18'},
        { taxSec: '501(c)(19)', tsID: '19'},
        { taxSec: '501(c)(20)', tsID: '20'},
        { taxSec: '501(c)(21)', tsID: '21'},
        { taxSec: '501(c)(22)', tsID: '22'},
        { taxSec: '501(c)(23)', tsID: '23'},
        { taxSec: '501(c)(25)', tsID: '25'},
        { taxSec: '501(c)(26)', tsID: '26'},
        { taxSec: '501(c)(27)', tsID: '27'},
        { taxSec: '501(c)(28)', tsID: '28'},
        { taxSec: '4947(a)(1)', tsID: '92'},
    
    ];

    for(var i = 0;i<subSec.length;i++){
        var option = document.createElement("option");
        option.text = subSec[i].taxSec;
        option.value = i;
        var select = document.getElementById("subSec");
        select.appendChild(option);
    }
    
    

        //on click, set searchTerm's value to user input
        var searchTerm;
        var x;
        var y;
        var z;
        $("#searchBtn").click(function(){
            searchTerm = $("#searchBar").val().replace(/ /g,'%22'); //user input validation that replaces space with %22
                console.log(searchTerm);
            //get selector values if user used filter
            x = document.getElementById("state").value;
                console.log(usStates[x].abbreviation);
                searchState = usStates[x].abbreviation;
            y = document.getElementById("ntee").value;
                console.log(charityCategory[y].nteeID);
                searchCategory = charityCategory[y].nteeID;
            z = document.getElementById("subSec").value;
                console.log(subSec[z].tsID);
                searchSubSec = subSec[z].tsID;
            //user input validation
            if (x == 0 && y == 0) {
                $("#modalMsg").html("<p>Please select a State and a Category!</p>");
                $("#selectorValidation").modal("show");
            } else if (y == 0) {
                $("#modalMsg").html("<p>Please select a Category!</p>");
                $("#selectorValidation").modal("show");
            } else if (x == 0) {
                $("#modalMsg").html("<p>Please select a State!</p>");
                $("#selectorValidation").modal("show");
            } else {
                //clears results div first
                $("#resultDisplay").empty();
                //run API search function here!!
                initialSearch(searchTerm, searchState, searchCategory);
            }
            
            
        });
    
    
    
    

})

