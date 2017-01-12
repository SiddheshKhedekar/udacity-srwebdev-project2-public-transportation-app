/* ===================================

  JS document to handle train schedules

======================================*/

// for this project, I will stick to jQuery to grab JSON data
// I will need to ask a bunch of questions about json filters, as I could not filter much data and instead created many JSON files

/* ===================================

    Model

======================================*/

    // Holds the stop_times JSON object
    var stop_times;

    // holds the values of the route options
    var rFromVal;
    var rToVal;

/* ===================================

    View

 ======================================*/

/* fetches JSON
$.getJSON("./components/json/stop_times.json", function(data){
      stop_times = data;
      // console.log(stop_times);
  }); */

// sets variables for containers
var dates = $('#dates');
var dir = $('#direction');
var nb = $('#nb');
var sb = $('#sb');
var sDisplay = $('#sDisplay');

// sets variables for route select elements
var nbFrom = $('#northBoundFrom');
var nbTo = $('#northBoundTo');
var sbFrom = $('#southBoundFrom');
var sbTo = $('#southBoundTo');

/* ===================================

    Controller

======================================*/
// displays direction inputs after dates have been selected
dates.change(function(data){

  // sets the value of the date inputs
  var datesValue = dates.val();
  
  switch(datesValue) {
    case "WEEK":
    
    dir.removeClass('hidden');

    //fetches JSON
    $.getJSON("./components/json/stops_week.json", function(data){
          stop_times = data;
          console.log(stop_times);
    });

      break;
    case "SAT":

    dir.removeClass('hidden');
    
    //fetches JSON
    $.getJSON("./components/json/stops_sat.json", function(data){
          stop_times = data;
          console.log(stop_times);
    });    

      break;
    case "SUN":

    dir.removeClass('hidden');

    //fetches JSON
    $.getJSON("./components/json/stops_sun.json", function(data){
          stop_times = data;
          console.log(stop_times);
    });

        break;
    default:
        dir.addClass('hidden');
}

});

// grabs the correct input for the schedules

dir.change(function(data){
  
  // sets the value of the from route
  var dirValue = dir.val();

  // creates if handlers for route display
  if (dirValue === "NB") {
    nbHandle = new handleDisplay(nb, sb, false);
    nfromFetch = new fetchTimes(nbFrom);
    ntoFetch = new fetchTimes(nbTo, nbFrom);
  }
  else if (dirValue === "SB") {
    sbHandle = new handleDisplay(sb, nb, false);
    sfromFetch = new fetchTimes(sbFrom);
    stoFetch = new fetchTimes(sbTo, sbFrom);
  }
  else {
    sbHandle = new handleDisplay(sb, nb, true);
  }
});

// creates the constructor for setting element display
function handleDisplay(showEl, hideEl, hideBoth){
    if (hideBoth === true) {
      showEl.addClass('hidden');
      hideEl.addClass('hidden');
    } else {
      showEl.removeClass('hidden');
      hideEl.addClass('hidden');
    }
}; 

// creates the constructor for fetching route times
function fetchTimes(routeFrom, routeTo){
  
  // handles fetching of stop data
  routeFrom.change(function() {

    // sets the values of each stop value
    rFromVal = routeFrom.val();

    // fethes the times for routeTo
    $.each(stop_times[rToVal], function (key, value) {

      console.log(value.arrival_time);

    });

     /* $('#stops').find('option')
      .remove()
      .end()
      .append('<option value="All">All</option>')
      .val('All');
      
      $.each(stop_times[$(this).val()], function(key, stops) {
        console.log(key);   

      }); */
  });
  
    routeTo.change(function() {

      // sets the values of each stop value
      rToVal = routeTo.val();

      // fethes the times for routeTo
      $.each(stop_times[rToVal], function (key, value) {

        console.log(value.arrival_time);

      });

     /* $('#stops').find('option')
      .remove()
      .end()
      .append('<option value="All">All</option>')
      .val('All');
      
      $.each(stop_times[$(this).val()], function(key, stops) {
        console.log(key);   

      }); */
  });

};


// creates constructor for fetching route times
function routeTimes(JSON, rValue, stationContainer, timeContainer){

  $.each(JSON[rValue], function (key, value) {
      console.log(value.arrival_time);
      console.log(rValue);
      stationContainer.append($("<span></span>").attr("class", "sTime").text(rValue));
      timeContainer.append($("<span></span>").attr("class", "sStation").text(value.arrival_time));
  });
      
};
