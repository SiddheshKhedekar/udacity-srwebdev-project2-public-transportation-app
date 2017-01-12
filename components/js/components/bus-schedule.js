/* ===================================

  JS document to handle train schedules

======================================*/

// for this project, will use the MVC sample defined here : https://alexatnet.com/articles/model-view-controller-mvc-javascript 
// import {main} from '../app.js';
// extend these as new objects from the main MVC in app.js in the future for commonly used functions


  /* ===================================

    View

  ======================================*/

// creates the routes JSON object
var routes;
// fetches JSON
$.getJSON("./components/json/routes.json", function(data){
      routes = data;
      // console.log(routes);
  });

// creates the stops JSON object
var stops;
// fetches JSON
$.getJSON("./components/json/stops.json", function(data){
      stops = data;
      // console.log(stops);
  });

// creates the stops JSON object
var trips;
// fetches JSON
$.getJSON("./components/json/trips.json", function(data){
      trips = data;
      // console.log(trips);
  });

// creates the stop_times JSON object
var stop_times;
// fetches JSON
$.getJSON("./components/json/stop_times.json", function(data){
      stop_times = data;
      // console.log(stop_times);
  });

// sets variables for route select elements
var nbFrom = $('#northBoundFrom');
var nbTo = $('#northBoundTo');
var sbFrom = $('#southBoundFrom');
var sbTo = $('#southBoundTo');

var accounts = ["WHDH","TF"];
var mediaGroups = {"WHDH": ["WHDH_1","WHDH_2"], "TF": ["TF_1","TF_2"]};
var clipUrls = {"WHDH_1": ["/live/whdh1/1","/live/whdh1/2","/live/whdh1/3"], "WHDH_2": ["/live/whdh2/1","/live/whdh2/2","/live/whdh2/3"], "TF_1": ["/live/tf1/1","/live/tf1/2","/live/tf1/3"], "TF_2": ["/live/tf2/1","/live/tf2/2","/live/tf2/3"]};

/* ===================================

    Controller

======================================*/

$('#direction').change(function(data){
  
  // sets the value of the from route
  var direction = $('#direction').val();

  // creates if handlers for route display
  if (direction === "NB") {
    nbFrom.removeClass('hidden');
    nbTo.removeClass('hidden');
    sbFrom.addClass('hidden');
    sbTo.addClass('hidden');
  }
  else if (direction === "SB") {
    sbFrom.removeClass('hidden');
    sbTo.removeClass('hidden');
    nbFrom.addClass('hidden');
    nbTo.addClass('hidden');
  }
  else {
    nbFrom.addClass('hidden');
    nbTo.addClass('hidden');
    sbFrom.addClass('hidden');
    sbTo.addClass('hidden');
  }
});


// handles fetching of stop data
nbFrom.change(function() {
    var nbVal = nbFrom.val();
    /* can fetch individual object values
    $.each(stops, function (key, value) {
    console.log(value.FIELD3); */
    $.each(stop_times[nbVal], function (key, value) {
    console.log(value.arrival_time); 
    // the below can be used to filter data with specific values
    var sTime = value.arrival_time == '19:13:00';
    console.log(sTime);
});
   /* $('#stops').find('option')
    .remove()
    .end()
    .append('<option value="All">All</option>')
    .val('All');
    
    $.each(stop_times[$(this).val()], function(key, stops) {
      console.log(key);   
     $('#stops')
         .append($("<option></option>")
         .attr("tripvalue",stops)
         .text(stops)); 
    }); */
});



// handles JSON fetch
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
