// creates the routes JSON object
var routes;
// fetches JSON
$.getJSON("./components/json/routes.json", function(data){
      routes = data;
      console.log(routes);
  });

// creates the stops JSON object
var stops;
// fetches JSON
$.getJSON("./components/json/stops.json", function(data){
      stops = data;
      console.log(stops);
  });

// creates the stops JSON object
var trips;
// fetches JSON
$.getJSON("./components/json/trips.json", function(data){
      trips = data;
      console.log(trips);
  });

// creates the stop_times JSON object
var stop_times;
// fetches JSON
$.getJSON("./components/json/stop_times.json", function(data){
      stop_times = data;
      console.log(stop_times);
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

// test for fetch values
$('#routes').change(function() {
    
    $('#stops').find('option')
    .remove()
    .end()
    .append('<option value="All">All</option>')
    .val('All');
    
    $.each(trips[$(this).val()], function(key, tripvalue) {
      console.log(tripvalue.service_id);  
      $.each(stop_times[tripvalue], function(key, stop_tripvalue) {
      console.log(stop_tripvalue);  
      $('#stops')
           .append($("<option></option>")
           .attr("value",stop_tripvalue)
           .text(stop_tripvalue)); 
      }); 
    });
});