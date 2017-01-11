// creates the empty variables where we will store our JSON data
var routes;
var stops;
var trips;
var stop_times;

// creates the object to fetch the appropriate data for each JSON
function fetchJSON (file, variable){
  $.getJSON(file, function(result){
      variable = result;
      console.log(variable);
    });
};

// assigns JSON to variable using OOJS
var routeFetch = new fetchJSON("./components/json/routes.json", routes);
var stopsFetch = new fetchJSON("./components/json/routes.json", stops);
var tripsFetch = new fetchJSON("./components/json/routes.json", trips);
var stoptimesFetch = new fetchJSON("./components/json/routes.json", stop_times);

var accounts = ["WHDH","TF"];
var mediaGroups = {"WHDH": ["WHDH_1","WHDH_2"], "TF": ["TF_1","TF_2"]};
var clipUrls = {"WHDH_1": ["/live/whdh1/1","/live/whdh1/2","/live/whdh1/3"], "WHDH_2": ["/live/whdh2/1","/live/whdh2/2","/live/whdh2/3"], "TF_1": ["/live/tf1/1","/live/tf1/2","/live/tf1/3"], "TF_2": ["/live/tf2/1","/live/tf2/2","/live/tf2/3"]};

$('#first').change(function() {
    
    $('#second').find('option')
    .remove()
    .end()
    .append('<option value="All">All</option>')
    .val('All');
    
    $.each(mediaGroups[$(this).val()], function(key, value) {   
     $('#second')
         .append($("<option></option>")
         .attr("value",value)
         .text(value)); 
    });
});

$('#second').change(function() {
    $('#third').find('option')
    .remove()
    .end()
    .append('<option value="All">All</option>')
    .val('All');
    
    $.each(clipUrls[$(this).val()], function(key, value) {   
     $('#third')
         .append($("<option></option>")
         .attr("value",value)
         .text(value)); 
    });
});