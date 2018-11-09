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




 
function myFunction() {
    var x = document.getElementById("state").value;
    document.getElementById("stateDemo").innerHTML = usStates[x].name;
    console.log(usStates[x].name)
    var y = document.getElementById("ntee").value;
    document.getElementById("nteeDemo").innerHTML = charityCategory[y].ntee;
    console.log(charityCategory[y].nteeID)
    var z = document.getElementById("subSec").value;
    document.getElementById("subSecDemo").innerHTML = subSec[z].taxSec;
    console.log(subSec[z].tsID)
}