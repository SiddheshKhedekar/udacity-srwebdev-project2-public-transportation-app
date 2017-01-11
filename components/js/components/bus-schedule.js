// creates the empty variables where we will store our JSON data
var routes;
var stops;
var trips;
var stop_times;

// fetches JSON data 
$.getJSON("./components/json/routes.json", function(result){
      routes = result;
      console.log(routes);
    });



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