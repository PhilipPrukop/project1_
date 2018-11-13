
var searchName;
var searchState;
var searchCategory;
var einNumber = 0;
var queryURL;
var crossOriginURL = "https://cors-ut-bootcamp.herokuapp.com/";
var queryURL;
var organizationName;
    
function initialSearch(searchT, state, category){

  searchName = searchT;
  searchState = state;
  searchCategory = category;


  queryURL = crossOriginURL + "https://projects.propublica.org/nonprofits/api/v2/search.json?q=" + searchName + "&state=" + searchState;
  // queryURL = crossOriginURL + "https://projects.propublica.org/nonprofits/api/v2/search.json?q=" + searchName + "&state=" + searchState + "&ntee=" + searchCategory;

  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    
        einNumber = response.organizations[0].ein;
        organizationName = response.organizations[0].name;
        console.log(einNumber);
        console.log(organizationName);
  });
};
  